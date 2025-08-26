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
  BadgeDollarSign,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState, useEffect, useMemo } from "react";

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
  BadgeDollarSign,
};

const normalizePath = (p = "") => {
  if (!p) return "/";
  return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
};

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [sidebarItems, setSidebarItems] = useState(null); 
  const pathname = normalizePath(usePathname());

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => setSidebarItems(data?.sidebarItems ?? []))
      .catch((err) => {
        console.error("Erro ao carregar itens do sidebar:", err);
        setSidebarItems([]); 
      });
  }, []);
  const items = useMemo(() => {
    if (!Array.isArray(sidebarItems)) return [];
    return sidebarItems
      .filter((i) => i && typeof i.name === "string")
      .filter((i) => typeof i.href === "string" && i.href.trim() !== "")
      .filter((i) => !!ICONS[i.icon])
      .map((i) => ({
        ...i,
        href: normalizePath(i.href.trim()),
      }));
  }, [sidebarItems]);

  return (
    <div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="h-full bg-[#1e1e1e] backdrop-blur-md p-4 flex flex-col border-r border-[#2f2f2f]">
        <button
          onClick={() => setIsSidebarOpen((v) => !v)}
          className="p-2 rounded-full hover:bg-[#2f2f2f] transition-colors max-w-fit"
          aria-label={isSidebarOpen ? "Recolher menu" : "Expandir menu"}
        >
          <Menu size={22} className="text-gray-300" />
        </button>

        <nav className="mt-8 flex-grow">
          {/* Loading skeleton simples */}
          {sidebarItems === null && (
            <div className="space-y-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-10 rounded-lg bg-[#2a2a2a] animate-pulse"
                />
              ))}
            </div>
          )}

          {sidebarItems !== null &&
            items.map((item) => {
              const IconComponent = ICONS[item.icon];
              const isActive =
                pathname === item.href ||
                (pathname.startsWith(item.href + "/") && item.href !== "/");

              return (
                <Link key={item.href} href={item.href} prefetch={true}>
                  <div
                    className={`group relative flex items-center p-4 text-sm font-medium rounded-lg hover:bg-[#2f2f2f] transition-colors mb-2 ${
                      isActive ? "bg-[#2f2f2f]" : ""
                    }`}
                  >
                    <IconComponent
                      size={20}
                      className="min-w-[20px] text-gray-300"
                    />

                    {isSidebarOpen ? (
                      <span className="ml-4 whitespace-nowrap text-gray-100">
                        {item.name}
                      </span>
                    ) : (
                      // Tooltip quando colapsado
                      <span className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap px-2 py-1 rounded bg-[#2a2a2a] text-gray-100 text-xs">
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
