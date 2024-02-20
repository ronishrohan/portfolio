import React from "react";
import Intro from "./components/Intro";

import About from "./components/About";
import GridBackground from "./components/GridBackground";
import WebsitesWork from "./components/work/WebsitesWork";
import DesignWork from "./components/design-work/DesignWork";
import { useRef } from "react";
function Home() {
  const mainRef = useRef(null);
  return (
    <main ref={mainRef} id="main" className=" relative w-full h-full">
      {/* <Grid></Grid> */}
      <div className="z-0">
        <GridBackground mainRef={mainRef}></GridBackground>
      </div>
      <div className="z-10">
        <Intro></Intro>
        <About></About>
        <WebsitesWork></WebsitesWork>
        <DesignWork></DesignWork>
      </div>
    </main>
  );
}

export default Home;
