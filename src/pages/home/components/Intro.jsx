import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";
import Grid from "./Grid";

function Intro() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0 0", "0.5 0"],
  });
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const gridProgress = useSpring(useTransform(scrollYProgress, [0,1], [1,1.3]), {damping: 20})
  return (
    <>
      <Grid style={{scale: gridProgress}}></Grid>
      <motion.section
        style={{ opacity: scrollProgress }}
        className="relative w-full h-screen flex flex-col items-center justify-center"
        ref={sectionRef}
      >
        <div className="absolute w-[50%] h-[50%] bg-[#fb4b38b0] blur-[250px] bottom-[-60%]"></div>
        <div className="w-full flex items-center justify-center relative">
          {new Array(3).fill(null).map((_, index) => {
            return (
              <div
                key={index}
                className={`${
                  index != 0 ? "absolute" : "relative"
                } text-[#ff553b] text-[100px] leading-[80px]`}
              >
                <motion.span
                  style={{
                    WebkitTextStroke: "1px #ff553bbc",
                  }}
                  initial={{
                    fontWeight: 100,
                    color: index == 0 ? "#f32707b5" : "transparent",
                  }}
                  animate={{
                    fontWeight: 900,
                    color: index == 2 ? "#f32707b5" : "transparent",
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.12 * index,
                    repeat: Infinity,
                    repeatType: "mirror",
                    repeatDelay: 0,
                    type: "tween",
                    ease: "easeInOut",
                  }}
                >
                  WELCOME
                </motion.span>
              </div>
            );
          })}
        </div>

        <div className="text-lg text-[#ff523b]">{"[scroll to reveal]"}</div>
      </motion.section>
    </>
  );
}

export default Intro;
