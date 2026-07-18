export default function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="max-w-2xl">

        <div className="mb-2 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-sm font-bold text-white">
            V
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              VEXIS
            </p>

            <p className="text-xs text-gray-500">
              Typing...
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
          <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.3s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.15s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400" />
        </div>

      </div>
    </div>
  );
}