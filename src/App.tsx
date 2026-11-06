import { useEffect, useMemo, useRef, useState } from 'react'
import lessonsData from './data/lessons.json'
import type { Lesson, Level, Question } from './types'

const lessons = lessonsData as Lesson[]
const totalQuestions = lessons.reduce((sum, lesson) => sum + lesson.questions.length, 0)
const totalLessons = lessons.length
const isCommercialApp = import.meta.env.VITE_DISTRIBUTION_CHANNEL === 'commercial-app'
const contentLicenceLabel = isCommercialApp
  ? '商業 App 版本 · UK English Pass Commercial App Licence 1.0'
  : '公開網頁版本 · CC BY-NC 4.0'
type AnswerMap = Record<string, string>
type Progress = { answers: AnswerMap; completed: string[] }
const initialProgress: Progress = (() => {
  try { return JSON.parse(localStorage.getItem('ukep-progress') || '') } catch { return { answers: {}, completed: [] } }
})()

function App() {
  const [level, setLevel] = useState<'ALL' | Level>('ALL')
  const [unit, setUnit] = useState('ALL')
  const [query, setQuery] = useState('')
  const [reviewOnly, setReviewOnly] = useState(false)
  const [selectedId, setSelectedId] = useState(lessons[0].lesson_id)
  const [progress, setProgress] = useState<Progress>(initialProgress)
  const [dark, setDark] = useState(() => localStorage.getItem('ukep-theme') === 'dark')
  const [rate, setRate] = useState(0.9)
  const [speaking, setSpeaking] = useState(false)
  const [audioMode, setAudioMode] = useState<'預錄音訊' | '裝置語音'>('預錄音訊')
  const [legalPage, setLegalPage] = useState(() => window.location.hash === '#legal')
  const speakingRef = useRef(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => { localStorage.setItem('ukep-progress', JSON.stringify(progress)) }, [progress])
  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light'; localStorage.setItem('ukep-theme', dark ? 'dark' : 'light') }, [dark])
  useEffect(() => {
    const onHashChange = () => setLegalPage(window.location.hash === '#legal')
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const units = useMemo(() => [...new Map(lessons.filter(l => level === 'ALL' || l.level === level).map(l => [l.unit, l.unit_zh_hk])).entries()], [level])
  const incorrectLessonIds = useMemo(() => new Set(lessons.filter(l => l.questions.some(q => progress.answers[q.id] && progress.answers[q.id] !== q.answer)).map(l => l.lesson_id)), [progress])
  const visible = lessons.filter(l => (level === 'ALL' || l.level === level) && (unit === 'ALL' || l.unit === unit) && (!query || `${l.title} ${l.unit_zh_hk}`.toLowerCase().includes(query.toLowerCase())) && (!reviewOnly || incorrectLessonIds.has(l.lesson_id)))
  const selected = lessons.find(l => l.lesson_id === selectedId) || visible[0] || lessons[0]
  const answeredCount = Object.keys(progress.answers).length
  const correctCount = lessons.flatMap(l => l.questions).filter(q => progress.answers[q.id] === q.answer).length

  function answer(q: Question, choice: string) {
    const answers = { ...progress.answers, [q.id]: choice }
    const lessonComplete = selected.questions.every(item => answers[item.id])
    setProgress({ answers, completed: lessonComplete ? [...new Set([...progress.completed, selected.lesson_id])] : progress.completed })
  }

  function speechFallback() {
    if (!('speechSynthesis' in window)) return
    window.speechSynthesis.cancel(); speakingRef.current = true; setSpeaking(true)
    setAudioMode('裝置語音')
    const voices = window.speechSynthesis.getVoices()
    const british = voices.filter(v => v.lang.toLowerCase() === 'en-gb')
    let i = 0
    const next = () => {
      if (!speakingRef.current || i >= selected.script.length) { setSpeaking(false); speakingRef.current = false; return }
      const turn = selected.script[i++]
      const utter = new SpeechSynthesisUtterance(turn.text)
      utter.lang = 'en-GB'; utter.rate = rate
      utter.voice = british[(i - 1) % Math.max(1, british.length)] || voices.find(v => v.lang.startsWith('en-GB')) || null
      utter.onend = next; utter.onerror = next
      window.speechSynthesis.speak(utter)
    }
    next()
  }

  function speak() {
    stop()
    if (selected.audio.status === 'pending') { speechFallback(); return }
    const source = `${import.meta.env.BASE_URL}${selected.audio.file}`
    const audio = new Audio(source)
    audio.preload = 'auto'; audio.playbackRate = rate
    audio.onended = () => { speakingRef.current = false; setSpeaking(false); audioRef.current = null }
    audio.onerror = () => { audioRef.current = null; speechFallback() }
    audioRef.current = audio; speakingRef.current = true; setSpeaking(true); setAudioMode('預錄音訊')
    audio.play().catch(() => { audioRef.current = null; speechFallback() })
  }

  function pauseResume() {
    if (audioRef.current) {
      if (audioRef.current.paused) void audioRef.current.play()
      else audioRef.current.pause()
    } else if (window.speechSynthesis.paused) window.speechSynthesis.resume()
    else window.speechSynthesis.pause()
  }

  function stop() {
    speakingRef.current = false
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0; audioRef.current = null }
    window.speechSynthesis?.cancel(); setSpeaking(false)
  }
  useEffect(() => stop, [selectedId])

  function download(kind: 'csv' | 'md') {
    const rows = lessons.flatMap(l => l.questions.map(q => ({ l, q })))
    const content = kind === 'csv'
      ? '\ufeff"level","unit","lesson_id","question_id","prompt","answer"\n' + rows.map(({l,q}) => [l.level,l.unit,l.lesson_id,q.id,q.prompt,q.answer].map(v => `"${String(v).replaceAll('"','""')}"`).join(',')).join('\n')
      : '# UK English Pass 教師審閱索引\n\n' + lessons.map(l => `## ${l.lesson_id} · ${l.title}\n\n${l.questions.map(q => `- ${q.id}: ${q.prompt} **[${q.answer}]**`).join('\n')}`).join('\n\n')
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([content], {type:'text/plain;charset=utf-8'})); a.download = `uk-english-pass.${kind}`; a.click(); URL.revokeObjectURL(a.href)
  }

  return <div className="app-shell">
    <header className="topbar">
      <a href={legalPage ? '#legal' : '#main'} className="skip">{legalPage ? '跳到版權內容' : '跳到練習內容'}</a>
      <a className="brand" href="#main"><span className="brand-mark">UK</span><span><strong>English Pass</strong><small>英式英語 · 香港學習者</small></span></a>
      <div className="header-actions"><button className="icon-button" onClick={() => setDark(!dark)} aria-label="切換深色模式">{dark ? '☀️' : '🌙'}</button></div>
    </header>

    {legalPage ? <LegalPage /> : <>
    <section className="hero">
      <div><p className="eyebrow">B1 — B2 LISTENING LAB</p><h1>聽懂英式英語，<br/><em>逐課建立信心。</em></h1><p>{totalLessons} 篇原創生活對話、{totalQuestions} 條精準練習，專為香港學習者重新製作。</p></div>
      <div className="score-card" aria-label="學習進度"><div className="ring" style={{'--p': `${Math.round(answeredCount/totalQuestions*100)}%`} as React.CSSProperties}><strong>{answeredCount}</strong><span>/ {totalQuestions}</span></div><div><small>已回答</small><b>{correctCount} 題答對</b><span>{progress.completed.length} / {totalLessons} 課完成</span></div></div>
    </section>

    <div className="notice"><b>練習定位</b><span>本站為獨立製作的 CEFR B1/B2 英語聆聽練習，並非任何考試機構的官方或認可教材；選擇題形式並不代表真實考試形式。</span></div>

    <main id="main" className="workspace">
      <aside className="library" aria-label="課堂選擇">
        <div className="library-heading"><div><span>LESSON LIBRARY</span><h2>課堂目錄</h2></div><b>{visible.length}</b></div>
        <label className="search"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="搜尋主題…" aria-label="搜尋課堂"/></label>
        <div className="segmented" aria-label="程度篩選">{(['ALL','B1','B2'] as const).map(x=><button key={x} className={level===x?'active':''} onClick={()=>{setLevel(x);setUnit('ALL')}}>{x==='ALL'?'全部':x}</button>)}</div>
        <label className="field-label">主題單元<select value={unit} onChange={e=>setUnit(e.target.value)}><option value="ALL">全部主題</option>{units.map(([id,name])=><option key={id} value={id}>{name}</option>)}</select></label>
        <label className="review-toggle"><input type="checkbox" checked={reviewOnly} onChange={e=>setReviewOnly(e.target.checked)}/><span>只顯示有錯題的課堂</span></label>
        <div className="lesson-list">{visible.map(l => <button key={l.lesson_id} className={`lesson-item ${l.lesson_id===selected.lesson_id?'selected':''}`} onClick={()=>setSelectedId(l.lesson_id)}><span className={`level-pill ${l.level.toLowerCase()}`}>{l.level}</span><span><strong>{l.title}</strong><small>{l.unit_zh_hk} · {l.questions.length} 題</small></span>{progress.completed.includes(l.lesson_id)&&<i>✓</i>}</button>)}</div>
      </aside>

      <article className="lesson-panel">
        <div className="lesson-head"><div><div className="kicker"><span className={`level-pill ${selected.level.toLowerCase()}`}>{selected.level}</span>{selected.unit_zh_hk} · {selected.lesson_id.toUpperCase()}</div><h2>{selected.title}</h2><p>{selected.level==='B1'?'掌握主旨、細節及原因':'練習推論、觀點、對比及跟進理解'}</p></div><div className="difficulty" aria-label={`難度 ${selected.difficulty} 星`}>{[1,2,3,4,5].map(n=><span key={n} className={n<=selected.difficulty?'on':''}>●</span>)}</div></div>

        <section className="player" aria-label="聆聽播放器">
          <button className="play" onClick={speak} aria-label="播放或重播">{speaking?'↻':'▶'}</button>
          <div className="player-copy"><b>{speaking?`正在播放${audioMode}…`:'播放聆聽稿'}</b><small>英式女聲；播放失敗時使用裝置語音</small></div>
          <button onClick={pauseResume} disabled={!speaking}>暫停／繼續</button><button onClick={stop} disabled={!speaking}>停止</button>
          <label>速度 <select value={rate} onChange={e=>setRate(Number(e.target.value))}><option value="0.75">0.75×</option><option value="0.9">0.9×</option><option value="1">1×</option><option value="1.15">1.15×</option></select></label>
        </section>

        <section className="questions"><div className="section-title"><span>CHECK YOUR LISTENING</span><h3>聆聽理解</h3></div>{selected.questions.map((q,i)=><QuestionCard key={q.id} q={q} index={i} value={progress.answers[q.id]} onAnswer={choice=>answer(q,choice)}/>)}</section>

        {selected.questions.some(q=>progress.answers[q.id]) && <details className="transcript"><summary>查看聆聽稿（回答後開放）</summary><div>{selected.script.map((t,i)=><p key={i}><b>{t.speaker}</b><span>{t.text}</span></p>)}</div></details>}
        <footer className="lesson-footer"><div><b>內容版本</b><span>2026.11 重新製作原創題庫 · {contentLicenceLabel}</span></div><div className="export"><button onClick={()=>download('csv')}>匯出 CSV</button><button onClick={()=>download('md')}>教師 Markdown</button></div></footer>
      </article>
    </main>
    <SiteFooter />
    </>}
  </div>
}

function SiteFooter() {
  return <footer className="site-footer"><span>© 2026 UK English Pass</span><a href="#legal">版權、商標及語音說明</a></footer>
}

function LegalPage() {
  return <main id="legal" className="legal-page">
    <a className="back-link" href="#main">← 返回聆聽練習</a>
    <p className="eyebrow">LEGAL &amp; ATTRIBUTION</p>
    <h1>版權、商標及語音說明</h1>
    <p className="legal-lead">本頁集中說明 UK English Pass 的內容權利、商標關係及合成語音來源。</p>

    <section>
      <h2>獨立教材及商標聲明</h2>
      <p>UK English Pass 是獨立製作的 CEFR B1/B2 英語聆聽練習，並非官方試題，也沒有獲任何考試機構授權、認可、贊助或代言。</p>
      <p>部分主題規劃曾參考 Trinity College London 的 Graded Examinations in Spoken English（GESE）Grade 5／7 公開主題範圍，但所有聆聽稿、題目及中文解釋均為本網站重新創作。Trinity College London、Trinity 及 GESE 名稱和相關商標均屬其各自權利人所有。</p>
    </section>

    <section>
      <h2>合成語音來源</h2>
      <p>預錄音訊由 <a href="https://huggingface.co/hexgrad/Kokoro-82M" target="_blank" rel="noreferrer">Kokoro-82M v1.0</a> 搭配 <code>bf_isabella</code> 英式合成女聲預設，在本機產生。Kokoro-82M 模型權重採用 <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noreferrer">Apache License 2.0</a>；音訊生成工具 <a href="https://github.com/thewh1teagle/kokoro-onnx" target="_blank" rel="noreferrer">kokoro-onnx</a> 採用 MIT License。</p>
      <p><code>bf_isabella</code> 是合成語音預設識別碼，不代表真人配音員、代言人或合作關係。本站沒有使用真人聲音複製，也沒有使用付費雲端語音 API。</p>
      <p>若預錄音訊無法播放，網站會改用瀏覽器或裝置提供的英式英語 SpeechSynthesis 語音；實際聲線由使用者的系統及瀏覽器決定。</p>
    </section>

    <section>
      <h2>原創內容授權</h2>
      {isCommercialApp ? <>
        <p>本付費 App 版本及其商業版本內容依照 <strong>UK English Pass Commercial App Licence 1.0</strong> 提供。購買者獲得個人、不可轉讓的使用權；不得轉售、重新發布或把大部分題庫及語音抽取至另一項產品或資料集。</p>
        <p>另行發布於公開網站、並已標示為 <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noreferrer">CC BY-NC 4.0</a> 的材料仍受該公開授權保障；本商業授權不撤銷既有的 Creative Commons 權利。</p>
      </> : <>
        <p>本公開網頁版本的原創聆聽稿、題目及香港繁體中文解釋以 <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noreferrer">Creative Commons Attribution-NonCommercial 4.0 International（CC BY-NC 4.0）</a> 條款提供。轉載或改作時須註明來源，並只可作非商業用途。</p>
        <p>由內容權利人發布的付費 App 可另依 <strong>UK English Pass Commercial App Licence 1.0</strong> 發行；這屬雙重授權，不會撤銷本公開版本已授出的 Creative Commons 權利。</p>
      </>}
    </section>

    <section>
      <h2>製作、覆核及第三方紀錄</h2>
      <p>題庫為 AI 輔助起草的原創內容，已完成 AI 編輯覆核及自動結構驗證；獨立真人英語教師或考試專家的專業簽核仍待完成，本站不把 AI 覆核描述為真人覆核。</p>
      <p><a href={`${import.meta.env.BASE_URL}legal/THIRD_PARTY_NOTICES.txt`} target="_blank" rel="noreferrer">查看完整 Third-Party Notices</a>，包括合成語音、生成工具及程式元件的授權資料。</p>
    </section>

    <p className="legal-updated">最後更新：2026 年 11 月</p>
  </main>
}

function QuestionCard({q,index,value,onAnswer}:{q:Question,index:number,value?:string,onAnswer:(id:string)=>void}) {
  const answered = Boolean(value); const correct = value === q.answer
  const labels: Record<string,string> = {'single-choice':'單選','paraphrase':'同義理解','best-response':'最佳回應','true-false-not-given':'是非／未提及','event-ordering':'事件次序','matching':'配對','inference':'推論','speaker-opinion':'說話者觀點'}
  return <fieldset className={`question-card ${answered?(correct?'correct':'incorrect'):''}`}><legend><span>{index+1}</span><small>{labels[q.type]}</small>{answered&&<b>{correct?'答對了':'再留意細節'}</b>}</legend><h4>{q.prompt}</h4><div className="options">{q.options.map(o=><label key={o.id} className={`${value===o.id?'chosen':''} ${answered&&o.id===q.answer?'answer':''}`}><input type="radio" name={q.id} value={o.id} checked={value===o.id} onChange={()=>onAnswer(o.id)}/><span>{o.id}</span><b>{o.text}</b></label>)}</div>{answered&&<div className="explanation"><strong>{correct?'✓ 正確':'正確答案：'+q.answer}</strong><p>{q.explanation_zh_hk}</p></div>}</fieldset>
}

export default App
