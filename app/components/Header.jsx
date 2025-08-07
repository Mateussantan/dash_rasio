import React from "react";
import { Bell } from "lucide-react";
import Image from "next/image";
import logo from "../../public/images/logotipo-rasio.png";
import admin from "../../public/images/admin.jpg";
import bra from "../../public/images/bra.png";

const Header = () => {
  return (
    <header className="bg-[#1e1e1e] shadow-lg border-b border-[#1e1e1e] mx-4 sm:mx-6 lg:mx-8 mt-4 mb-2 rounded-lg">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 flex items-center justify-between">
        <Image
          src={logo}
          alt="logo-rasio"
          width={150}
          height={100}
          className="shadow-md"
        />
        <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-100">
          Dashboard Integração Rasio
        </h1>
        <div className="flex items-center space-x-3 sm:space-x-6">
          <Image
            src={bra}
            alt="country-flag"
            width={25}
            height={20}
            className="rounded-full shadow-md cursor-pointer"
          />

          <div className="relative">
            <Bell className="w-5 sm:w-6 h-5 sm:h-6 text-gray-300 cursor-pointer hover:text-white" />
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Image
              src={admin}
              alt="admin"
              width={35}
              height={35}
              className="rounded-full border border-gray-600"
            />
            <span className="hidden md:block text-gray-100 font-medium">
              Username
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
