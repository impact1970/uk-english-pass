"""Generate all lesson audio locally with Kokoro-82M bf_isabella.

Run after creating `.audio-env` from `requirements-audio.txt` and downloading
the Kokoro ONNX model files described in the README. No cloud API is used.
Outputs 24 kHz mono AAC/M4A files.
"""
from __future__ import annotations

import argparse
import json
import subprocess
import tempfile
from pathlib import Path

import imageio_ffmpeg
import numpy as np
import soundfile as sf
from kokoro_onnx import Kokoro

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "src" / "data" / "lessons.json"
OUTPUT = ROOT / "public" / "audio"
VOICE = "bf_isabella"
SAMPLE_RATE = 24_000


def synthesise(engine: Kokoro, text: str) -> np.ndarray:
    audio, sample_rate = engine.create(text, voice=VOICE, speed=0.94, lang="en-gb")
    if sample_rate != SAMPLE_RATE:
        raise RuntimeError(f"Unexpected Kokoro sample rate: {sample_rate}")
    return np.asarray(audio, dtype=np.float32)


def lesson_audio(engine: Kokoro, lesson: dict) -> np.ndarray:
    # All lessons intentionally use one female voice. Supplying the complete
    # dialogue in one call lets Kokoro batch the sentences efficiently while
    # retaining punctuation-based pauses between turns.
    text = " ".join(turn["text"] for turn in lesson["script"])
    audio = synthesise(engine, text)
    peak = float(np.max(np.abs(audio)))
    if peak > 0:
        audio = audio * min(0.94 / peak, 1.35)
    return audio


def encode_m4a(audio: np.ndarray, destination: Path) -> None:
    destination.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix="ukep-audio-") as temp_dir:
        wav = Path(temp_dir) / "source.wav"
        sf.write(wav, audio, SAMPLE_RATE, subtype="PCM_16")
        command = [
            imageio_ffmpeg.get_ffmpeg_exe(), "-y", "-loglevel", "error", "-i", str(wav),
            "-vn", "-c:a", "aac", "-b:a", "64k", "-ar", str(SAMPLE_RATE), "-ac", "1",
            "-movflags", "+faststart", str(destination),
        ]
        subprocess.run(command, check=True)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--start", type=int, default=1, help="Start from this 1-based lesson number")
    parser.add_argument("--limit", type=int, default=None, help="Generate only the first N lessons")
    parser.add_argument("--force", action="store_true", help="Regenerate existing files")
    args = parser.parse_args()
    lessons = json.loads(DATA.read_text(encoding="utf-8"))
    lessons = lessons[max(0, args.start - 1):]
    if args.limit:
        lessons = lessons[: args.limit]

    print(f"Loading Kokoro-82M voice {VOICE}…", flush=True)
    engine = Kokoro(
        str(ROOT / ".audio-cache" / "kokoro-v1.0.onnx"),
        str(ROOT / ".audio-cache" / "voices-v1.0.bin"),
    )
    for index, lesson in enumerate(lessons, 1):
        target = ROOT / "public" / lesson["audio"]["file"]
        if target.exists() and not args.force:
            print(f"[{index:02}/{len(lessons):02}] {lesson['lesson_id']} already exists", flush=True)
            continue
        audio = lesson_audio(engine, lesson)
        encode_m4a(audio, target)
        seconds = len(audio) / SAMPLE_RATE
        print(f"[{index:02}/{len(lessons):02}] {lesson['lesson_id']} {seconds:.1f}s -> {target.name}", flush=True)


if __name__ == "__main__":
    main()
