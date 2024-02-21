import React from "react";
import FooterLink from "./FooterLink";
import { useState } from "react";
import { useEffect } from "react";
import {motion} from "framer-motion"
function FooterLinks({translate}) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState([]);
  useEffect(() => {
    const timeout = setTimeout(() => setDate(new Date()), 1000);
    const hours = date.getUTCHours() + 5;
    const minutes =
      date.getUTCMinutes() + 30 > 60
        ? date.getUTCMinutes() + 30 - 60
        : date.getUTCMinutes() + 30;
    setTime([hours, minutes]);
    return () => clearTimeout(timeout);
  }, [date]);
  return (
    <motion.div style={{y: translate}} className="flex flex-col">
      <FooterLink link="https://discordapp.com/users/769140296939470859">
        Discord
      </FooterLink>
      <FooterLink link="https://instagram.com/ronish.rohan">
        Instagram
      </FooterLink>
      <FooterLink link="https://twitter.com/ronishroh">Twitter</FooterLink>
      <FooterLink link="mailto:ronish.rohan@gmail.com">Email</FooterLink>
      <div className="mt-2 ml-4">{`${time[0]>12 ? time[0]-12 : time[0]}:${time[1]} ${
        time[0] > 12 ? "PM" : "AM"
      } UTC+5:30`}</div>
    </motion.div>
  );
}

export default FooterLinks;
