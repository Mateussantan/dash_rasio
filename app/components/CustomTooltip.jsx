"use client";

export default function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg bg-[#1f2937]/90 border border-[#4b5563] px-3 py-2 text-xs text-gray-100">
      <div className="font-medium mb-1 text-gray-200">{label}</div>
      {payload.map((p, i) => (
        <div key={i} className="flex items-center justify-between gap-4">
          <span className="text-gray-300">{p.name}</span>
          <span className="text-gray-100 font-semibold">{p.value}</span>
        </div>
      ))}
    </div>
  );
}
