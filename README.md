# UK English Pass

為香港學習者而設的 B1/B2 英式英語聆聽練習網站。包含 40 篇原創聆聽稿、120 題、18 個主題單元，並提供預先生成的 Kokoro `bf_isabella` 英式女聲、SpeechSynthesis 後備、進度記錄及錯題重溫。

> 本站訓練 CEFR 聆聽能力，內容參考 Trinity GESE Grade 5/7 常見主題，但並非官方試題；選擇題形式不代表真實考試形式。

## 開發

```bash
pnpm install
pnpm check
pnpm dev
```

完整題庫位於 `src/data/lessons.json`。它由 `scripts/generate-content.mjs` 產生，並經 `scripts/validate-content.mjs` 與測試檢查總數、ID、答案鍵及欄位。

音檔位於 `public/audio/`，使用 Kokoro-82M v1.0、`bf_isabella` voice 在本地生成為 24 kHz mono AAC/M4A。生成程序為 `scripts/generate_audio.py`；模型及 voice 授權資料見 `THIRD_PARTY_NOTICES.md`。網站在音檔失敗時會自動改用裝置的 en-GB SpeechSynthesis。

重新生成音檔時，先建立 Python 3.12 環境並下載官方 ONNX release：

```powershell
uv venv --python 3.12 .audio-env
uv pip install --python .audio-env\Scripts\python.exe -r requirements-audio.txt
New-Item -ItemType Directory -Force .audio-cache
curl.exe -L -o .audio-cache\kokoro-v1.0.onnx https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.1/kokoro-v1.0.onnx
curl.exe -L -o .audio-cache\voices-v1.0.bin https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.1/voices-v1.0.bin
pnpm audio:generate
pnpm audio:validate
```

## GitHub Pages

推送至 `main` 後，GitHub Actions 會建置及發佈。儲存庫名稱預設為 `uk-english-pass`；如更名，請同步更新 `vite.config.ts` 的 `base`。
