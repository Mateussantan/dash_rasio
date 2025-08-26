"use client";
import React from "react";
import Header from "../components/Header";
import SectionCard from "../components/SectionCard";
import MetricCard from "../components/MetricCard";
import { Server, Upload, Download } from "lucide-react";

const kpis = [
  { label: "Jobs (24h)", value: 128, icon: Server, delta: 3.1, positive: true },
  { label: "Arquivos enviados", value: 312, icon: Upload, delta: -0.8 },
  {
    label: "Arquivos recebidos",
    value: 287,
    icon: Download,
    delta: 1.5,
    positive: true,
  },
];

export default function ProtheusPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-4 px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {kpis.map((k, i) => (
            <MetricCard key={i} {...k} />
          ))}
        </div>

        <SectionCard
          header={
            <div className="text-gray-200 text-sm font-medium">
              Legenda de Status
            </div>
          }>
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-2 py-1 rounded bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
              Sucesso
            </span>
            <span className="px-2 py-1 rounded bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
              Em fila
            </span>
            <span className="px-2 py-1 rounded bg-rose-400/10 text-rose-400 border border-rose-400/20">
              Falha
            </span>
          </div>
        </SectionCard>
      </main>
    </div>
  );
}
