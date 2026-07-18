import ConversationCard from "./ConversationCard";

function RecentConversations() {
  return (
    <div className="space-y-4">

      <h2 className="text-xl font-semibold text-white">
        Recent Conversations
      </h2>

      <ConversationCard
        title="Java Backend Roadmap"
        preview="Spring Boot microservices architecture..."
        time="Today"
      />

      <ConversationCard
        title="AI Agent Ideas"
        preview="Designing autonomous workflows..."
        time="Yesterday"
      />

      <ConversationCard
        title="Resume Review"
        preview="Backend resume improvements..."
        time="2 days ago"
      />

    </div>
  );
}

export default RecentConversations;