"use client";
import React from "react";
import Header from "../components/Header";
import SectionCard from "../components/SectionCard";
import StatusBadge from "../components/StatusBadge.jsx";

const linhas = [
  { id: 1, nome: "Webhook Pedido", status: "OK", ultimaSync: "10:12" },
  { id: 2, nome: "Consulta NFSe", status: "PENDENTE", ultimaSync: "09:55" },
  { id: 3, nome: "Envio CT-e", status: "ERRO", ultimaSync: "09:43" },
];

export default function HenselPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-4 px-4 lg:px-8">
        <SectionCard>
          <div className="overflow-auto">
            <table className="min-w-full border border-[#2a2a2a] rounded-lg overflow-hidden">
              <thead className="bg-[#161616] sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">
                    #
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">
                    Processo
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">
                    Última Sync
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2a2a2a] bg-[#141414]">
                {linhas.map((l) => (
                  <tr key={l.id} className="hover:bg-[#1e1e1e]">
                    <td className="px-4 py-3 text-sm text-gray-300">{l.id}</td>
                    <td className="px-4 py-3 text-sm text-gray-100">
                      {l.nome}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <StatusBadge status={l.status} />
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-300">
                      {l.ultimaSync}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>
      </main>
    </div>
  );
}
