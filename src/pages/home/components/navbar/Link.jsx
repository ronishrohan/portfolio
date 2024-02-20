import React from "react";
import { useLenis } from "@studio-freight/react-lenis";

function Link({children, link}) {
  const lenis = useLenis();
  return (
    <a
        href={link}
      onClick={(e) => {
        e.preventDefault()
        lenis.scrollTo(link);
      }}
      className="h-full hover:bg-white hover:text-black flex items-center px-4 outline outline-1 outline-black"
      href="about"
    >
      {children}
    </a>
  );
}

export default Link;
