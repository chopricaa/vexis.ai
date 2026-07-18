import SearchBar from "./SearchBar";
import ConversationSection from "./ConversationSection";
import QuickActions from "./QuickActions";

function DashboardContent() {
  return (
    <div className="mx-auto mt-16 flex w-full max-w-5xl flex-col gap-10">
      <SearchBar />
      <ConversationSection />
      <QuickActions />
    </div>
  );
}

export default DashboardContent;