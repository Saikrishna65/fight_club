import React, { useState } from "react";
import GlitchEffect from "./GlitchEffect";

const End = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="w-full h-screen bg-[#1A1A1A] flex flex-col items-center justify-center px-20 text-center">
      <h1 className="text-7xl text-[#e0e0e0] font-[impact] transition-all duration-700">
        {revealed ? (
          <>
            <span className="text-[#a60021]">"</span>You think you’re{" "}
            <span className="text-[#a60021]">scrolling</span> a site — but it’s{" "}
            <span className="text-[#a60021]">scrolling</span> through your
            <span className="text-[#a60021]"> life</span>.
            <span className="text-[#a60021]">"</span>
          </>
        ) : (
          <>
            <span className="text-[#a60021]">"</span>You’re not wasting{" "}
            <span className="text-[#a60021]">time</span> — you’re gaining{" "}
            <span className="text-[#a60021]">moments</span> that matter.
            <span className="text-[#a60021]">"</span>
          </>
        )}
      </h1>
      <div className="flex items-center justify-center gap-5 mt-10">
        {!revealed && (
          <div className="text-2xl text-[#e0e0e0] font-[mons]">
            Do you want to know what’s{" "}
            <span className="text-[#a60021] font-extrabold">
              <GlitchEffect>REAL?</GlitchEffect>
            </span>{" "}
            Then
          </div>
        )}
        <button
          onClick={() => setRevealed(!revealed)}
          className="relative px-6 py-3 bg-[#a60021] text-[#e0e0e0] font-bold uppercase rounded-full cursor-pointer tracking-wider"
        >
          <GlitchEffect>
            {revealed ? "Hide Reality" : "Know Reality"}
          </GlitchEffect>
        </button>
      </div>
    </div>
  );
};

export default End;
