import Home from "./pages/home/Home";

import Noise from "./pages/components/Noise";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useState } from "react";
import { useLayoutEffect } from "react";
import Loading from "./components/Loading";

function App() {
  
  const [loading, setLoading] = useState(true);
  useLayoutEffect(() => {
    setTimeout(() => {
      setLoading(false);
      window.scrollTo(0,0)
    }, 2000);
  }, []);
  return (
    <ReactLenis root  options={{ duration: 2 }}>
      {/* <Noise></Noise> */}
      <Loading loading={loading}></Loading>
      <Home></Home>
    </ReactLenis>
  );
}

export default App;
