import Sidebar from "./Sidebar";

interface Props {
  children: React.ReactNode;
}

function AppShell({ children }: Props) {
  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <div className="w-[300px] shrink-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-10">
        {children}
      </main>

    </div>
  );
}

export default AppShell;