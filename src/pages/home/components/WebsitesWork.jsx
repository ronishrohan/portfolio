import React from "react";
import Image from "./work/Image";
import {useScroll, useTransform, motion} from "framer-motion"

function WebsitesWork() {
  return (
    <section className="relative h-screen w-full p-20 flex flex-col ">
      <h1 className="text-[70px] text-orange_main ">WORK</h1>
      <div className="flex">
        <div className="h-full grid grid-cols-3 gap-8 ">
          <Image
            src="https://cdn.discordapp.com/attachments/976406861014257724/1209228174035259495/image.png?ex=65e6287f&is=65d3b37f&hm=680f7c81f213506e449d0a9cde2e5f22b0cb0a97725e3f85c9e28c5e5b8df248&"
            link="https://paypeek.vercel.app/"
            title="Paypeek"
          ></Image>
          <Image
            src="https://cdn.discordapp.com/attachments/976406861014257724/1209228589191659611/image.png?ex=65e628e2&is=65d3b3e2&hm=5cdc7cd7d938aca22c8c7667ea759b34309c6965c25e0887eeeb1751c71f548f&"
            link="https://clcltr.vercel.app/"
            title="a 3d calculator?"
          ></Image>
          <Image
            src="https://cdn.discordapp.com/attachments/976406861014257724/1209228788307853342/image.png?ex=65e62911&is=65d3b411&hm=ae49bab6bddb5cc7474d51c86c6ba1b2428a7af51d5cc3f9e86033edb737c669&"
            link="https://ronishrohan.github.io/weather/"
            title="Weather"
          ></Image>
          <Image
            src="https://cdn.discordapp.com/attachments/976406861014257724/1209228876731912202/image.png?ex=65e62926&is=65d3b426&hm=878ba47ea30d954842b635da8ee70775a159bb4ec6f0bdede32e3d120f2007f1&"
            link="https://reddit-clone-ronishrohan.vercel.app/"
            title="reddit clone made with react"
          ></Image>
          <Image
            src="https://cdn.discordapp.com/attachments/976406861014257724/1209229003987230811/image.png?ex=65e62944&is=65d3b444&hm=4b7f8198bbfcf0a8f0d3b8e1d3fe8290cb14ebe0ed1d7dd2090473ccce273a4e&"
            link="https://ronishrohan.github.io/a-video-calling-website/"
            title="video calling website"
          ></Image>
          <Image
            src="https://cdn.discordapp.com/attachments/976406861014257724/1209229162527858778/image.png?ex=65e6296a&is=65d3b46a&hm=a4d11ffe02ec3b592c835925cbdf94ee46e0c179bc02489efb8c468041409488&"
            link="https://pooortfolio.vercel.app/"
            title="this website"
          ></Image>
        </div>
        <div className="outline outline-1 ml-8 w-1/5 bg-black outline-orange_main">hah</div>
      </div>
    </section>
  );
}

export default WebsitesWork;
