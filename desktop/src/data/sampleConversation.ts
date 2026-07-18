import type { Message } from "../types/chat";

export const sampleConversation: Message[] = [
  {
    id: "1",
    sender: "assistant",
    content: "👋 Hello! I'm VEXIS. What would you like to build today?",
    timestamp: "09:41 AM",
  },
  {
    id: "2",
    sender: "user",
    content: "Let's build an AI Desktop Assistant.",
    timestamp: "09:42 AM",
  },
  {
    id: "3",
    sender: "assistant",
    content:
      "Great choice! We'll create a production-ready AI desktop application with memory, voice, automation, and multiple AI providers.",
    timestamp: "09:42 AM",
  },
];