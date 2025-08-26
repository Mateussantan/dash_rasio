"use client";
import { motion } from "framer-motion";

export default function MetricCard({
  icon: Icon,
  label,
  value,
  delta,
  positive,
}) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
      className="bg-[#171717] border border-[#272727] rounded-xl p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-indigo-500/20 to-cyan-500/10 ring-1 ring-white/10">
            {Icon && <Icon className="w-5 h-5 text-gray-200" />}
          </div>
          <span className="text-gray-300 text-sm">{label}</span>
        </div>
        {delta !== undefined && (
          <span
            className={`${
              positive ? "text-emerald-400" : "text-rose-400"
            } text-xs font-medium`}>
            {positive ? "+" : ""}
            {delta}%
          </span>
        )}
      </div>
      <p className="mt-2 text-3xl font-semibold text-white tracking-tight">
        {value}
      </p>
    </motion.div>
  );
}
