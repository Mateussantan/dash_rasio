"use client";
import { useState } from "react";

const PRESETS = [
  { id: "7d", label: "7 dias" },
  { id: "30d", label: "30 dias" },
  { id: "90d", label: "90 dias" },
  { id: "ytd", label: "YTD" },
];

export default function FilterPills({ initial = "30d", onChange }) {
  const [active, setActive] = useState(initial);
  return (
    <div className="inline-flex items-center gap-2 bg-[#151515] border border-[#2a2a2a] rounded-xl p-1">
      {PRESETS.map((p) => (
        <button
          key={p.id}
          onClick={() => {
            setActive(p.id);
            onChange && onChange(p.id);
          }}
          className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${
            active === p.id
              ? "bg-[#2a2a2a] text-gray-100"
              : "text-gray-400 hover:text-gray-200"
          }`}>
          {p.label}
        </button>
      ))}
    </div>
  );
}
