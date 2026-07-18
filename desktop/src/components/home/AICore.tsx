import { motion } from "framer-motion";

export default function AICore() {
  return (
    <div className="relative flex h-[320px] w-[320px] items-center justify-center">

      {/* Outer Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-72 w-72 rounded-full bg-cyan-500 blur-[90px]"
      />

      {/* Ring 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-64 w-64 rounded-full border border-cyan-400/15"
      />

      {/* Ring 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-56 w-56 rounded-full border border-violet-400/20"
      />

      {/* Ring 3 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-48 w-48 rounded-full border border-cyan-300/10"
      />

      {/* AI Sphere */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 shadow-[0_0_80px_rgba(59,130,246,0.45)]"
      >
        {/* Inner Glass */}
        <div className="absolute inset-2 rounded-full bg-black/25 backdrop-blur-xl" />

        {/* Highlight */}
        <div className="absolute top-5 left-6 h-8 w-8 rounded-full bg-white/25 blur-md" />

        {/* Logo */}
        <span className="relative text-4xl font-black text-white">
          V
        </span>
      </motion.div>

      {/* Floating Particle */}
      <motion.div
        animate={{
          x: [-80, 90, -80],
          y: [-20, -50, -20],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-3 w-3 rounded-full bg-cyan-400"
      />

      {/* Floating Particle */}
      <motion.div
        animate={{
          x: [70, -60, 70],
          y: [60, 20, 60],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-2 w-2 rounded-full bg-violet-400"
      />
    </div>
  );
}