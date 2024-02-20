import React from "react";
import Image from "../work/Image";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";


function DesignWork() {
    const sectionRef = useRef(null)
    const scrollOut = useScroll({target: sectionRef, offset: ["0.25 0", "1 0"]})
  return (
    <section ref={sectionRef} className="h-screen w-full z-20">
      <h1 className="text-[70px] text-orange_main font-black">3D WORK</h1>
      <div className="flex flex-col gap-8">
        <div className="flex gap-8" >
            <Image scroll={scrollOut} link="https://blenderartists.org/t/andys-room-from-toy-story-3/1351270" src="https://blenderartists.org/uploads/default/optimized/4X/5/b/5/5b56f236bc9d9dae46a2c6c282ca9a83b6cd20bf_2_690x390.jpeg" title="Andys Room"  ></Image>
            <Image scroll={scrollOut} link="https://blenderartists.org/t/a-very-clean-setup/1351273" src="https://blenderartists.org/uploads/default/optimized/4X/9/1/5/915232aa229043973da854eec1360ace0c1fbcff_2_500x500.jpeg" title="dirty setup??"  ></Image>
            <Image scroll={scrollOut} link="https://blenderartists.org/t/semi-realistic-table/1311181" src="https://blenderartists.org/uploads/default/optimized/4X/f/9/5/f957b1d5895f1b038d78a070035f7e5d7e5bbc73_2_690x388.jpeg" title="table"  ></Image>
            <Image scroll={scrollOut} link="https://blenderartists.org/t/dusty-room/1319615" src="https://blenderartists.org/uploads/default/optimized/4X/c/e/9/ce900c3a1df9268f9be5d2d9c83b85eb9cdd3d7a_2_690x388.jpeg" title="Dusty Room"  ></Image>
        </div>
        <div className="flex gap-8" >
            <Image scroll={scrollOut} link="https://blenderartists.org/t/burnt-out/1414453" src="https://blenderartists.org/uploads/default/optimized/4X/8/6/f/86f2ab9e06bb8b1582b04b4877cfbf54dfb9b993_2_688x1000.jpeg" title="Burnt out"  ></Image>
            <Image scroll={scrollOut} link="https://www.instagram.com/p/CkOEMDTPJY0/" src="https://cdn.discordapp.com/attachments/976406861014257724/1209566296082088018/aaaaaaaaaaaaaa.jpeg?ex=65e76365&is=65d4ee65&hm=5d21b5dacc71462aa527846112cebfd108126193d5583e95c5c15c67fae532b3&" title="table again"  ></Image>
            <Image scroll={scrollOut} link="https://www.instagram.com/p/CbuZkZEsYu1/" src="https://cdn.discordapp.com/attachments/976406861014257724/1209566650676944936/277545566_550707416266327_8340572757871327529_n.jpg?ex=65e763ba&is=65d4eeba&hm=af643a2daea1464d02225cd2f047a493afb3c7645735810c2bef39dc5141e8c4&" title="Forest"  ></Image>
            <Image scroll={scrollOut} link="https://www.instagram.com/p/CcY_ji_sfx7/" src="https://cdn.discordapp.com/attachments/976406861014257724/1209567355768799292/278410238_484622986679972_2098150442088305132_n.jpg?ex=65e76462&is=65d4ef62&hm=20a4b070af83693722eb39e59b0ee88103a44485fccb2f663a26406fd3b2c951&" title="Room"  ></Image>
        </div>
      </div>
    </section>
  );
}

export default DesignWork;
