import React from "react";
import { motion } from "framer-motion";

function Title({ children, translate }) {
  return (
    <h1 className="text-[70px] font-black ">
      <div className="overflow-hidden">
        <motion.div
          // initial={{ y: "100%" }}
          // whileInView={{ y: "0%" }}
          style={{y:translate}}
          transition={{ delay: 0.2, type: "spring", damping: 20 }}
        >
          {children}
        </motion.div>
      </div>
    </h1>
  );
}

export default Title;
