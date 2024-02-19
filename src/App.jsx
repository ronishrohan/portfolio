import React from "react";
import Home from "./pages/home/Home";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Noise from "./pages/components/Noise";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 2 });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <>
      <Noise></Noise>
      <Home></Home>
    </>
  );
}

export default App;
