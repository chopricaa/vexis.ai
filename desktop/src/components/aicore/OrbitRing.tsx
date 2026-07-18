interface Props {
  size: number;
}

function OrbitRing({ size }: Props) {
  return (
    <div
      className="
      absolute
      rounded-full
      border
      border-cyan-400/20
      animate-spin
      "
      style={{
        width: size,
        height: size,
        animationDuration: "20s",
      }}
    />
  );
}

export default OrbitRing;