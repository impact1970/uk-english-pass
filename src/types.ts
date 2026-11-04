export type Level = 'B1' | 'B2'
export type QuestionType = 'single-choice' | 'paraphrase' | 'best-response' | 'true-false-not-given' | 'event-ordering' | 'matching' | 'inference' | 'speaker-opinion'
export interface Turn { speaker: string; voice: string; text: string }
export interface Option { id: string; text: string }
export interface Question { id: string; type: QuestionType; prompt: string; options: Option[]; answer: string; explanation_zh_hk: string }
export interface Lesson {
  level: Level; unit: string; unit_zh_hk: string; lesson_id: string; title: string; difficulty: number;
  skill_tags: string[]; script: Turn[]; questions: Question[];
  audio: { status: 'pending'; planned_format: 'm4a'; planned_engine: 'Kokoro'; accent: 'British English' };
  rights: { licence: string; author: string; original: true };
  review_status: 'editorially-reviewed'; version: string;
}
