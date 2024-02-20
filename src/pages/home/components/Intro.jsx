import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";
import Overlay from "./Overlay";
import { icons } from "../../../util/icons";

function Intro() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0 0", "0.5 0"],
  });
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const gridProgress = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, 1.3]),
    { damping: 20 }
  );
  return (
    <>
      <Overlay style={{ scale: gridProgress }}></Overlay>
      <motion.section
        style={{ opacity: scrollProgress }}
        className="relative w-full h-screen flex flex-col z-20 items-center justify-center"
        ref={sectionRef}
      >
        {/* <div className="absolute w-[50%] h-[50%] blur-[250px] bottom-[-60%]"></div> */}
        <div className="w-full flex items-center justify-center relative">
          {new Array(3).fill(null).map((_, index) => {
            return (
              <div
                key={index}
                className={`${
                  index != 0 ? "absolute" : "relative"
                } text-orange_main text-[100px] leading-[80px]`}
              >
                <motion.span
                  style={{
                    WebkitTextStroke: "1px black",
                  }}
                  initial={{
                    fontWeight: 100,
                    color: index == 0 ? "black" : "transparent",
                  }}
                  animate={{
                    fontWeight: 900,
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

        <span className="text-[35px] absolute bottom-20 flex flex-col items-center justify-center ">
          <div className="text-lg mt- text-orange_main">{"[scroll]"}</div>
          <div>{icons.arrowDown}</div>
        </span>
      </motion.section>
    </>
  );
}

export default Intro;
