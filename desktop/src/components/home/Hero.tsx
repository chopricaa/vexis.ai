import { motion } from "framer-motion";
import AICore from "./AICore";
import HeroBadge from "../dashboard/HeroBadge";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mx-auto flex w-full max-w-7xl flex-col items-center py-12"
    >
      {/* AI Badge */}
      <HeroBadge />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-6 text-center text-6xl font-black leading-tight tracking-tight"
      >
        <span className="text-white">
          Good Evening,
        </span>

        <br />

        <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Chopricaaa
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="mt-5 text-lg text-gray-400"
      >
        What can I help you build today?
      </motion.p>

      {/* AI Core */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          type: "spring",
        }}
      >
        <AICore />
      </motion.div>
    </motion.section>
  );
}