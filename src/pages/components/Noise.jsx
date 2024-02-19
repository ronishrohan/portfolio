import { useEffect } from "react";
import { useState } from "react";

function Noise() {
    const [seed, setSeed] = useState(0);
    useEffect(() => {
        const timeout = setTimeout(() => setSeed(prev=>prev+1), 10)
        return () => clearTimeout(timeout)
    },[seed])
  return (
    <svg className="fixed z-50 w-full h-full mix-blend-color-dodge opacity-30 pointer-events-none">
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.5"
          numOctaves="5"
          stitchTiles="stitch"
          seed={seed}
        ></feTurbulence>
      </filter>
      
      <rect className="w-full h-full" filter="url(#noise)" ></rect>
    </svg>
  );
}

export default Noise;
