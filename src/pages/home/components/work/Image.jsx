import React from "react";
import { useState } from "react";
import { motion, AnimatePresence, useTransform } from "framer-motion";

function Image({ src, link, title, scroll }) {
  const width = useTransform(scroll.scrollYProgress, [0, 1], [0, 400]);
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div>
      <motion.a
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-full h-[200px] overflow-hidden flex items-center justify-between bg-black outline outline-1 outline-orange_main hover:outline-orange-50"
        href={link}
      >
        <motion.img
          src={src}
          className="object-cover w-full h-full "
          alt="image"
        />
        <AnimatePresence>
          {hovered && (
            <>
              <motion.div
                initial={{ y: "100%", borderRadius: "50%" }}
                animate={{ y: "0%", borderRadius: "0%" }}
                exit={{ y: "100%", borderRadius: "50%" }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 50,
                }}
                className="bg-black absolute text-white bottom-0 w-full p-4"
              >
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 40,
                    delay: 0.05,
                  }}
                >
                  {title}
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.a>
    </motion.div>
  );
}

export default Image;
