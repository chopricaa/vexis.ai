import { useRef, useState } from "react";
import {
  Paperclip,
  Mic,
  ArrowUp,
  Square,
} from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
}

export default function ChatInput({ onSend }: ChatInputProps) {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function handleSend() {
    if (!message.trim()) return;

    onSend(message);
    setMessage("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "56px";
    }
  }

  function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setMessage(e.target.value);

    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "56px";
    el.style.height = `${Math.min(el.scrollHeight, 180)}px`;
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="border-t border-white/10 bg-[#0b0f19]/90 backdrop-blur-xl p-5">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

        <textarea
          ref={textareaRef}
          value={message}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder="Message VEXIS..."
          rows={1}
          className="min-h-[56px] max-h-[180px] w-full resize-none bg-transparent px-6 pt-5 text-white placeholder:text-gray-500 focus:outline-none"
        />

        <div className="flex items-center justify-between px-4 py-3">

          <div className="flex gap-2">

            <button className="rounded-xl p-2 text-gray-400 transition hover:bg-white/10 hover:text-white">
              <Paperclip size={18} />
            </button>

            <button className="rounded-xl p-2 text-gray-400 transition hover:bg-white/10 hover:text-white">
              <Mic size={18} />
            </button>

          </div>

          <button
            onClick={handleSend}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400 text-black transition hover:scale-105 hover:bg-cyan-300 active:scale-95"
          >
            <ArrowUp size={18} />
          </button>

        </div>

      </div>

      <p className="mt-3 text-center text-xs text-gray-500">
        VEXIS can make mistakes. Verify important information.
      </p>
    </div>
  );
}