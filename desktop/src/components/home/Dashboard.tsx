function Dashboard() {
  return (
    <div className="mt-10 grid grid-cols-3 gap-6">

      <div className="glass rounded-3xl p-6">
        <h2 className="mb-4 text-lg font-semibold">
          Today's Tasks
        </h2>

        <p>🟢 Deployment Running</p>
        <p>🟢 VS Code</p>
        <p>🟢 Spotify</p>
      </div>

      <div className="glass rounded-3xl p-6">
        <h2 className="mb-4 text-lg font-semibold">
          Recent Activity
        </h2>

        <p>✓ Watching deployment</p>
        <p>✓ Chrome opened</p>
        <p>✓ Email drafted</p>
      </div>

      <div className="glass rounded-3xl p-6">
        <h2 className="mb-4 text-lg font-semibold">
          AI Status
        </h2>

        <p>🟢 Idle</p>
        <p>Memory Healthy</p>
        <p>Voice Ready</p>
      </div>

    </div>
  );
}

export default Dashboard;