import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function Loading({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <>
          <motion.div
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed w-full h-full shadow-2xl shadow-[rgba(0,0,0,0.2)] bg-black text-white z-[100] flex items-center justify-center"
          >
            <span className="text-[80px]">
              {"loading".split("").map((letter, index) => {
                console.log(index)
                return (
                  <motion.span
                    initial={{ fontWeight: 100 }}
                    animate={{ fontWeight: 900 }}
                    transition={{repeat: Infinity, repeatType: 'mirror', delay: 0.1*index, duration: 1}}
                    
                    key={index}
                  >
                    {letter}
                  </motion.span>
                );
              })}
            </span>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Loading;
