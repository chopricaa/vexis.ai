interface Props {
  children: React.ReactNode;
  className?: string;
}

function GlassCard({ children, className = "" }: Props) {
  return (
    <div
      className={`
        rounded-[28px]
        border
        border-cyan-400/20
        bg-white/[0.04]
        backdrop-blur-3xl
        shadow-[0_0_40px_rgba(34,211,238,.08)]
        transition-all
        duration-500
        hover:border-cyan-400/40
        hover:shadow-[0_0_50px_rgba(168,85,247,.18)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default GlassCard;