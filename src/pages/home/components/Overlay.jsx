import React from "react";
import { motion } from "framer-motion";
import { useLenis } from "@studio-freight/react-lenis";
import { icons } from "../../../util/icons";
import Link from "./navbar/Link";

function Overlay({ ...others }) {
  const lenis = useLenis();
  return (
    <motion.div
      {...others}
      className="fixed z-50 w-full h-full p-5 pointer-events-none"
    >
      <div className="w-full h-full border-2 border-black">
        <nav className="h-8 bg-black flex justify-between items-center text-center border-b-2 border-b-black  text-white pointer-events-auto">
          <div className="ml-4 mt-[2px] flex gap-2">
            <span className="text-orange_hover">{icons.logo}</span>
            <span>RONISH ROHAN</span>
          </div>
          <div className="flex text-[14px] h-full">
            <Link link="#about" >About</Link>
            <Link link="#work" >My work</Link>
            <Link link="#designwork" >3d work</Link>
            <Link link="#contact" >Contact</Link>
          </div>
        </nav>
      </div>
    </motion.div>
  );
}

export default Overlay;
