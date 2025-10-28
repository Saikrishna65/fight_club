import React from "react";
import Image from "next/image";
import Marquee from "./Marquee";
import { ArrowUpRight, TriangleAlert } from "lucide-react";
import ParallaxSection from "./ParallaxSection";
import Navbar from "./Navbar";
import GlitchEffect from "./GlitchEffect";

const singleImageItem1 = {
  src: "/images/danger_sign.png",
  alt: "Repeated fist icon",
};

const singleImageItem2 = {
  src: "/images/black_logo.png",
  alt: "Repeated fist icon",
};

const REPEAT_COUNT = 30;

const duplicatedImages = Array.from(
  { length: REPEAT_COUNT },
  () => singleImageItem1
);
const duplicatedImages2 = Array.from(
  { length: REPEAT_COUNT },
  () => singleImageItem2
);

const Hero = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#111111] overflow-hidden">
      <Navbar />
      <div className="relative flex flex-col mt-15 items-center justify-center grow">
        {/* Decorative overlay text (non-interactive) */}
        <ParallaxSection speed={0.7} className="w-full flex justify-center">
          <div className="absolute inset-0 flex flex-col items-center pointer-events-none mt-5">
            <div className="absolute top-0 w-full flex justify-between px-5">
              {/* If you want these names spaced evenly across, consider grid or flex with gap */}
              <div className="flex items-center gap-6 w-full justify-between">
                <h2 className="font-[base] text-2xl tracking-widest text-[#a60021]">
                  Brad Pitt
                </h2>
                <h2 className="font-[base] text-2xl tracking-widest text-[#a60021]">
                  David Fincher
                </h2>
                <h2 className="font-[base] text-2xl tracking-widest text-[#a60021]">
                  Helena Bonham Carter
                </h2>
                <h2 className="font-[base] text-2xl tracking-widest text-[#a60021]">
                  Edward Norton
                </h2>
              </div>
            </div>

            <h1
              className="
            pt-3
            text-8xl md:text-9xl lg:text-[10rem] xl:text-[11rem]
            z-0 font-[base] tracking-widest text-center text-[#a60021]
            "
            >
              <GlitchEffect>FIGHT CLUB</GlitchEffect>
            </h1>
          </div>
        </ParallaxSection>

        {/* Hero image container: parent must have position relative and stable height for Image fill */}
        <div className="relative z-10 w-full max-w-4xl px-4 mt-8 md:mt-0 flex justify-center items-center">
          {/* Give the container an explicit height so Image fill can size properly */}
          <div className="relative mr-10 w-full h-[28rem] md:h-[36rem] lg:h-[38rem]">
            <Image
              src="/hero_pic.png"
              alt="Fight Club themed hero image"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* Top marquee */}
        <div className="absolute -mt-15">
          <div className="h-[50vh] w-full"></div>
          <ParallaxSection speed={0.7} className="w-full flex justify-center">
            <Marquee
              images={duplicatedImages}
              direction="Left"
              speed={350}
              containerClass="py-1 my-8 -rotate-2 bg-[#1A1A1A]"
              imageClass="h-10 w-10"
            />
          </ParallaxSection>
          <ParallaxSection speed={0.7} className="w-full flex justify-center">
            <div className="relative w-full flex h-[50vh]">
              <div className="absolute py-10 px-5 left-30 top-10 w-[20%] h-30">
                <h2 className="text-[#bebcbc] font-[mons] text-xl">
                  First rule of <GlitchEffect>Fight Club</GlitchEffect> :
                </h2>
                <span className="text-[#e0e0e0] font-[trash] text-xl">
                  "You do not talk about{" "}
                  <span className="font-[fight] text-[#a60021]">
                    {" "}
                    <GlitchEffect>Fight Club .</GlitchEffect>."
                  </span>
                </span>
              </div>
              <div className="absolute right-30 top-10 w-[20%] h-30">
                <div className="w-[75%] h-[40%] mt-10 flex items-center gap-3 bg-[#e0e0e0] rounded-full">
                  <div className="pl-5">
                    <h1 className="text-3xl font-[fight] text-[#a60021]">
                      Join The Club
                    </h1>
                  </div>
                  <div>
                    <ArrowUpRight size={40} color="#a60021" />
                  </div>
                </div>
                <div className="flex gap-1 mt-2 -ml-2">
                  <div className="mt-px">
                    <TriangleAlert size={14} color="#a60021" />
                  </div>
                  <span className="text-[#e0e0e0] text-[11px] font-[mons]">
                    You must know the 8 Rules of{" "}
                    <GlitchEffect>Fight Club</GlitchEffect>.
                  </span>
                </div>
              </div>
            </div>
          </ParallaxSection>
        </div>

        {/* Bottom marquee */}
        <div className="absolute -bottom-20 z-10">
          <Marquee
            images={duplicatedImages2}
            direction="Left"
            speed={350}
            containerClass="my-8 -rotate-2 bg-[#a60021]"
            imageClass="h-18 w-18"
          />
        </div>
      </div>

      <div className="h-18 z-5 bg-[#1A1A1A] z-"></div>
    </div>
  );
};

export default Hero;
