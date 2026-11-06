export type Level = 'B1' | 'B2'
export type QuestionType = 'single-choice' | 'paraphrase' | 'best-response' | 'true-false-not-given' | 'event-ordering' | 'matching' | 'inference' | 'speaker-opinion'
export interface Turn { speaker: string; voice: string; text: string }
export interface Option { id: string; text: string }
export interface Question { id: string; type: QuestionType; prompt: string; options: Option[]; answer: string; explanation_zh_hk: string }
export interface Lesson {
  level: Level; unit: string; unit_zh_hk: string; lesson_id: string; title: string; difficulty: number;
  skill_tags: string[]; script: Turn[]; questions: Question[];
  audio: {
    status: 'pending' | 'ready'; file: string; format: 'm4a'; engine: 'Kokoro-82M'; engine_version: 'v1.0';
    voice: 'bf_isabella'; accent: 'British English'; sample_rate_hz: 24000; fallback: 'SpeechSynthesis en-GB';
    model_license: 'Apache-2.0'; generated?: string;
  };
  rights: {
    public_licence: 'CC BY-NC 4.0';
    commercial_app_licence: 'UK English Pass Commercial App Licence 1.0';
    author: string;
    original: true;
  };
  review_status: 'pending' | 'ai-editorially-reviewed';
  human_review_status: 'pending' | 'approved' | 'approved-with-changes';
  version: string;
}
