import { useState } from "react";
import { Mic, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function SearchBar() {
  const [prompt, setPrompt] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.55,
        duration: 0.8,
      }}
      className="mt-10 w-full max-w-4xl"
    >
      <div className="group relative">

        {/* Glow */}
        <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-violet-500/40 via-cyan-500/40 to-violet-500/40 opacity-0 blur-lg transition duration-500 group-focus-within:opacity-100" />

        {/* Input */}
        <div className="relative flex items-center rounded-full border border-white/10 bg-[#101522]/80 px-6 py-4 backdrop-blur-2xl">

          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask VEXIS anything..."
            className="flex-1 bg-transparent text-lg text-white placeholder:text-gray-500 outline-none"
          />

          <button className="mr-3 rounded-full p-2 text-gray-400 transition hover:bg-white/10 hover:text-white">
            <Mic size={20} />
          </button>

          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-lg shadow-cyan-500/20 transition duration-300 hover:scale-105 active:scale-95">
            <ArrowUp size={18} />
          </button>

        </div>

      </div>
    </motion.div>
  );
}