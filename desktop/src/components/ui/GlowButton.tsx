interface Props {
  children: React.ReactNode;
}

function GlowButton({ children }: Props) {
  return (
    <button
      className="
      rounded-full
      px-10
      py-4
      font-semibold
      text-lg
      bg-gradient-to-r
      from-violet-600
      via-purple-500
      to-cyan-400
      shadow-[0_0_40px_rgba(168,85,247,.45)]
      transition-all
      duration-500
      hover:scale-105
      hover:shadow-[0_0_70px_rgba(34,211,238,.55)]
      "
    >
      {children}
    </button>
  );
}

export default GlowButton;