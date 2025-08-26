"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bell, ContainerIcon, ShieldBan, Truck } from "lucide-react";
import MetricCard from "../components/MetricCard";
import IntegrationOverview from "../components/IntegrationOverview";
import CategoryIntegration from "../components/CategoryIntegration";
import Header from "../components/Header"; // mantido (renderizado via RootLayout)

export default function OverviewPage() {
  // Evita warning de import não usado; Header é renderizado no layout global
  void Header;

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-4 px-4 lg:px-8">
        {/* Título local (antes era PageHeader) */}
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Visão Geral
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Resumo das integrações, categorias e KPIs.
            </p>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <MetricCard label="Integrações" icon={Truck} value="1.000" delta={4.2} positive />
          <MetricCard label="Prog. Veículos" icon={ContainerIcon} value="1.000" delta={-1.1} />
          <MetricCard label="OST" icon={ShieldBan} value="1.000" delta={2.7} positive />
          <MetricCard label="Containers" icon={Bell} value="1.000" delta={0.6} positive />
        </motion.div>

        {/* Dois gráficos, lado a lado no desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="h-80">
            <IntegrationOverview />
          </div>
          <div className="h-80">
            <CategoryIntegration />
          </div>
        </div>
      </main>
    </div>
  );
}
