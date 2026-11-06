# Third-party notices

Last generated: 2026-11-06T18:26:54.359Z

UK English Pass original learning content is not included in this third-party list. Its public and commercial distribution terms are described in CONTENT_LICENSING.md.

## Runtime and build software

The React/Vite/TypeScript dependency graph and exact installed versions are recorded in THIRD_PARTY_PACKAGE_LICENSES.md. The audit currently contains 46 packages across these declared licence families: Apache-2.0, BSD-3-Clause, ISC, MIT, MPL-2.0.

## Kokoro-82M and lesson audio

Pre-generated lesson audio uses Kokoro-82M v1.0 with the bf_isabella British English preset. The model repository declares Apache License 2.0. Audio was generated locally; the application does not distribute the model weights and does not call a cloud speech API.

- Model: https://huggingface.co/hexgrad/Kokoro-82M
- Model licence: https://www.apache.org/licenses/LICENSE-2.0
- Inference wrapper: https://github.com/thewh1teagle/kokoro-onnx (MIT)

The generation-only Python environment is pinned in requirements-audio.txt: kokoro-onnx 0.6.1, soundfile 0.14.0, imageio-ffmpeg 0.8.1 and numpy 2.5.4. These tools are not bundled in the web application. FFmpeg was used only as a build tool and is not redistributed.

## Device SpeechSynthesis fallback

Fallback speech is supplied at runtime by the user's operating system or browser. UK English Pass does not bundle, copy or redistribute those system voice files.

## Names and marks

Kokoro, React, Vite, TypeScript and other names belong to their respective owners. Their inclusion does not imply endorsement. bf_isabella is used only as the upstream synthetic preset identifier and is not presented as a person, performer or endorser.
