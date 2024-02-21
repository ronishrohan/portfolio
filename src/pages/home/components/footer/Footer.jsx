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
    offset: ["0 1", "1 1"]
  })
  const springInItems = useSpring(scrollInItems.scrollYProgress, {
    damping: 20
  })
  const springIn = useSpring(scrollIn.scrollYProgress, {
    damping: 50,
    stiffness: 500,
  });
  const roundIn = useTransform(springIn, [0, 1], ["50%", "0%"]);
  const translateIn = useTransform(springIn, [0, 1], [200, 0]);
  const translateItems = useTransform(springInItems,[0.5,1], ["100%", "0%"])
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
      <div  className="w-full h-full grid grid-cols-[1fr_1fr] gap-8  relative overflow-hidden">
        <FooterLinks translate={translateItems}></FooterLinks>

        <motion.div style={{x:translateItems}} className="flex flex-col overflow-hidden h-full w-full gap-2">
          <div className="overflow-hidden flex align-top border-4 border-orange_hover">
            <img
              className="top-0 h-auto w-full object-cover"
              src="https://cdn.discordapp.com/attachments/976406861014257724/1209755032916860970/IMG_20230428_183208.jpg?ex=65e8132c&is=65d59e2c&hm=e465defb61e9f08ebd06de49584aa30ba39e192e6f3c851b15565efe67028a5c&"
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
