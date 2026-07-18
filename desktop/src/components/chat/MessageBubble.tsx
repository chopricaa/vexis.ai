import { motion } from "framer-motion";
import {
  Bot,
  Copy,
  RotateCcw,
  Check,
} from "lucide-react";
import { useState } from "react";

interface MessageBubbleProps {
  sender: "assistant" | "user";
  message: string;
  time?: string;
}

export default function MessageBubble({
  sender,
  message,
  time = "09:41 AM",
}: MessageBubbleProps) {
  const isUser = sender === "user";

  const [copied, setCopied] = useState(false);

  async function copyMessage() {
    await navigator.clipboard.writeText(message);

    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <motion.div
      layout
      className={`mb-8 flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`group flex max-w-4xl flex-col ${
          isUser ? "items-end" : "items-start"
        }`}
      >
        {/* Header */}

        <div className="mb-3 flex items-center gap-3">

          {!isUser && (
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 shadow-lg shadow-cyan-500/20">
              <Bot
                size={18}
                className="text-white"
              />
            </div>
          )}

          <div>
            <p className="font-semibold text-white">
              {isUser ? "You" : "VEXIS"}
            </p>

            <p className="text-xs text-gray-500">
              {time}
            </p>
          </div>

        </div>

        {/* Bubble */}

        <div
          className={`relative rounded-3xl px-7 py-6 transition-all duration-300 ${
            isUser
              ? "bg-gradient-to-r from-cyan-500 to-sky-500 text-black shadow-lg shadow-cyan-500/20"
              : "border border-white/10 bg-white/5 text-white backdrop-blur-xl hover:border-cyan-500/30"
          }`}
        >
          <p className="whitespace-pre-wrap leading-8">
            {message}
          </p>

          {/* Hover Actions */}

          {!isUser && (
            <div className="absolute -right-14 top-5 flex flex-col gap-2 opacity-0 transition duration-300 group-hover:opacity-100">

              <button
                onClick={copyMessage}
                className="rounded-xl border border-white/10 bg-[#101522] p-2 hover:border-cyan-500/30"
              >
                {copied ? (
                  <Check
                    size={16}
                    className="text-green-400"
                  />
                ) : (
                  <Copy
                    size={16}
                    className="text-gray-300"
                  />
                )}
              </button>

              <button
                className="rounded-xl border border-white/10 bg-[#101522] p-2 hover:border-cyan-500/30"
              >
                <RotateCcw
                  size={16}
                  className="text-gray-300"
                />
              </button>

            </div>
          )}

        </div>

      </div>
    </motion.div>
  );
}