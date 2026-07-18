    import useStreaming from "../../hooks/useStreaming";

interface Props {
  text: string;
}

export default function StreamingMessage({
  text,
}: Props) {
  const streamed = useStreaming(text);

  return (
    <p className="whitespace-pre-wrap leading-7">
      {streamed}
      <span className="animate-pulse">▋</span>
    </p>
  );
}