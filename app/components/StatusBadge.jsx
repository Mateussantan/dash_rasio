"use client";
import { CheckCircle2, AlertTriangle, Clock } from "lucide-react";

export default function StatusBadge({ status }) {
  const map = {
    OK: {
      cls: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
      Icon: CheckCircle2,
      label: "OK",
    },
    ERRO: {
      cls: "text-rose-400 bg-rose-400/10 border-rose-400/20",
      Icon: AlertTriangle,
      label: "Erro",
    },
    PENDENTE: {
      cls: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
      Icon: Clock,
      label: "Pendente",
    },
  };
  const cfg = map[status] ?? map.PENDENTE;
  const I = cfg.Icon;
  return (
    <span
      className={`inline-flex items-center gap-1 text-xs border px-2 py-1 rounded ${cfg.cls}`}>
      <I className="w-3 h-3" /> {cfg.label}
    </span>
  );
}
