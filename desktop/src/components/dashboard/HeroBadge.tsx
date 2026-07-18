import { Sparkles } from "lucide-react";

export default function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 backdrop-blur-xl">

      <Sparkles
        size={15}
        className="text-cyan-300"
      />

      <span className="text-sm font-medium text-white">
        AI Companion
      </span>

      <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

    </div>
  );
}