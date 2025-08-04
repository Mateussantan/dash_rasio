"use client";

import {
  Bell,
  ChartNoAxesColumn,
  House,
  Info,
  Mail,
  ContainerIcon,
  Users,
  Menu,
  Truck,
  ShieldBan,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ICONS = {
  ShieldBan,
  House,
  Truck,
  ContainerIcon,
  ChartNoAxesColumn,
  Mail,
  Users,
  Bell,
  Info,
};

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [sidebarItems, setSidebarItems] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => setSidebarItems(data.sidebarItems))
      .catch((err) => console.error("Erro ao carregar itens do sidebar:", err));
  }, []);

  return (
    <div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}>
      <div className="h-full bg-[#1e1e1e] text-white p-4 flex flex-col border-r border-[#2f2f2f]">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-[#2f2f2f] transition-colors w-fit self-end">
          <Menu size={22} className="text-gray-300" />
        </button>

        <nav className="mt-8 flex-grow">
          {sidebarItems.map((item) => {
            const IconComponent = ICONS[item.icon];

            return (
              <Link key={item.name} href={item.href || "#"}>
                <div
                  className={`flex items-center p-3 text-sm font-medium rounded-md hover:bg-[#2f2f2f] transition-colors mb-2 ${
                    pathname === item.href ? "bg-[#2f2f2f]" : ""
                  }`}>
                  {IconComponent ? (
                    <IconComponent
                      size={20}
                      className="text-gray-300 min-w-[20px]"
                    />
                  ) : (
                    <span className="text-gray-300 font-bold">?</span>
                  )}
                  {isSidebarOpen && (
                    <span className="ml-4 whitespace-nowrap text-gray-100">
                      {item.name}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
