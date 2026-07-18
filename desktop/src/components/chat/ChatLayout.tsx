import ChatSidebar from "./ChatSidebar";
import ChatHeader from "./ChatHeader";
import ConversationList from "./ConversationList";
import ChatInput from "./ChatInput";
import useChat from "../../hooks/useChat";

export default function ChatLayout() {
  const { messages, sendMessage, isTyping } = useChat();

  return (
    <div className="flex h-screen">
      <ChatSidebar />

      <div className="flex flex-1 flex-col">
        <ChatHeader />

        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-5xl p-8">
          <ConversationList
    messages={messages}
    isTyping={isTyping}
/>
        </div>
        </div>


        <ChatInput onSend={sendMessage} />
      </div>
    </div>
  );
}