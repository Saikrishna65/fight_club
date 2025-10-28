import Image from "next/image";
import React from "react";

const Cast = () => {
  return (
    <div>
      <div className="w-full h-screen flex items-center bg-[#1A1A1A]">
        <div className="w-full grid grid-cols-5 h-[90%] border-y-0 border-[#a60021]">
          <div className="relative col-span-3 flex items-center justify-center border-r border-[#a60021]">
            <div className="absolute">
              <p className="text-[#e0e0e0] text-5x tracking-wider text-5xl font-[impact]">
                <span className="text-[#a60021]">"</span>Self-
                <span className="text-[#a60021]">Destruction</span> is freedom
                <span className="text-[#a60021]">"</span>
              </p>
            </div>
          </div>
          <div className="relative border-y border-[#a60021] row-span-2">
            <div className="relative flex justify-center pt-3">
              <Image
                className="absolute w-[90%]"
                src="/images/narattor_black&white.jpeg"
                alt="The Narrator"
                width={50}
                height={50}
              />
            </div>
            <div className="absolute bottom-2 right-3 flex flex-col items-end">
              <h1 className="font-extrabold text-[#e0e0e0] font-[impact] tracking-widest">
                <span className="text-[#a60021]">TH</span>E NARRA
                <span className="text-[#a60021]">T</span>TOR
              </h1>
              <p className="text-[#e0e0e0] text-sm font-[impact] tracking-widest">
                PLAYED BY
              </p>
              <h1 className="font-extrabold text-[#e0e0e0] font-[impact] tracking-widest">
                EDWARD NOR<span className="text-[#a60021]">T</span>ON
              </h1>
            </div>
          </div>
          <div className="relative flex items-center justify-center border-l border-[#a60021]">
            <div className="absolute p-3">
              <p className="text-sm text-[#e0e0e0] font-[impact] tracking-wider">
                <span className="text-[#a60021]">"</span>It’s{" "}
                <span className="text-[#a60021]">impossible</span> for me to
                imagine that people don’t understand that{" "}
                <span className="text-[#a60021]">Tyler Durden</span> is a
                <span className="text-[#a60021]"> negative</span> influence. …
                People who can’t{" "}
                <span className="text-[#a60021]">understand</span> that, I don’t
                know how to respond and I{" "}
                <span className="text-[#a60021]">don't</span> know how to{" "}
                <span className="text-[#a60021]">help</span> them.
                <span className="text-[#a60021]">"</span> —{" "}
                <span className="text-[#a60021] font-[mons]">
                  DAVID FINCHER
                </span>
              </p>
            </div>
          </div>
          <div className="relative border-y border-r border-[#a60021] row-span-2">
            <div className="relative flex justify-center pt-3">
              <Image
                className="absolute w-[90%]"
                src="/images/pitt_b&w.jpeg"
                alt="Brad Pitt"
                width={50}
                height={50}
              />
            </div>
            <div className="absolute bottom-2 right-3 flex flex-col items-end">
              <h1 className="font-extrabold text-[#e0e0e0] font-[impact] tracking-widest">
                <span className="text-[#a60021]">T</span>YLER D
                <span className="text-[#a60021]">U</span>RDEN
              </h1>
              <p className="text-[#e0e0e0] text-sm font-[impact] tracking-widest">
                PLAYED BY
              </p>
              <h1 className="font-extrabold text-[#e0e0e0] font-[impact] tracking-widest">
                BRAD P<span className="text-[#a60021]">ITT</span>
              </h1>
            </div>
          </div>
          <div className="relative flex items-center justify-center border-y border-r border-[#a60021] col-span-2">
            <div className="absolute">
              <p className="text-xl tracking-wider text-[#e0e0e0] font-[impact]">
                D<span className="text-[#a60021]">I</span>RE
                <span className="text-[#a60021]">CT</span>ED BY
              </p>
              <h1 className="text-7xl tracking-wide text-[#e0e0e0] font-[impact]">
                DAV<span className="text-[#a60021]">I</span>D{" "}
                <span className="text-[#a60021]">FI</span>N
                <span className="text-[#a60021]">CH</span>ER
              </h1>
            </div>
          </div>
          <div className="relative border border-r-0 border-[#a60021] row-span-2">
            <div className="relative flex justify-center pt-3">
              <Image
                className="absolute w-[90%]"
                src="/images/girl_b&w.jpeg"
                alt="Marla Singer"
                width={50}
                height={50}
              />
            </div>
            <div className="absolute bottom-2 right-3 flex flex-col items-end">
              <h1 className="font-extrabold text-[#e0e0e0] font-[impact] tracking-widest">
                MARLA S<span className="text-[#a60021]">I</span>N
                <span className="text-[#a60021]">G</span>ER
              </h1>
              <p className="text-[#e0e0e0] text-sm font-[impact] tracking-widest">
                PLAYED BY
              </p>
              <h1 className="font-extrabold text-[#e0e0e0] font-[impact] tracking-widest">
                <span className="text-[#a60021]">H</span>ELENA BONHAM{" "}
                <span className="text-[#a60021]">C</span>AR
                <span className="text-[#a60021]">T</span>ER
              </h1>
            </div>
          </div>
          <div className="relative col-span-3 flex items-center justify-center">
            <div className="absolute px-9 pt-5">
              <p className="text-[#e0e0e0] text-5x tracking-wider text-5xl font-[impact]">
                <span className="text-[#a60021]">"</span>You are not your{" "}
                <span className="text-[#a60021]">job</span>, you are{" "}
                <span className="text-[#a60021]">not</span> how much{" "}
                <span className="text-[#a60021]">money</span> you have in the
                bank.
                <span className="text-[#a60021]">"</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cast;
