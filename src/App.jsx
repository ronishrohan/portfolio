import Home from "./pages/home/Home";

import Noise from "./pages/components/Noise";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "./components/Loading";


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])
  return (
    <ReactLenis root options={{ duration: 2 }}>
      {/* <Noise></Noise> */}
      <Loading loading={loading}></Loading>
      <Home></Home>
    </ReactLenis>
  );
}

export default App;
