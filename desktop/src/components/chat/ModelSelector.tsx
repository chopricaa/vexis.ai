function ModelSelector() {
  return (
    <div className="flex gap-2">

      <button className="rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-300">
        GPT-4.1
      </button>

      <button className="rounded-full bg-white/5 px-4 py-2 text-gray-300">
        Claude
      </button>

      <button className="rounded-full bg-white/5 px-4 py-2 text-gray-300">
        Gemini
      </button>

    </div>
  );
}

export default ModelSelector;