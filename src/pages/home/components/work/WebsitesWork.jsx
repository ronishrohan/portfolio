import React from "react";
import Image from "./Image";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";
import Title from "../Title";
function WebsitesWork() {
  const sectionRef = useRef(null);
  const scroll = useScroll({ target: sectionRef, offset: ["0 1", "0.75 1"] });
  const scrollOut = useScroll({
    target: sectionRef,
    offset: ["0.25 0", "1 0"],
  });
  const springOut = useSpring(scroll.scrollYProgress, { damping: 25 });
  const slideImagesLeft = useTransform(springOut, [0, 1], ["-150%", "0%"]);
  const slideImagesRight = useTransform(springOut, [0, 1], ["150%", "0%"]);
  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative h-fit min-h-screen w-full p-20 flex flex-col "
    >
      <Title link="https://github.com/ronishrohan" title="My github">
        MY WORK
      </Title>
      <motion.div className="flex">
        <div className="h-full flex flex-col gap-8 ">
          <motion.div style={{ x: slideImagesLeft }} className="flex gap-8">
            <Image
              scroll={scrollOut}
              src="https://res.cloudinary.com/ddrpwfpcj/image/upload/v1712645196/portfolio/epvuhkh6fgmiqgmcgote.png"
              link="https://paypeek.vercel.app/"
              title="Paypeek"
            ></Image>
            <Image
              scroll={scrollOut}
              src="https://res.cloudinary.com/ddrpwfpcj/image/upload/v1712645196/portfolio/z3yzmocqsodu4wn0lidz.png"
              link="https://clcltr.vercel.app/"
              title="a 3d calculator?"
            ></Image>
            <Image
              scroll={scrollOut}
              src="https://res.cloudinary.com/ddrpwfpcj/image/upload/v1712645198/portfolio/wrgqkzqfzutau6vu9obj.png"
              link="https://ronishrohan.github.io/weather/"
              title="Weather"
            ></Image>
            <Image
              scroll={scrollOut}
              src="https://res.cloudinary.com/ddrpwfpcj/image/upload/v1712645565/portfolio/cjrbcwihicwj8m3ljipx.png"
              link="https://reddit-clone-ronishrohan.vercel.app/"
              title="reddit clone made with react"
            ></Image>
          </motion.div>
          <motion.div style={{ x: slideImagesRight }} className="flex gap-8">
            <Image
              scroll={scrollOut}
              src="https://res.cloudinary.com/ddrpwfpcj/image/upload/v1712645199/portfolio/aafxfgykteky2yjkpkfv.png"
              link="https://ronishrohan.github.io/a-video-calling-website/"
              title="video calling website"
            ></Image>
            <Image
              scroll={scrollOut}
              src="https://res.cloudinary.com/ddrpwfpcj/image/upload/v1712645629/portfolio/ffarnhwkllyj1opxwvvg.png"
              link="https://pooortfolio.vercel.app/"
              title="this website"
            ></Image>
            <Image
              scroll={scrollOut}
              src="https://res.cloudinary.com/ddrpwfpcj/image/upload/v1712645692/portfolio/n8tr1xe9dmwqlbdp6tdj.png"
              link="https://wafl.vercel.app/"
              title="Waffle - A twitter clone"
            ></Image>
            <Image
              scroll={scrollOut}
              src="https://res.cloudinary.com/ddrpwfpcj/image/upload/v1712645769/portfolio/zky083dtebarblrla6hh.png"
              link="https://ronish.vercel.app/"
              title="another portfolio website"
            ></Image>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default WebsitesWork;
