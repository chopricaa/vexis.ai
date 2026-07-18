import { Settings, User } from "lucide-react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
      <h1 className="text-3xl font-bold text-white">
        VEXIS
      </h1>

      <div className="flex items-center gap-6 text-gray-300">
        <button>Home</button>
        <button>Companion</button>
        <button>Memory</button>

        <Settings className="cursor-pointer" />

        <User className="cursor-pointer" />
      </div>
    </nav>
  );
}

export default Navbar;