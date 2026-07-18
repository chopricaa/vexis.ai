function QuickActions() {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <button className="rounded-full border border-cyan-400/30 bg-white/5 px-6 py-3 text-white backdrop-blur-lg hover:bg-cyan-500/10">
        💬 New Chat
      </button>

      <button className="rounded-full border border-cyan-400/30 bg-white/5 px-6 py-3 text-white backdrop-blur-lg hover:bg-cyan-500/10">
        🌐 Browser
      </button>

      <button className="rounded-full border border-cyan-400/30 bg-white/5 px-6 py-3 text-white backdrop-blur-lg hover:bg-cyan-500/10">
        📁 Projects
      </button>

      <button className="rounded-full border border-cyan-400/30 bg-white/5 px-6 py-3 text-white backdrop-blur-lg hover:bg-cyan-500/10">
        🧠 Memory
      </button>
    </div>
  );
}

export default QuickActions;