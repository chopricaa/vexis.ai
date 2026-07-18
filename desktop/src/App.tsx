import { BrowserRouter, Routes, Route } from "react-router-dom";

import Background from "./components/layout/Background";
import AppShell from "./components/shell/AppShell";

import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import Companion from "./pages/Companion";
import Memory from "./pages/Memory";
import Projects from "./pages/Projects";
import Automation from "./pages/Automation";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Background>
        <AppShell>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/companion" element={<Companion />} />
            <Route path="/memory" element={<Memory />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/automation" element={<Automation />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </AppShell>
      </Background>
    </BrowserRouter>
  );
}

export default App;