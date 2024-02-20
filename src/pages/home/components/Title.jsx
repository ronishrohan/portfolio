import React from "react";
import { motion } from "framer-motion";
import { icons } from "../../../util/icons";

function Title({ children, link, title }) {
  return (
    <motion.h1
      initial={{ fontWeight: 100, x: -100 }}
      whileInView={{ fontWeight: 950, x: 0 }}
      whileHover={{fontWeight: 500, transition: {delay: 0}}}
      transition={{
        duration: 1.5,
        type: "spring",
        damping: 20,
      }}
      className="text-[70px] text-orange_main flex items-baseline w-fit"
    >
      {link ? (
        <>
          <a href={link} title={title} className="hover:underline hover:text-orange_hover flex items-start">
            <span>{children}</span>
            <span className="text-[30px] ">{icons.link2}</span>
          </a>
        </>
      ) : (
        <>
          <span className="pointer-events-none">{children}</span>
        </>
      )}
    </motion.h1>
  );
}

export default Title;
