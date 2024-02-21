import Home from "./pages/home/Home";

import Noise from "./pages/components/Noise";
import { ReactLenis } from "@studio-freight/react-lenis";

function App() {
  return (
    <ReactLenis root options={{ duration: 2 }}>
      {/* <Noise></Noise> */}
      <Home></Home>
    </ReactLenis>
  );
}

export default App;
