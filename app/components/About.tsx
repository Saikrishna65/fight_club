import Image from "next/image";
import React from "react";
import GlitchEffect from "./GlitchEffect";

const About = () => {
  return (
    <div>
      <div className="w-full h-screen bg-[#1A1A1A]">
        <div className="p-10 flex justify-between">
          <div className="w-[25%]">
            <h1 className="text-[#bebcbc] text-xl font-[mons]">
              Second Rule :
            </h1>
            <p className="text-[#e0e0e0] font-[trash] text-xl tracking-wide">
              "you <span className="text-[#a60021]"> DO NOT </span> talk about{" "}
              <span className="text-[#a60021] font-[fight]">
                <GlitchEffect>Fight Club </GlitchEffect>
              </span>
              ."
            </p>
          </div>
          <div>
            <div className="text-[#e0e0e0] text-5xl font-bold font-[fight] tracking-widest">
              15 October 1999
            </div>
          </div>
          <div className="w-[25%]">
            <div className="text-[#e0e0e0] font-[mons] border-l-2 border-[#a60021] pl-5">
              An insomniac office worker forms a{" "}
              <span className="text-[#a60021]">
                <GlitchEffect> FIGHT CLUB </GlitchEffect>
              </span>{" "}
              with his
              <span className="text-[#a60021]"> DESTRUCTIVE</span> alter ego,{" "}
              <span className="text-[#a60021]"> Tyler Durden.</span>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between px-10">
          <div className="relative w-[30%] pt-20">
            <div className="font-[mons] text-[#e0e0e0] border-l-2 border-[#a60021] px-5">
              <span className="text-[#a60021]">
                <GlitchEffect> PROJECT MAYHEM </GlitchEffect>{" "}
              </span>{" "}
              — an anarchic movement built to{" "}
              <span className="text-[#a60021]"> OBLITERATE </span> modern
              civilization’s structure by turning{" "}
              <span className="text-[#a60021]"> CHAOS </span>,{" "}
              <span className="text-[#a60021]"> VIOLANCE </span>, and
              <span className="text-[#a60021]"> DESTRUCTION </span> into a{" "}
              <span className="text-[#a60021]"> WEAPON </span> against
              consumerism and <span className="text-[#a60021]"> CONTROL </span>.
            </div>
            <div className="absolute bottom-5 px-5">
              <span className="text-lg font-[mons] text-[#e0e0e0]">
                <span className="text-[#a60021]">“</span>The{" "}
                <span className="text-[#a60021]">THINGS</span> you own{" "}
                <span className="text-[#a60021]">END</span> up owning{" "}
                <span className="text-[#a60021]">YOU</span>.
                <span className="text-[#a60021]">"</span>
              </span>
            </div>
          </div>
          <div className="relative h-96 w-80">
            <Image
              className="absolute right-0 w-[75%] h-[70%]"
              src="/images/tyler_durden.png"
              alt="Tyler Durden"
              width={250}
              height={40}
            />
            <div className="h-[70%] w-[20%] pl-2 bg-[#a60021] flex items-center justify-center">
              <span className="font-extrabold text-[45px] font-[impact] [writing-mode:vertical-rl] rotate-180">
                TYLER DURDEN
              </span>
            </div>
            <div className="flex">
              <div className="flex justify-center pt-1 bg-[#a60021] mt-3 w-[20%] h-[10%]">
                <span className="text-3xl font-extrabold font-[impact]">
                  THE
                </span>
              </div>
              <div className="ml-3 mt-3 h-[10%]">
                <span className="text-5xl tracking-wider text-[#a60021] font-extrabold font-[impact]">
                  <GlitchEffect>PROJECT</GlitchEffect>
                </span>
              </div>
            </div>
            <div className="h-[10%] w-[56%]">
              <span className="text-5xl tracking-wider text-[#a60021] font-extrabold font-[impact]">
                <GlitchEffect>MAYHEM</GlitchEffect>
              </span>
              <span className="absolute -bottom-1 text-[12px] text-[#e0e0e0] font-[mons]">
                Do Not Talk About <GlitchEffect>Fight Club</GlitchEffect>
              </span>
            </div>
            <div className="absolute right-0 bottom-4 bg-[#a60021] w-[20%] h-[23%]"></div>
            <div className="absolute right-0 bottom-0 bg-[#a60021] w-[40%] h-[13%]"></div>
          </div>
          <div className="relative w-[30%]">
            <div className="px-5 mt-10">
              <span className="text-lg font-[mons] text-[#e0e0e0]">
                <span className="text-[#a60021]">"</span> True{" "}
                <span className="text-[#a60021]"> FREEDOM </span> comes when you
                have <span className="text-[#a60021]"> NOTHING </span> left to
                <span className="text-[#a60021]"> LOSE</span>.{" "}
                <span className="text-[#a60021]">"</span>
              </span>
            </div>
            <div className="px-5 absolute bottom-20">
              <h1 className="text-[#bebcbc] text-xl font-[mons]">
                Third Rule :
              </h1>
              <p className="text-[#e0e0e0] font-[trash] text-xl tracking-widest">
                "If someone says '<span className="text-[#a60021]">stop</span>',
                goes limp, or taps out, the{" "}
                <span className="text-[#a60021]">fight</span> is over. "
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
