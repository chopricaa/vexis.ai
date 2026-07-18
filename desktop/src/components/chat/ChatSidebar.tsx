function ChatSidebar() {
  return (
    <div className="p-6">

      <h2 className="mb-6 text-xl font-bold text-white">
        Conversations
      </h2>

      <div className="space-y-3">

        <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-4">
          <h3 className="font-semibold text-white">
            AI Desktop Assistant
          </h3>
          <p className="mt-1 text-sm text-gray-400">
            Today
          </p>
        </div>

        <div className="rounded-2xl bg-white/5 p-4 hover:bg-white/10 transition">
          <h3 className="font-semibold text-white">
            Java Backend
          </h3>
          <p className="mt-1 text-sm text-gray-400">
            Yesterday
          </p>
        </div>

        <div className="rounded-2xl bg-white/5 p-4 hover:bg-white/10 transition">
          <h3 className="font-semibold text-white">
            Resume Review
          </h3>
          <p className="mt-1 text-sm text-gray-400">
            Last Week
          </p>
        </div>

      </div>

    </div>
  );
}

export default ChatSidebar;