import { motion } from "framer-motion";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import type { Message } from "../../types/chat";

interface ConversationListProps {
  messages: Message[];
  isTyping: boolean;
}

export default function ConversationList({
  messages,
  isTyping,
}: ConversationListProps) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col px-8 py-10">

      {messages.map((message, index) => (
        <motion.div
          key={message.id}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * 0.08,
            duration: 0.35,
          }}
        >
          <MessageBubble
            sender={message.sender}
            message={message.content}
            time={message.timestamp}
          />
        </motion.div>
      ))}

      {isTyping && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <TypingIndicator />
        </motion.div>
      )}

    </div>
  );
}