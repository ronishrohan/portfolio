import React from "react";
import { useRef } from "react";
import { motion, useSpring, useTransform, useScroll } from "framer-motion";

function About() {
  const sectionRef = useRef();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0 1", "1 1"],
  });
  const translateTitle = useSpring(
    useTransform(scrollYProgress, [0, 1], [-400, 0]),
    { damping: 100, stiffness: 500 }
  );
  const translateImage = useSpring(useTransform(scrollYProgress, [0,1], [1000,0]), {damping: 120,mass:1, stiffness: 500})

  return (
    <section ref={sectionRef} className="h-screen w-full overflow-hidden text-white flex p-20">
      <div className="flex flex-row w-full">
        <div className="w-[60%]">
          <motion.h1
            style={{ x: translateTitle }}
            className="animate-[] text-[70px] text-[#e64136] "
          >
            ABOUT ME
          </motion.h1>
          <h2>Hi, I'm Ronish Rohan</h2>
        </div>
        <motion.div style={{x: translateImage}} className="w-[40%] h-full border-2 border-[#e64136]">
          <img className="h-full w-full object-cover brightness-75" src="/images/about-me.webp" alt="" />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
