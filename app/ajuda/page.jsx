"use client";
import React from "react";
import { HelpCircle, BookOpen, Mail, MessageSquare } from "lucide-react";
import Header from "../components/Header";
import SectionCard from "../components/SectionCard";

const faqs = [
  {
    q: "Como conectar uma nova integração?",
    a: "Vá em Configurações > Integrações > Novo Conector e siga o passo a passo.",
  },
  {
    q: "O gráfico não carrega, o que fazer?",
    a: "Verifique a rede, recarregue a página e consulte os logs em Monitoramento.",
  },
  {
    q: "Como personalizar o período dos relatórios?",
    a: "Na página de Estatísticas, ajuste o seletor de período no canto superior direito.",
  },
];

export default function AjudaPage() {
  const actions = (
    <div className="flex gap-2">
      <a
        href="#"
        className="px-3 py-2 rounded-lg bg-[#2a2a2a] text-gray-100 text-sm hover:bg-[#333] flex items-center gap-2">
        <BookOpen className="w-4 h-4" /> Documentação
      </a>
      <a
        href="#"
        className="px-3 py-2 rounded-lg bg-[#2a2a2a] text-gray-100 text-sm hover:bg-[#333] flex items-center gap-2">
        <MessageSquare className="w-4 h-4" /> Abrir chamado
      </a>
      <a
        href="#"
        className="px-3 py-2 rounded-lg bg-[#2a2a2a] text-gray-100 text-sm hover:bg-[#333] flex items-center gap-2">
        <Mail className="w-4 h-4" /> Contato
      </a>
    </div>
  );

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-4 px-4 lg:px-8">
        <SectionCard>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="bg-[#171717] border border-[#272727] rounded-lg p-4 hover:bg-[#1e1e1e] transition-colors">
                <p className="text-gray-100 font-medium">{item.q}</p>
                <p className="text-gray-400 text-sm mt-2">{item.a}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </main>
    </div>
  );
}
