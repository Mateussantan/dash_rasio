"use client";
import { motion } from "framer-motion";

export default function SectionCard({ children, className = "", header }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-[#1e1e1e]/90 backdrop-blur-md rounded-xl border border-[#2a2a2a] shadow-lg ${className}`}>
      {header && (
        <div className="px-5 py-4 border-b border-[#2a2a2a] flex items-center justify-between">
          {header}
        </div>
      )}
      <div className="p-5">{children}</div>
    </motion.section>
  );
}
