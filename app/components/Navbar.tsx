import { Search, UserRound } from "lucide-react";
import Image from "next/image";
import React from "react";
import GlitchEffect from "./GlitchEffect";

const Navbar = () => {
  return (
    <header className="w-full z-20 bg-transparent py-5 px-5 fixed top-0">
      <nav className="w-full flex items-center justify-between">
        <div className="w-[20%]">
          <h1 className="text-4xl text-[#a60021] font-[fight]">
            <GlitchEffect>FIGHT CLUB </GlitchEffect>
          </h1>
        </div>
        <div className="flex gap-5 text-xl text-[#e0e0e0] font-[trash]">
          <div>Top Casts</div>
          <div>.</div>
          <div>Box Office</div>
          <div>.</div>
          <div>Rules</div>
          <div>.</div>
          <div>quotes</div>
        </div>
        <div className="flex gap-8 w-[20%] px-10 justify-end">
          <div className="border-[1.5px] border-[#e0e0e0] rounded-full p-2">
            <Search size={20} color="#a60021" strokeWidth={3} />
          </div>
          <div className="border-[1.5px] border-[#e0e0e0] rounded-full p-2">
            <UserRound size={20} color="#a60021" strokeWidth={3} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
