import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {useScroll, useSpring, useTransform, motion} from "framer-motion"
function GridBackground({mainRef}) {
  const [size, setSize] = useState(window.innerWidth / 30);
  const scroll = useScroll()
  const scrollProgress = useSpring(useTransform(scroll.scrollYProgress, [0,1], [100,-100]), {damping:50, stiffness:500})
  
  useEffect(() => {
    function changeSize() {
      setSize(window.innerWidth / 30);
    }

    window.addEventListener("resize", changeSize);
    return () => window.removeEventListener("resize", changeSize);
  }, []);

  return (
    <div className="fixed w-full h-full z-0 top-0  flex items-center justify-center">
      <motion.div style={{y: scrollProgress,x:scrollProgress, scale: 2}} className="w-full h-full z-0 grid scale-[2] grid-cols-[repeat(30,1fr)]">
        {new Array(30 * Math.floor(window.innerHeight / size)-20)
          .fill(null)
          .map((_, index) => {
            return (
              <div
                key={index}
                style={{ width: size, height: "100%" }}
                className="border-[1px] border-orange_grid"
              ></div>
            );
          })}
      </motion.div>
    </div>
  );
}

export default GridBackground;
