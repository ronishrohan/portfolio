import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Image({ src, link, title }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full h-[200px] overflow-hidden flex items-center justify-between bg-black outline outline-1 outline-orange_main hover:outline-orange-50"
      href={link}
    >
      <img src={src} className="object-cover w-full h-full " alt="image" />
      <AnimatePresence>
        {hovered && (
          <>
            <motion.div
              initial={{ y: "100%", borderRadius:"50%" }}
              animate={{ y: "0%", borderRadius:"0%" }}
              exit={{ y: "100%", borderRadius:"50%" }}
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
                transition={{ type: "spring", stiffness: 400, damping: 40, delay: 0.05 }}
              >
                {title}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </a>
  );
}

export default Image;
