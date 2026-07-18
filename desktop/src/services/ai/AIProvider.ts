import type {
  AIRequest,
  AIResponse,
  AIStreamChunk,
} from "./types";

/**
 * Every AI provider (OpenRouter, Ollama, Gemini, etc.)
 * must implement this interface.
 */
export interface AIProvider {
  /**
   * Send a normal chat request
   */
  sendMessage(request: AIRequest): Promise<AIResponse>;

  /**
   * Stream a response token by token
   */
  streamMessage(
    request: AIRequest,
    onChunk: (chunk: AIStreamChunk) => void
  ): Promise<void>;
}