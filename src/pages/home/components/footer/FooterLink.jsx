import React from "react";
import { icons } from "../../../../util/icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function FooterLink({ link, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      href={link}
      className="relative h-full flex items-center border-2 border-transparent"
    >
      <div className="flex justify-between h-full items-center p-4 w-full absolute z-10" >
        <span className="">{children}</span>
        <span className="text-[18px]">{icons[children.toLowerCase()]}</span>
      </div>
      <AnimatePresence>
        {hovered && (
          <>
            <motion.div
              initial={{
                clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
              }}
              animate={{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
              exit={{
                clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
              }}
              transition={{
                type: "tween",
                ease: "circInOut",
                delay: 0,
                duration: 0.2
              }}
              className="bg-orange_hover  text-black flex justify-between h-full items-center p-4 w-full absolute z-20"
            >
              <span className="">{children}</span>
              <span className="text-[18px]">
                {icons[children.toLowerCase()]}
              </span>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </a>
  );
}

export default FooterLink;
