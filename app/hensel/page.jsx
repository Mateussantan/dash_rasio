"use client";

import React, { useEffect, useState } from "react";
import SectionCard from "../components/SectionCard";

export default function HenselPage() {
  const [linhas, setLinhas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregar() {
      try {
        const res = await fetch("/api/deadline/hoje", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        const arr = Array.isArray(data)
          ? data
          : Array.isArray(data && data.linhas)
          ? data.linhas
          : [];

        setLinhas(arr);
      } catch (e) {
        console.error("Erro ao buscar dados:", e);
        setErro(e.message || "Falha ao carregar dados");
        setLinhas([]);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, []);

  const formatarData = (v) => {
    if (!v) return "-";
    const d = new Date(v);
    return isNaN(d.getTime()) ? "-" : d.toLocaleString("pt-BR");
  };

  if (loading) {
    return <div className="p-6 text-gray-400 text-sm">Carregando dados do banco...</div>;
  }

  if (erro) {
    return <div className="p-6 text-red-400 text-sm">Erro ao carregar: {erro}</div>;
  }

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-4 px-4 lg:px-8">
        <SectionCard>
          <div className="overflow-auto">
            <table className="min-w-full border border-[#2a2a2a] rounded-lg overflow-hidden">
              <thead className="bg-[#161616] sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">#</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">Navio</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">Armador</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">Última Atualização</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2a2a2a] bg-[#141414]">
                {linhas.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center text-gray-400 py-4">
                      Nenhum registro atualizado hoje.
                    </td>
                  </tr>
                ) : (
                  linhas.map((l, idx) => (
                    <tr key={idx} className="hover:bg-[#1e1e1e]">
                      <td className="px-4 py-3 text-sm text-gray-300">{idx + 1}</td>
                      <td className="px-4 py-3 text-sm text-gray-100">{l.NM_NAVIO || "-"}</td>
                      <td className="px-4 py-3 text-sm text-gray-300">{l.NM_ARMADOR || "-"}</td>
                      <td className="px-4 py-3 text-sm text-gray-300">{formatarData(l.DT_LASTUPDATE)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </SectionCard>
      </main>
    </div>
  );
}
