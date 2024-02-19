import React from "react";
import Intro from "./components/Intro";
import Grid from "./components/Grid";
import About from "./components/About";
import GridBackground from "./components/GridBackground";
import { useRef } from "react";
function Home() {
  const mainRef = useRef(null);
  return (
    <main ref={mainRef} id="main" className=" relative w-full h-full">
      {/* <Grid></Grid> */}
      <GridBackground mainRef={mainRef} ></GridBackground>
      <Intro></Intro>
      <About></About>
      
    </main>
  );
}

export default Home;
