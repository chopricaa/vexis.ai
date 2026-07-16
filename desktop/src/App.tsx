import Header from "./components/Header/Header";
import MicButton from "./components/MicButton/MicButton";
import Conversation from "./components/Conversation/Conversation";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <MicButton />

        <h2>How can I help you?</h2>

        <Conversation />
      </main>

      <Footer />
    </div>
  );
}

export default App;