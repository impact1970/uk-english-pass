# UK English Pass

為香港學習者而設的 B1/B2 英式英語聆聽練習網站。包含 40 篇原創聆聽稿、120 題、18 個主題單元，並提供瀏覽器英式語音朗讀、進度記錄及錯題重溫。

> 本站訓練 CEFR 聆聽能力，內容參考 Trinity GESE Grade 5/7 常見主題，但並非官方試題；選擇題形式不代表真實考試形式。

## 開發

```bash
pnpm install
pnpm check
pnpm dev
```

完整題庫位於 `src/data/lessons.json`。它由 `scripts/generate-content.mjs` 產生，並經 `scripts/validate-content.mjs` 與測試檢查總數、ID、答案鍵及欄位。

## GitHub Pages

推送至 `main` 後，GitHub Actions 會建置及發佈。儲存庫名稱預設為 `uk-english-pass`；如更名，請同步更新 `vite.config.ts` 的 `base`。
