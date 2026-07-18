interface ConversationCardProps {
  title: string;
  preview: string;
  time: string;
}

function ConversationCard({
  title,
  preview,
  time,
}: ConversationCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">

      <div className="flex items-center justify-between">

        <h3 className="font-semibold text-white">
          {title}
        </h3>

        <span className="text-xs text-gray-500">
          {time}
        </span>

      </div>

      <p className="mt-3 text-sm text-gray-400">
        {preview}
      </p>

    </div>
  );
}

export default ConversationCard;