import { motion } from "framer-motion";

interface BackgroundProps {
  children: React.ReactNode;
}

export default function Background({
  children,
}: BackgroundProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060A12] text-white">

      {/* Aurora Left */}
      <motion.div
        animate={{
          x: [-60, 40, -60],
          y: [-30, 20, -30],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-0 h-[650px] w-[650px] rounded-full bg-cyan-500/10 blur-[160px]"
      />

      {/* Aurora Right */}
      <motion.div
        animate={{
          x: [60, -40, 60],
          y: [20, -20, 20],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 top-20 h-[700px] w-[700px] rounded-full bg-violet-500/10 blur-[170px]"
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          y: [20, -20, 20],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-250px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[180px]"
      />

      {/* Floating Stars */}
      <div className="absolute inset-0 overflow-hidden">

        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}

      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}