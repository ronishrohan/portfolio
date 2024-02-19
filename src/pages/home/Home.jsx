import React from "react";
import Intro from "./components/Intro";
import Grid from "./components/Grid";
import About from "./components/About";

function Home() {
  return (
    <main id="test" className=" relative w-full h-full">
      {/* <Grid></Grid> */}

      <Intro></Intro>
      <About></About>
    </main>
  );
}

export default Home;
