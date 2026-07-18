// ==============================
// Supported AI Models
// ==============================

export type AIModel =
  | "openai/gpt-5"
  | "anthropic/claude-3.7-sonnet"
  | "google/gemini-2.5-pro"
  | "deepseek/deepseek-chat"
  | "meta-llama/llama-3.3-70b-instruct";

// ==============================
// Chat Message
// ==============================

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

// ==============================
// AI Request
// ==============================

export interface AIRequest {
  model: AIModel;
  messages: ChatMessage[];

  temperature?: number;
  maxTokens?: number;

  stream?: boolean;
}

// ==============================
// AI Response
// ==============================

export interface AIResponse {
  id: string;

  model: string;

  content: string;

  finishReason?: string;
}

// ==============================
// Streaming Chunk
// ==============================

export interface AIStreamChunk {
  delta: string;

  done: boolean;
}

// ==============================
// Provider Configuration
// ==============================

export interface AIConfig {
  apiKey: string;

  baseUrl: string;
}