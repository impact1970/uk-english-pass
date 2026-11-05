import { useEffect, useMemo, useRef, useState } from 'react'
import lessonsData from './data/lessons.json'
import type { Lesson, Level, Question } from './types'

const lessons = lessonsData as Lesson[]
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
  const [audioMode, setAudioMode] = useState<'Kokoro M4A' | 'SpeechSynthesis'>('Kokoro M4A')
  const speakingRef = useRef(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => { localStorage.setItem('ukep-progress', JSON.stringify(progress)) }, [progress])
  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light'; localStorage.setItem('ukep-theme', dark ? 'dark' : 'light') }, [dark])

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
    setAudioMode('SpeechSynthesis')
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
    const source = `${import.meta.env.BASE_URL}${selected.audio.file}`
    const audio = new Audio(source)
    audio.preload = 'auto'; audio.playbackRate = rate
    audio.onended = () => { speakingRef.current = false; setSpeaking(false); audioRef.current = null }
    audio.onerror = () => { audioRef.current = null; speechFallback() }
    audioRef.current = audio; speakingRef.current = true; setSpeaking(true); setAudioMode('Kokoro M4A')
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
      <a href="#main" className="skip">跳到練習內容</a>
      <div className="brand"><span className="brand-mark">UK</span><div><strong>English Pass</strong><small>英式英語 · 香港學習者</small></div></div>
      <div className="header-actions"><button className="icon-button" onClick={() => setDark(!dark)} aria-label="切換深色模式">{dark ? '☀️' : '🌙'}</button></div>
    </header>

    <section className="hero">
      <div><p className="eyebrow">B1 — B2 LISTENING LAB</p><h1>聽懂英式英語，<br/><em>逐課建立信心。</em></h1><p>40 篇原創生活對話、120 條精準練習，專為香港學習者重新製作。</p></div>
      <div className="score-card" aria-label="學習進度"><div className="ring" style={{'--p': `${Math.round(answeredCount/120*100)}%`} as React.CSSProperties}><strong>{answeredCount}</strong><span>/ 120</span></div><div><small>已回答</small><b>{correctCount} 題答對</b><span>{progress.completed.length} / 40 課完成</span></div></div>
    </section>

    <div className="notice"><b>練習定位</b><span>本站訓練 CEFR 聆聽能力，參考 Trinity GESE Grade 5 / 7 常見主題，但並非官方試題；選擇題形式並不代表真實考試形式。</span></div>

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
          <div className="player-copy"><b>{speaking?`正在播放 ${audioMode}…`:'播放聆聽稿'}</b><small>Kokoro-82M · bf_isabella 女聲；失敗時使用裝置 en-GB 語音</small></div>
          <button onClick={pauseResume} disabled={!speaking}>暫停／繼續</button><button onClick={stop} disabled={!speaking}>停止</button>
          <label>速度 <select value={rate} onChange={e=>setRate(Number(e.target.value))}><option value="0.75">0.75×</option><option value="0.9">0.9×</option><option value="1">1×</option><option value="1.15">1.15×</option></select></label>
        </section>

        <section className="questions"><div className="section-title"><span>CHECK YOUR LISTENING</span><h3>聆聽理解</h3></div>{selected.questions.map((q,i)=><QuestionCard key={q.id} q={q} index={i} value={progress.answers[q.id]} onAnswer={choice=>answer(q,choice)}/>)}</section>

        {selected.questions.some(q=>progress.answers[q.id]) && <details className="transcript"><summary>查看聆聽稿（回答後開放）</summary><div>{selected.script.map((t,i)=><p key={i}><b>{t.speaker}</b><span>{t.text}</span></p>)}</div></details>}
        <footer className="lesson-footer"><div><b>內容版本</b><span>2026.11 重新製作原創題庫 · CC BY-NC 4.0</span></div><div className="export"><button onClick={()=>download('csv')}>匯出 CSV</button><button onClick={()=>download('md')}>教師 Markdown</button></div></footer>
      </article>
    </main>
  </div>
}

function QuestionCard({q,index,value,onAnswer}:{q:Question,index:number,value?:string,onAnswer:(id:string)=>void}) {
  const answered = Boolean(value); const correct = value === q.answer
  const labels: Record<string,string> = {'single-choice':'單選','paraphrase':'同義理解','best-response':'最佳回應','true-false-not-given':'是非／未提及','event-ordering':'事件次序','matching':'配對','inference':'推論','speaker-opinion':'說話者觀點'}
  return <fieldset className={`question-card ${answered?(correct?'correct':'incorrect'):''}`}><legend><span>{index+1}</span><small>{labels[q.type]}</small>{answered&&<b>{correct?'答對了':'再留意細節'}</b>}</legend><h4>{q.prompt}</h4><div className="options">{q.options.map(o=><label key={o.id} className={`${value===o.id?'chosen':''} ${answered&&o.id===q.answer?'answer':''}`}><input type="radio" name={q.id} value={o.id} checked={value===o.id} onChange={()=>onAnswer(o.id)}/><span>{o.id}</span><b>{o.text}</b></label>)}</div>{answered&&<div className="explanation"><strong>{correct?'✓ 正確':'正確答案：'+q.answer}</strong><p>{q.explanation_zh_hk}</p></div>}</fieldset>
}

export default App
