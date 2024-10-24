import React from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";

import ScoreApp from "../imgs/ScoreWebApp.png";
import MsgWebApp from "../imgs/MessengerWebApp.png";

const Projects = () => {
  return (
    <motion.div
      className="cantainer mt-4 main"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="row justify-content-center">
        <div className="col project_hover col-md-6 col-sm-12 text-center mb-3">
          <a
            href="https://github.com/Wilyz360/ScoreApp"
            rel="noreferrer"
            target="_blank"
          >
            <img className="scoreImg" src={ScoreApp} alt="Scores Web App" />
            <div>
              <span>Scores Web App</span>
            </div>
          </a>
        </div>
        <div className="col project_hover col-md-6 col-sm-12 text-center mb-3">
          <a
            href="https://github.com/Wilyz360/ChatApp"
            rel="noreferrer"
            target="_blank"
          >
            <img className="msgImg" src={MsgWebApp} alt="Messenger Web App" />
            <div>
              <span>Messenger Web App</span>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
