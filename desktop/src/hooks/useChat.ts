import { useState } from "react";
import type { Message } from "../types/chat";
import { sampleConversation } from "../data/sampleConversation";

export default function useChat() {
  const [messages, setMessages] = useState<Message[]>(sampleConversation);
  const [isTyping, setIsTyping] = useState(false);

  function sendMessage(text: string) {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      sender: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    setTimeout(() => {
      const reply: Message = {
        id: crypto.randomUUID(),
        sender: "assistant",
        content:
          "This is a simulated AI response. Soon VEXIS will be connected to OpenAI, Claude, Gemini and Ollama.",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
    }, 1500);
  }

  return {
    messages,
    sendMessage,
    isTyping,
  };
}