import React, { useRef, useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import GlitchEffect from "./GlitchEffect";

interface MarqueeImageItem {
  src: string;
  alt: string;
}

interface MarqueeProps {
  images: MarqueeImageItem[];
  direction?: "Left" | "Right";
  containerClass?: string;
  imageClass?: string;
  speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({
  images = [],
  direction = "Left",
  containerClass = "",
  imageClass = "",
  speed = 100,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      const trackWidth = trackRef.current.scrollWidth / 2;
      setDuration(trackWidth / speed);
    }
  }, [images, speed]);

  return (
    <div
      className={clsx(
        "relative flex w-full overflow-hidden select-none",
        containerClass
      )}
      aria-hidden="true"
      role="presentation"
    >
      <div
        ref={trackRef}
        className={clsx(
          "marquee-track flex items-center whitespace-nowrap flex-nowrap",
          direction === "Right" && "[animation-direction:reverse]"
        )}
        style={{ animationDuration: `${duration}s` }}
      >
        {[...Array(2)].map((_, idx) =>
          images.map((item, i) => (
            <span
              key={`${idx}-${i}`}
              className="flex items-center mx-3 shrink-0"
            >
              <GlitchEffect>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={48}
                  height={48}
                  className={clsx("object-contain", imageClass)}
                />
              </GlitchEffect>
            </span>
          ))
        )}
      </div>
    </div>
  );
};

export default Marquee;
