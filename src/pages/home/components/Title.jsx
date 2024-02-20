import React from "react";
import { motion } from "framer-motion";
import { icons } from "../../../util/icons";

function Title({ children, link, title }) {
  return (
    <motion.h1
      initial={{ fontWeight: 100, x: "-100%" }}
      whileInView={{ fontWeight: 900, x: "0%" }}
      transition={{
        delay: 0.05,
        duration: 1.5,
        type: "spring",
        stiffness: 500,
        damping: 90,
      }}
      className="text-[70px] text-orange_main flex items-baseline"
    >
      {link ? (
        <>
          <a href={link} title={title} className="hover:underline hover:text-orange_hover flex">
            <span>{children}</span>
            <span className="text-[30px] mb-auto">{icons.link2}</span>
          </a>
        </>
      ) : (
        <>
          <span>{children}</span>
        </>
      )}
    </motion.h1>
  );
}

export default Title;
