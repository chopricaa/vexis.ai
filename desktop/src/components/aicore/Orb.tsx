function Orb() {
  return (
    <div
      className="
      relative
      h-[420px]
      w-[420px]
      rounded-full

      border
      border-cyan-400/30

      bg-gradient-to-br
      from-violet-500/25
      via-cyan-300/10
      to-white/10

      backdrop-blur-3xl

      shadow-[0_0_100px_rgba(34,211,238,.18)]
      "
    >
      <div
        className="
        absolute
        inset-5
        rounded-full
        border
        border-white/10
      "
      />

      <div
        className="
        absolute
        inset-12
        rounded-full
        bg-white/5
        backdrop-blur-xl
      "
      />
    </div>
  );
}

export default Orb;