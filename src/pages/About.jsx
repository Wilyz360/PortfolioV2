import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";
import img from "../imgs/D3DD028A-5BB1-4A63-B8A1-CDBAFAC882CC.jpeg";

const About = () => {
  return (
    <motion.div
      className="about_container"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <img src={img} alt="avatar" />
      </div>
      <div className="about_text">
        <p>
          My name is William Zhicay. I am a motivated programmer who loves to
          make things work. I'm always looking for ways to improve my skills and
          learn new things. Though my fingers glide across the keyboard, my mind
          is focused on building a brighter future. Through every new project
          and framework mastered, I'm crafting the skills to bring innovative
          ideas to life. The only limit is my imagination.
        </p>
        <hr />
      </div>
    </motion.div>
  );
};

export default About;
