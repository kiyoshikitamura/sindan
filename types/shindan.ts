export type JobType =
  | 'cabaret'
  | 'club'
  | 'lounge'
  | 'girlsbar'
  | 'concafe'
  | 'snack'
  | 'sm'
  | 'soap'
  | 'deri'
  | 'sekucaba'
  | 'imekura'
  | 'idol'
  | 'princess'
  | 'yandere'
  | 'sababa'
  | 'mother'
  | 'queen'
  | 'cat'
  | 'katamoi'
  | 'sage'
  | 'level_0'
  | 'level_10'
  | 'level_20'
  | 'level_30'
  | 'level_40'
  | 'level_50'
  | 'level_60'
  | 'level_70'
  | 'level_80'
  | 'level_90'
  | 'level_100'
  | 'score';

export interface Question {
  id: string;
  text: string;
  // YESと答えた場合に加点される職種とその各スコア
  // 例: { cabaret: 1, club: 1 }
  scoreChanges: Partial<Record<JobType, number>>;
}

export interface DiagnosisResult {
  id: JobType;
  title: string;
  description: string;
  catchphrase: string;
  status: {
    visual: number; // 1-5
    mental: number; // 1-5
    money: number; // 1-5
    alcohol: number; // 1-5
  };
  compatibleJob: JobType;
}

export interface DiagnosisTheme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  accent: string;
}

export interface DiagnosisData {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  results: Partial<Record<JobType, DiagnosisResult>>;
  logicType?: 'category_score' | 'total_score';
  theme?: DiagnosisTheme;
}
