import {
  LayoutDashboard,
  MessageSquare,
  Bot,
  Zap,
  Brain,
  Settings,
  FolderOpen,
  Search,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menu = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    path: "/",
  },
  {
    icon: MessageSquare,
    title: "Chat",
    path: "/chat",
  },
  {
    icon: Bot,
    title: "Companion",
    path: "/companion",
  },
  {
    icon: Zap,
    title: "Automations",
    path: "/automation",
  },
  {
    icon: Brain,
    title: "Memory",
    path: "/memory",
  },
  {
    icon: FolderOpen,
    title: "Projects",
    path: "/projects",
  },
];

const projects = [
  "Vexis",
  "Java Backend",
  "AI Research",
];

function Sidebar() {
  return (
    <aside className="w-[285px] h-screen border-r border-white/10 bg-black/30 backdrop-blur-3xl flex flex-col">

      {/* Logo */}

      <div className="px-7 pt-8">

        <div className="flex items-center gap-4">

          <div
            className="
            h-16
            w-16
            rounded-3xl
            bg-gradient-to-br
            from-violet-500
            via-fuchsia-500
            to-cyan-400
            shadow-[0_0_35px_rgba(124,58,237,.45)]
            flex
            items-center
            justify-center
            text-white
            font-bold
            text-3xl
            "
          >
            V
          </div>

          <div>

            <h1 className="text-4xl font-bold tracking-tight">
              VEXIS
            </h1>

            <p className="text-gray-400 mt-1">
              AI Companion
            </p>

          </div>

        </div>

      </div>

      {/* Search */}

      <div className="px-7 mt-8">

        <div
          className="
          h-14
          rounded-2xl
          border
          border-cyan-400/30
          bg-white/5
          flex
          items-center
          px-5
          gap-3
          transition-all
          duration-300
          hover:border-cyan-300
          hover:shadow-[0_0_20px_rgba(34,211,238,.25)]
          "
        >
          <Search size={18} className="text-gray-400" />

          <input
            placeholder="Search..."
            className="bg-transparent outline-none flex-1 placeholder:text-gray-500"
          />

        </div>

      </div>

      {/* Navigation */}

      <div className="mt-10 px-4">

        <div className="space-y-2">

          {menu.map(({ icon: Icon, title, path }) => (
  <NavLink
    key={title}
    to={path}
    className={({ isActive }) =>
      `
      w-full
      flex
      items-center
      gap-4
      rounded-2xl
      px-5
      py-4
      text-lg
      transition-all
      duration-300
      ${
        isActive
          ? "bg-gradient-to-r from-violet-500/25 to-cyan-500/20 border border-cyan-400/40 text-white shadow-[0_0_25px_rgba(34,211,238,.25)]"
          : "text-gray-300 hover:bg-white/5 hover:text-white"
      }
      `
    }
  >
    <Icon size={21} />
    <span>{title}</span>
  </NavLink>
))}

        </div>

      </div>

      {/* Projects */}

      <div className="mt-10 px-7">

        <p className="text-xs tracking-[0.25em] text-gray-500 uppercase">
          Pinned
        </p>

        <div className="mt-5 space-y-3">

          {projects.map((project) => (

            <button
              key={project}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-white/5"
            >

              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center font-semibold">
                {project.charAt(0)}
              </div>

              <span className="text-base">
                {project}
              </span>

            </button>

          ))}

        </div>

      </div>

      {/* Bottom */}

      <div className="mt-auto border-t border-white/10 p-6">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-lg font-bold">
              C
            </div>

            <div>

              <p className="font-semibold">
                Chopricaa
              </p>

              <p className="text-xs text-gray-400">
                Developer
              </p>

            </div>

          </div>

          <button className="rounded-xl p-3 hover:bg-white/5">
            <Settings size={20} />
          </button>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;