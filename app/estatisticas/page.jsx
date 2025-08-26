"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SectionCard from "../components/SectionCard";
import FilterPills from "../components/FilterPills";
import CustomTooltip from "../components/CustomTooltip";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

export default function EstatisticasPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/data/data.json");
        const json = await res.json();
        const base = json.integration || [];
        const toChart = base.slice(0, 8).map((m) => ({
          name: m.name,
          Integrações: m.integration,
          Erros: Math.round(m.integration * 0.07),
        }));
        setData(toChart);
      } catch (e) {
        console.error(e);
        setData([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-4 px-4 lg:px-8">
        <SectionCard
          header={
            <div className="text-gray-200 text-sm font-medium">Desempenho</div>
          }>
          {loading ? (
            <div className="h-80 rounded-lg bg-[#2a2a2a] animate-pulse" />
          ) : data && data.length ? (
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
                  <XAxis
                    dataKey="name"
                    stroke="#9ca3af"
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis stroke="#9ca3af" tick={{ fontSize: 12 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Bar
                    dataKey="Integrações"
                    fill="#22c55e"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar dataKey="Erros" fill="#ef4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="text-sm text-gray-400">Sem dados para exibir.</div>
          )}
        </SectionCard>
      </main>
    </div>
  );
}
