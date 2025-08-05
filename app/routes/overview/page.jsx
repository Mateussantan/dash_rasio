"use client";

import { Bell, ContainerIcon, ShieldBan, Truck } from "lucide-react";
import StatCard from "../../components/StatCard";
import React from "react";
import { motion } from "framer-motion";
import IntegrationOverview from "../../components/IntegrationOverview";
import CategoryIntegration from "../../components/CategoryIntegration";

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-4 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <StatCard name="Integrações" icon={Truck} value="1000" />
          <StatCard
            name="Programações de Veículos"
            icon={ContainerIcon}
            value="1000"
          />
          <StatCard name="OST" icon={ShieldBan} value="1000" />
          <StatCard name="Containers" icon={Bell} value="1000" />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <IntegrationOverview />
          <CategoryIntegration />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
