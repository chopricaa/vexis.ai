import { Bot, Sparkles, MoreHorizontal } from "lucide-react";
import { motion } from "framer-motion";

export default function ChatHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#070B14]/80 px-8 py-5 backdrop-blur-xl"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 shadow-lg shadow-cyan-500/20">
          <Bot className="h-6 w-6 text-white" />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">
            AI Desktop Assistant
          </h2>

          <div className="mt-1 flex items-center gap-2 text-sm text-gray-400">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            GPT-5 • Memory Enabled • Online
          </div>
        </div>
      </div>

      <button className="rounded-xl p-3 text-gray-400 transition hover:bg-white/5 hover:text-white">
        <MoreHorizontal className="h-5 w-5" />
      </button>
    </motion.header>
  );
}