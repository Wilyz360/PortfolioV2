import React from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import "../styles/Home.css";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "A Developer  ",
        "A Gamer  ",
        "A Hacker  ",
        "Or ...  ",
        "A Dancer ???  ",
        " ",
        " ",
        "Of course I am a Software Developer ;)    ",
        " ",
        " ",
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 150,
      backDelay: 100,
      loop: true,
      cursorChar: "_",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <motion.div
      className="container main"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-auto justify-content-center text-center">
        <h1>What I am?</h1>
        <span ref={el}></span>
      </div>
    </motion.div>
  );
};

export default Home;
