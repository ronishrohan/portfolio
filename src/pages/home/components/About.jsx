import React from "react";
import { useRef } from "react";
import { motion, useSpring, useTransform, useScroll } from "framer-motion";

function About() {
  const sectionRef = useRef();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0 1", "0.75 1"],
  });
  
  const translateTitle = useSpring(
    useTransform(scrollYProgress, [0, 1], [-400, 0]),
    { damping: 100, stiffness: 500 }
  );
  const translateImage = useSpring(
    useTransform(scrollYProgress, [0, 1], [1000, 0]),
    { damping: 120, mass: 1, stiffness: 500 }
  );
  const translateWords = useSpring(
    useTransform(scrollYProgress, [0, 1], [100, 0]),
    { damping: 20 }
  );
  const scroll2 = useScroll({
    target: sectionRef,
    offset: ["0 1", "1 0"]
  })
  const slideImage=  useTransform(scroll2.scrollYProgress, [0,1], [-100, 100]);

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full overflow-hidden z-20 text-white flex p-20"
    >
      <div className="flex flex-row w-full z-20">
        <div className="w-[60%] text-[24px] flex flex-col gap-3">
          <motion.h1
            style={{ x: translateTitle }}
            className="animate-[] text-[70px] text-orange_main "
          >
            ABOUT ME
          </motion.h1>
          <h2 className="text-orange_dim overflow-hidden leading-[24px]">
            <motion.div style={{ y: translateWords }}>
              Hi, I'm Ronish Rohan
            </motion.div>
          </h2>
          <h1 className="text-orange_dim overflow-hidden leading-[18px] text-[18px]">
            <motion.div style={{ y: translateWords }}>
              i make websites
            </motion.div>
            <motion.div style={{ y: translateWords }}>
              [most of them work]
            </motion.div>
          </h1>
        </div>
        <motion.div
          style={{ x: translateImage }}
          className="relative w-[40%] h-full border-2 border-[#e64136] flex items-center justify-center overflow-hidden"
        >
          <motion.img
            style={{y:slideImage}}
            className="absolute w-[200vw] h-[200vh] object-cover brightness-75"
            src="/images/about-me.webp"
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
