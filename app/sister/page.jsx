"use client";

import React from "react";
import { motion } from "framer-motion";
import { Network, PlugZap, Activity } from "lucide-react";

export default function SisterPage() {
  const integracoes = [
    { nome: "Webhook NF", ativo: true },
    { nome: "Agendador VGM", ativo: false },
    { nome: "Tracker Container", ativo: true },
  ];

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-4 px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1e1e1e] rounded-xl p-6 border border-[#1f1f1f]">
          <h1 className="text-2xl font-semibold text-gray-100 mb-6 flex items-center gap-2">
            <Network className="w-6 h-6" /> Sister • Conectores
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {integracoes.map((i, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                className="bg-[#171717] border border-[#272727] rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <p className="text-gray-100 font-medium">{i.nome}</p>
                  {i.ativo ? (
                    <span className="text-xs px-2 py-1 rounded border border-green-400/20 bg-green-400/10 text-green-400 flex items-center gap-1">
                      <Activity className="w-3 h-3" /> Ativo
                    </span>
                  ) : (
                    <span className="text-xs px-2 py-1 rounded border border-yellow-400/20 bg-yellow-400/10 text-yellow-400 flex items-center gap-1">
                      <PlugZap className="w-3 h-3" /> Desativado
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
