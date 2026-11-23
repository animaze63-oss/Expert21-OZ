export type AgentInfo = {
  name: string;
  title: string;
  first: string;
  voice: string;
  style: string;
  model: string;
  group: string;
  description: string;
  mission: string;
  skills: string[];
  knowledgeFiles: { path: string; included: boolean }[];
};

export type ExpertRun = {
  name: string;
  brief: string;
  text: string;
  status: "waiting" | "running" | "done" | "error";
  error?: string;
};

export type TeamRun = {
  phase: "routing" | "experts" | "synthesizing" | "done" | "error";
  reasoning: string;
  experts: ExpertRun[];
};

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  agent?: string; // which agent answered (assistant messages)
  team?: TeamRun; // present for "Ask the whole team" answers
  notices?: string[];
  error?: string;
  pending?: boolean;
};

// Events streamed back by the Netlify Function (newline-delimited JSON)
export type ServerEvent =
  | { type: "text"; text: string }
  | { type: "route"; reasoning: string; experts: { name: string; brief: string }[] }
  | { type: "notice"; message: string }
  | { type: "done"; stopReason: string | null; model: string }
  | { type: "error"; message: string };

export const TEAM_KEY = "__team__";
