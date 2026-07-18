import type { AIProvider } from "./AIProvider";
import type {
  AIRequest,
  AIResponse,
  AIStreamChunk,
} from "./types";

export class OpenRouterProvider implements AIProvider {
  private readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async sendMessage(request: AIRequest): Promise<AIResponse> {
    const response = await fetch(`${this.baseUrl}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error("Failed to send message.");
    }

    return response.json();
  }

  async streamMessage(
    request: AIRequest,
    onChunk: (chunk: AIStreamChunk) => void
  ): Promise<void> {
    console.warn(
      "Streaming not implemented yet.",
      request,
      onChunk
    );
  }
}