import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Title from "./Title";
import { icons } from "../../../../util/icons";
import FooterLinks from "./FooterLinks";

function Footer() {
  const sectionRef = useRef(null);
  const scrollIn = useScroll({
    target: sectionRef,
    offset: ["0.2 1", "0.8 1"],
  });
  const scrollInItems = useScroll({
    target: sectionRef,
    offset: ["0 1", "1 1"],
  });
  const springInItems = useSpring(scrollInItems.scrollYProgress, {
    damping: 20,
  });
  const springIn = useSpring(scrollIn.scrollYProgress, {
    damping: 50,
    stiffness: 500,
  });
  const roundIn = useTransform(springIn, [0, 1], ["50%", "0%"]);
  const translateIn = useTransform(springIn, [0, 1], [200, 0]);
  const translateItems = useTransform(springInItems, [0.5, 1], ["100%", "0%"]);
  return (
    <motion.footer
      style={{
        borderTopLeftRadius: roundIn,
        borderTopRightRadius: roundIn,
        y: translateIn,
      }}
      id="contact"
      ref={sectionRef}
      className="w-full h-screen bg-black text-white flex flex-col shadow-[0px_0px_60px_rgba(0,0,0,0.2)]"
    >
      <Title translate={translateItems}>CONTACT</Title>
      <div className="w-full h-full grid grid-cols-[1fr_1fr] gap-8  relative overflow-hidden">
        <FooterLinks translate={translateItems}></FooterLinks>

        <motion.div
          style={{ x: translateItems }}
          className="flex flex-col overflow-hidden h-full w-full gap-2"
        >
          <div className="overflow-hidden flex border-4 border-orange_hover">
            <motion.img
              initial={{ y: "-25%", scale: 1.2 }}
              whileHover={{ y: "-50%", scale: 1 }}
              transition={{ type: "spring", damping: 50 }}
              className="top-0 w-full h-fit "
              src="https://res.cloudinary.com/ddrpwfpcj/image/upload/v1712645199/portfolio/iwy7sjjnp6xlfmme2fkl.jpg"
              alt=""
            />
          </div>
          <div className="flex gap-2 items-center">
            <span>{icons.location}</span>
            <span>Bengaluru, Karnataka, India</span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
