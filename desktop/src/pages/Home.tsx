import Hero from "../components/home/Hero";
import SearchBar from "../components/layout/SearchBar";
import ConversationSection from "../components/home/ConversationSection";
import QuickActions from "../components/home/QuickActions";

function Home() {
  return (
    <main className="flex flex-col items-center px-12 py-10">

      <Hero />

      <SearchBar />

      <ConversationSection />

      <QuickActions />

    </main>
  );
}

export default Home;