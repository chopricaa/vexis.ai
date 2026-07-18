function RightPanel() {
  return (
    <aside className="h-full border-l border-white/10 bg-black/20 backdrop-blur-xl p-5">

      <div className="space-y-6">

        <div className="glass rounded-3xl p-5">

          <h2 className="mb-4 text-lg font-semibold">
            AI Status
          </h2>

          <div className="space-y-4">

            <div className="flex items-center gap-3">

              <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

              <span>Idle</span>

            </div>

            <div>Memory Healthy</div>

            <div>Voice Ready</div>

            <div>Connected</div>

          </div>

        </div>

      </div>

    </aside>
  );
}

export default RightPanel;