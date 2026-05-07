
"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipBack,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconSearch,
  IconVolume,
  IconVolume2,
  IconVolume3,
} from "@tabler/icons-react";

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
    offset: ["start start", "end start"],
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
    [1.2, isMobile ? 1 : 1.5]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1 : 1.5]
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="min-h-[200vh]  flex flex-col items-center py-0 md:py-80 justify-start flex-shrink-0 [perspective:800px] transform md:scale-100 scale-[0.35] sm:scale-50"
    >
      <motion.h2
        style={{
          translateY: textTransform,
          opacity: textOpacity,
        }}
        className="text-[#6441a5] dark:text-[#6441a5] text-3xl font-bold mb-20 text-center"
      >
        {title || (
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        )}
      </motion.h2>
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
        {/* Border Junction */}
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
          <div className="h-40 w-full absolute bottom-0 inset-x-0 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent z-50"></div>
        )}
        {badge && <div className="absolute bottom-4 left-4">{badge}</div>}
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
          className="object-cover object-left-top absolute inset-0 h-full w-full rounded-lg"
        />
      </motion.div>
    </div>
  );
};

export const Trackpad = () => {
  return (
    <div
      className="w-[40%] h-32 mx-auto inset-x-0 absolute bottom-2  bg-[#111111] rounded-xl my-1"
      style={{
        boxShadow: "0px 0px 1px 1px #000000 inset",
      }}
    ></div>
  );
};

export const Keypad = () => {
  return (
    <div className="h-full w-full p-1">
      {/* First Row */}
      <div className="flex gap-[2px] justify-center">
        <KybButton className="w-10" />
        <KybButton>
          <IconBrightnessDown className="h-[6px] w-[6px]" />
        </KybButton>
        <KybButton>
          <IconBrightnessUp className="h-[6px] w-[6px]" />
        </KybButton>
        <KybButton>
          <IconSearch className="h-[6px] w-[6px]" />
        </KybButton>
        <KybButton>
          <IconMicrophone className="h-[6px] w-[6px]" />
        </KybButton>
        <KybButton>
          <IconMoon className="h-[6px] w-[6px]" />
        </KybButton>
        <KybButton>
          <IconPlayerTrackPrev className="h-[6px] w-[6px]" />
        </KybButton>
        <KybButton>
          <IconPlayerSkipBack className="h-[6px] w-[6px]" />
        </KybButton>
        <KybButton>
          <IconPlayerSkipForward className="h-[6px] w-[6px]" />
        </KybButton>
        <KybButton>
          <IconPlayerTrackNext className="h-[6px] w-[6px]" />
        </KybButton>
        <KybButton>
          <IconVolume3 className="h-[6px] w-[6px]" />
        </KybButton>
        <KybButton>
          <IconVolume2 className="h-[6px] w-[6px]" />
        </KybButton>
        <KybButton>
          <IconVolume className="h-[6px] w-[6px]" />
        </KybButton>
      </div>

      {/* Second Row */}
      <div className="flex gap-[2px] justify-center mt-[2px]">
        <KybButton>
          <span className="text-[5px]">~</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">1</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">2</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">3</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">4</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">5</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">6</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">7</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">8</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">9</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">0</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">-</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">+</span>
        </KybButton>
        <KybButton className="w-10">
          <span className="text-[5px]">delete</span>
        </KybButton>
      </div>

      {/* Third Row */}
      <div className="flex gap-[2px] justify-center mt-[2px]">
        <KybButton className="w-10">
          <span className="text-[5px]">tab</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">Q</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">W</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">E</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">R</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">T</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">Y</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">U</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">I</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">O</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">P</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">[</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">]</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">\\</span>
        </KybButton>
      </div>

      {/* Fourth Row */}
      <div className="flex gap-[2px] justify-center mt-[2px]">
        <KybButton className="w-[2.8rem]">
          <span className="text-[5px]">caps lock</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">A</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">S</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">D</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">F</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">G</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">H</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">J</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">K</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">L</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">;</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">'</span>
        </KybButton>
        <KybButton className="w-[2.85rem]">
          <span className="text-[5px]">return</span>
        </KybButton>
      </div>

      {/* Fifth Row */}
      <div className="flex gap-[2px] justify-center mt-[2px]">
        <KybButton className="w-[3.65rem]">
          <span className="text-[5px]">shift</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">Z</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">X</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">C</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">V</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">B</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">N</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">M</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">,</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">.</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">/</span>
        </KybButton>
        <KybButton className="w-[3.65rem]">
          <span className="text-[5px]">shift</span>
        </KybButton>
      </div>

      {/* Sixth Row */}
      <div className="flex gap-[2px] justify-center mt-[2px]">
        <KybButton>
          <span className="text-[5px]">fn</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">control</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">option</span>
        </KybButton>
        <KybButton className="w-14">
          <span className="text-[5px]">command</span>
        </KybButton>
        <KybButton className="w-44"></KybButton>
        <KybButton className="w-14">
          <span className="text-[5px]">command</span>
        </KybButton>
        <KybButton>
          <span className="text-[5px]">option</span>
        </KybButton>
        <div className="w-[4.9rem] mt-[2px] h-6 p-[0.5px] flex flex-col justify-end items-center">
          <KybButton className="h-[6px] w-[18px]">
            <IconCaretUpFilled className="h-[6px] w-[6px]" />
          </KybButton>
          <div className="flex">
            <KybButton className="h-[6px] w-[18px]">
              <IconCaretRightFilled className="h-[6px] w-[6px] rotate-180" />
            </KybButton>
            <KybButton className="h-[6px] w-[18px]">
              <IconCaretUpFilled className="h-[6px] w-[6px] rotate-180" />
            </KybButton>
            <KybButton className="h-[6px] w-[18px]">
              <IconCaretRightFilled className="h-[6px] w-[6px]" />
            </KybButton>
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
        boxShadow:
          "0px -0.5px 2px 0 blue inset, 0px 0.5px 1px 0 blue inset",
      }}
    >
      <div
        className={cn(
          "h-full w-full rounded-[2.8px] bg-[#050505] flex items-center justify-center",
          className
        )}
        style={{
          boxShadow: "0px 0.5px 1px 0px rgba(255,255,255,0.2) inset",
        }}
      >
        {children}
      </div>
    </div>
  );
};

const IconBrightnessDown = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M12 5l0 .01" />
      <path d="M17 7l0 .01" />
      <path d="M19 12l0 .01" />
      <path d="M17 17l0 .01" />
      <path d="M12 19l0 .01" />
      <path d="M7 17l0 .01" />
      <path d="M5 12l0 .01" />
      <path d="M7 7l0 .01" />
    </svg>
  );
};

const IconBrightnessUp = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M12 5l0 3" />
      <path d="M17 7l-2 2" />
      <path d="M19 12l-3 0" />
      <path d="M17 17l-2 -2" />
      <path d="M12 19l0 -3" />
      <path d="M7 17l2 -2" />
      <path d="M5 12l3 0" />
      <path d="M7 7l2 -2" />
    </svg>
  );
};

const IconSearch = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M21 21l-6 -6" />
    </svg>
  );
};

const IconMicrophone = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z" />
      <path d="M5 10a7 7 0 0 0 14 0" />
      <path d="M8 21l8 0" />
      <path d="M12 17l0 4" />
    </svg>
  );
};

const IconMoon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
    </svg>
  );
};

const IconPlayerTrackPrev = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M21 5v14l-8 -7z" />
      <path d="M10 5v14l-8 -7z" />
    </svg>
  );
};

const IconPlayerSkipBack = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 5v14l-12 -7z" />
      <path d="M4 5l0 14" />
    </svg>
  );
};

const IconPlayerSkipForward = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 5v14l12 -7z" />
      <path d="M20 5l0 14" />
    </svg>
  );
};

const IconPlayerTrackNext = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 5v14l8 -7z" />
      <path d="M14 5v14l8 -7z" />
    </svg>
  );
};

const IconVolume3 = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
      <path d="M16 9l6 6m0 -6l-6 6" />
    </svg>
  );
};

const IconVolume2 = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 8a5 5 0 0 1 0 8" />
      <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
    </svg>
  );
};

const IconVolume = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 8a5 5 0 0 1 0 8" />
      <path d="M17.7 5a9 9 0 0 1 0 14" />
      <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
    </svg>
  );
};

const IconCaretUpFilled = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11.293 7.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 -1.414 1.414l-5.293 -5.293l-5.293 5.293a1 1 0 0 1 -1.414 -1.414l6 -6z" />
    </svg>
  );
};

const IconCaretRightFilled = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 6l6 6l-6 6" />
    </svg>
  );
};
