"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
}: {
  src?: string;
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1, isMobile ? 1 : 1.2]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1, isMobile ? 1 : 1.2]
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.2, 0.4], [-28, -28, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0, 1]);

  return (
    <div
      ref={ref}
      className="min-h-[150vh] flex flex-col items-start py-20 md:py-40 justify-start [perspective:800px] transform md:scale-100 scale-75"
    >
      <motion.div
        style={{
          opacity: textOpacity,
        }}
        className="mb-20 text-left pl-4 md:pl-20"
      >
        {title}
      </motion.div>
      
      <div className="relative pl-4 md:pl-20">
        {/* Lid */}
        <Lid
          src={src}
          scaleX={scaleX}
          scaleY={scaleY}
          rotate={rotate}
          translate={translate}
        />
        {/* Base */}
        <div className="h-[22rem] w-[32rem] bg-gray-200 dark:bg-[#272729] rounded-2xl overflow-hidden relative shadow-2xl">
          <div className="h-10 w-full relative">
            <div className="absolute inset-x-0 mx-auto w-[80%] h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
          </div>
          <div className="flex relative">
            <div className="mx-auto w-[80%]">
              <Keypad />
            </div>
          </div>
          <Trackpad />
          <div className="h-2 w-20 mx-auto inset-x-0 absolute bottom-0 bg-gradient-to-t from-[#272729] to-[#050505] rounded-tr-3xl rounded-tl-3xl" />
          {showGradient && (
            <div className="h-40 w-full absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent z-50"></div>
          )}
          {badge && <div className="absolute bottom-4 left-4">{badge}</div>}
        </div>
      </div>
    </div>
  );
};

export const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
  src,
}: {
  scaleX: any;
  scaleY: any;
  rotate: any;
  translate: any;
  src?: string;
}) => {
  return (
    <div className="relative [perspective:800px]">
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative"
      >
        <div
          style={{
            boxShadow: "0px 2px 0px 2px #3b3b3b",
          }}
          className="absolute inset-0 bg-[#010101] rounded-lg"
        />
      </div>
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="h-64 w-[32rem] bg-[#010101] rounded-2xl p-2 absolute inset-0"
      >
        <div className="absolute inset-0 bg-[#272729] rounded-lg" />
        <img
          src={src || "https://picsum.photos/seed/macbook/800/600"}
          alt="macbook screen"
          className="object-cover object-center absolute inset-0 h-full w-full rounded-lg"
        />
      </motion.div>
    </div>
  );
};

export const Trackpad = () => {
  return (
    <div
      className="w-[40%] h-32 mx-auto inset-x-0 absolute bottom-2 bg-[#111111] rounded-xl my-1"
      style={{
        boxShadow: "0px 0px 1px 1px #000000 inset",
      }}
    ></div>
  );
};

export const Keypad = () => {
  return (
    <div className="h-full w-full p-1">
      {/* Function Row */}
      <div className="flex gap-[2px] justify-center">
        {[...Array(13)].map((_, i) => (
          <KybButton key={i} className={i === 0 ? "w-10" : "w-6"} />
        ))}
      </div>

      {/* Number Row */}
      <div className="flex gap-[2px] justify-center mt-[2px]">
        {[...Array(13)].map((_, i) => (
          <KybButton key={i} className={i === 12 ? "w-10" : "w-6"} />
        ))}
      </div>

      {/* Row 3 */}
      <div className="flex gap-[2px] justify-center mt-[2px]">
        <KybButton className="w-10" />
        {[...Array(13)].map((_, i) => (
          <KybButton key={i} className="w-6" />
        ))}
      </div>

      {/* Row 4 */}
      <div className="flex gap-[2px] justify-center mt-[2px]">
        <KybButton className="w-[2.8rem]" />
        {[...Array(11)].map((_, i) => (
          <KybButton key={i} className="w-6" />
        ))}
        <KybButton className="w-[2.85rem]" />
      </div>

      {/* Row 5 */}
      <div className="flex gap-[2px] justify-center mt-[2px]">
        <KybButton className="w-[3.65rem]" />
        {[...Array(10)].map((_, i) => (
          <KybButton key={i} className="w-6" />
        ))}
        <KybButton className="w-[3.65rem]" />
      </div>

      {/* Bottom Row */}
      <div className="flex gap-[2px] justify-center mt-[2px]">
        <KybButton className="w-6" />
        <KybButton className="w-8" />
        <KybButton className="w-8" />
        <KybButton className="w-14" />
        <KybButton className="w-44" />
        <KybButton className="w-14" />
        <KybButton className="w-8" />
        <div className="w-[4.9rem] mt-[2px] h-6 p-[0.5px] flex flex-col justify-end items-center">
          <KybButton className="h-[6px] w-[18px]" />
          <div className="flex">
            <KybButton className="h-[6px] w-[18px]" />
            <KybButton className="h-[6px] w-[18px]" />
            <KybButton className="h-[6px] w-[18px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const KybButton = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "p-[2px] rounded-[4px] bg-[#353535] flex items-center justify-center",
        className
      )}
      style={{
        boxShadow: "0px -0.5px 1px 0 rgba(255,255,255,0.1) inset",
      }}
    >
      <div
        className={cn(
          "h-full w-full rounded-[2.8px] bg-[#050505] flex items-center justify-center",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};