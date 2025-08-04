import { Bell, ContainerIcon, ShieldBan, Truck } from "lucide-react";
import StatCard from "../components/StatCard"
import React from "react";

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-4 px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatCard name="Integrações" icon={Truck} value="1000" />
          <StatCard name="Programações de Veículos" icon={ContainerIcon} value="1000" />
          <StatCard name="OST" icon={ShieldBan} value="1000" />
          <StatCard name="Containers" icon={Bell} value="1000" />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
