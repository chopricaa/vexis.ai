import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Top Left */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-cyan-500/15 blur-[140px]"
      />

      {/* Top Right */}
      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-52 -right-36 h-[600px] w-[600px] rounded-full bg-violet-600/15 blur-[160px]"
      />

      {/* Bottom */}
      <motion.div
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-48 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[180px]"
      />
    </div>
  );
}