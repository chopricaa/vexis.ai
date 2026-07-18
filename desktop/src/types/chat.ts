export type Sender = "user" | "assistant";

export interface Attachment {
  id: string;
  name: string;
  type: string;
  size: string;
  url?: string;
}

export interface Message {
  id: string;
  sender: Sender;
  content: string;
  timestamp: string;
  status?: "sending" | "sent" | "error";
  attachments?: Attachment[];
}