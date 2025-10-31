"use client";

import { Search, UserRound, Menu, X } from "lucide-react";
import React, { useState } from "react";
import GlitchEffect from "./GlitchEffect";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full z-20 bg-transparent py-4 px-5 fixed top-0 backdrop-blur-sm">
      <nav className="w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-3xl md:text-4xl text-[#a60021] font-[fight] tracking-wide">
            <GlitchEffect>FIGHT CLUB</GlitchEffect>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-8 text-lg lg:text-xl text-[#e0e0e0] font-[trash]">
          <div className="hover:text-[#a60021] transition">Top Casts</div>
          <div>•</div>
          <div className="hover:text-[#a60021] transition">Box Office</div>
          <div>•</div>
          <div className="hover:text-[#a60021] transition">Rules</div>
          <div>•</div>
          <div className="hover:text-[#a60021] transition">Quotes</div>
        </div>

        {/* Icons */}
        <div className="hidden md:flex gap-6 w-auto justify-end">
          <div className="border-[1.5px] border-[#e0e0e0] rounded-full p-2 hover:scale-110 transition">
            <Search size={20} color="#a60021" strokeWidth={3} />
          </div>
          <div className="border-[1.5px] border-[#e0e0e0] rounded-full p-2 hover:scale-110 transition">
            <UserRound size={20} color="#a60021" strokeWidth={3} />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#e0e0e0]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a0a0a]/90 backdrop-blur-sm flex flex-col items-center py-6 space-y-4 text-[#e0e0e0] font-[trash] text-lg border-t border-[#a60021]/30 md:hidden">
          <div className="hover:text-[#a60021] transition">Top Casts</div>
          <div className="hover:text-[#a60021] transition">Box Office</div>
          <div className="hover:text-[#a60021] transition">Rules</div>
          <div className="hover:text-[#a60021] transition">Quotes</div>
          <div className="flex gap-6 pt-4">
            <div className="border-[1.5px] border-[#e0e0e0] rounded-full p-2">
              <Search size={20} color="#a60021" strokeWidth={3} />
            </div>
            <div className="border-[1.5px] border-[#e0e0e0] rounded-full p-2">
              <UserRound size={20} color="#a60021" strokeWidth={3} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
