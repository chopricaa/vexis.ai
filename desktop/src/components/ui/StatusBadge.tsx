interface Props {
  text: string;
  color: string;
}

function StatusBadge({ text, color }: Props) {
  return (
    <div className="flex items-center gap-3">

      <div
        className="h-3 w-3 rounded-full"
        style={{ background: color }}
      />

      <span>{text}</span>

    </div>
  );
}

export default StatusBadge;