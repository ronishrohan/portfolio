import React from "react";
import Image from "../work/Image";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";
import Title from "../Title";

function DesignWork() {
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
    <section id="designwork" ref={sectionRef} className="min-h-screen w-full z-20">
      <Title
        link="https://www.instagram.com/ronish.rohan/"
        title="My art account"
      >
        3D WORK
      </Title>
      <div  className="flex flex-col gap-8">
        <motion.div style={{x: slideImagesRight}} className="flex gap-8">
          <Image
            scroll={scrollOut}
            link="https://blenderartists.org/t/andys-room-from-toy-story-3/1351270"
            src="https://res.cloudinary.com/ddrpwfpcj/image/upload/v1712645336/portfolio/lawesgf6zweysgj8adbq.png"
            title="Andys Room"
          ></Image>
          <Image
            scroll={scrollOut}
            link="https://blenderartists.org/t/a-very-clean-setup/1351273"
            src="https://blenderartists.org/uploads/default/optimized/4X/9/1/5/915232aa229043973da854eec1360ace0c1fbcff_2_500x500.jpeg"
            title="dirty setup??"
          ></Image>
          <Image
            scroll={scrollOut}
            link="https://blenderartists.org/t/semi-realistic-table/1311181"
            src="https://blenderartists.org/uploads/default/optimized/4X/f/9/5/f957b1d5895f1b038d78a070035f7e5d7e5bbc73_2_690x388.jpeg"
            title="table"
          ></Image>
          <Image
            scroll={scrollOut}
            link="https://blenderartists.org/t/dusty-room/1319615"
            src="https://blenderartists.org/uploads/default/optimized/4X/c/e/9/ce900c3a1df9268f9be5d2d9c83b85eb9cdd3d7a_2_690x388.jpeg"
            title="Dusty Room"
          ></Image>
        </motion.div>
        <motion.div style={{x: slideImagesLeft}} className="flex gap-8">
          <Image
            scroll={scrollOut}
            link="https://blenderartists.org/t/burnt-out/1414453"
            src="https://blenderartists.org/uploads/default/optimized/4X/8/6/f/86f2ab9e06bb8b1582b04b4877cfbf54dfb9b993_2_688x1000.jpeg"
            title="Burnt out"
          ></Image>
          <Image
            scroll={scrollOut}
            link="https://www.instagram.com/p/CkOEMDTPJY0/"
            src="https://res.cloudinary.com/ddrpwfpcj/image/upload/v1712645199/portfolio/vvndzzkgynxoswhfsoys.jpg"
            title="table again"
          ></Image>
          <Image
            scroll={scrollOut}
            link="https://www.instagram.com/p/CbuZkZEsYu1/"
            src="https://res.cloudinary.com/ddrpwfpcj/image/upload/v1712645200/portfolio/llevoep6vmta7dnadsgz.jpg"
            title="Forest"
          ></Image>
          <Image
            scroll={scrollOut}
            link="https://www.instagram.com/p/CcY_ji_sfx7/"
            src="https://res.cloudinary.com/ddrpwfpcj/image/upload/v1712645200/portfolio/ofbrkbp1ryle0m631gea.jpg"
            title="Room"
          ></Image>
        </motion.div>
      </div>
    </section>
  );
}

export default DesignWork;
