import React from "react";
import { icons } from "../../../util/icons";
import { useLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";
import { useScroll, useTransform, useVelocity, useSpring,motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


function Back() {
  const [shown, setShown] = useState(false);
  const scroll = useScroll()
  const scrollVelocity = useVelocity(scroll.scrollY);
  const scrollMove = useSpring(useTransform(scrollVelocity, [-1000,1000], [-10,10]), {damping: 20})
  useEffect(() => {
    function handleScroll(e) {
        console.log(window.innerHeight)
        if(window.scrollY > window.innerHeight){
            setShown(true)
        }
        else{
            setShown(false)
        } 
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);
  const lenis = useLenis();
  return (
    <AnimatePresence>
      {shown && (
        <motion.button
            initial={{x:"150%"}}
            animate={{x:"0%"}}
            exit={{x: "150%"}}
            style={{y:scrollMove}}
            transition={{type: "spring", damping: 20}}
          onClick={() => lenis.scrollTo("#intro", { duration: 1})}
          className="fixed z-50 top-0 right-0 m-4 bg-black text-white size-12 flex items-center justify-center border-2 border-orange_hover hover:bg-white hover:text-black "
        >
          {icons.back}
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default Back;
