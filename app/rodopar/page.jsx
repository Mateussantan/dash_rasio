"use client";
import React from "react";
import Header from "../components/Header";
import SectionCard from "../components/SectionCard";
import MetricCard from "../components/MetricCard";
import { Truck, FileText, Boxes } from "lucide-react";

const kpis = [
  {
    label: "OSTs processadas (24h)",
    value: 642,
    icon: FileText,
    delta: 2.4,
    positive: true,
  },
  { label: "CT-e gerados", value: 218, icon: Boxes, delta: -1.3 },
  { label: "Programações", value: 74, icon: Truck, delta: 0.6, positive: true },
];

const ultimos = [
  { id: "OST-4552", status: "Faturada", quando: "há 12m" },
  { id: "OST-4553", status: "Em transporte", quando: "há 25m" },
  { id: "OST-4554", status: "Aguardando", quando: "há 41m" },
];

export default function RodoparPage() {
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
              Últimas OSTs
            </div>
          }>
          <ul className="space-y-3">
            {ultimos.map((u) => (
              <li
                key={u.id}
                className="flex items-center justify-between bg-[#151515] border border-[#272727] rounded-lg px-4 py-3">
                <span className="text-gray-100 text-sm">{u.id}</span>
                <span className="text-gray-400 text-xs">
                  {u.status} • {u.quando}
                </span>
              </li>
            ))}
          </ul>
        </SectionCard>
      </main>
    </div>
  );
}
