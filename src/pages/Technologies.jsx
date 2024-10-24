import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { motion } from "framer-motion";
import "../styles/Technologies.css";
import github from "../imgs/github-img.png";
import slack from "../imgs/slack-img.png";
import git from "../imgs/git-img.png";
import js from "../imgs/javascript-img.png";
import cpp from "../imgs/cpp2-img.png";
import html from "../imgs/html-5-img.png";
import css from "../imgs/css-3-img.png";
import reactjs from "../imgs/react-img.png";
import linux from "../imgs/linux-img.png";
import nodejs from "../imgs/nodejs-js.png";
import mongodb from "../imgs/mongodb-img.png";
import express from "../imgs/express-img.png";
import boostrap from "../imgs/bootstrap-img.png";

const Technologies = () => {
  return (
    <motion.div
      className="container mt-4 main"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="row justify-content-center">
        <div className="col-lg-4 tech_hover col-md-6 col-sm-12 text-center mb-3">
          <Tooltip title="Github">
            <img
              className=""
              src={github}
              style={{ height: "100px", width: "100px" }}
              alt="Github"
            />
          </Tooltip>
        </div>
        <div className="col-lg-4 tech_hover col-md-6 col-sm-12 text-center mb-3">
          <Tooltip title="Slack">
            <img
              src={slack}
              style={{ height: "100px", width: "100px" }}
              alt="Slack"
            />
          </Tooltip>
        </div>
        <div className="col-lg-4 tech_hover col-md-6 col-sm-12 text-center mb-3">
          <Tooltip title="Git">
            <img
              src={git}
              style={{ height: "100px", width: "100px" }}
              alt="Git"
            />
          </Tooltip>
        </div>
        <div className="col-lg-4 tech_hover col-md-6 col-sm-12 text-center mb-3">
          <Tooltip title="JavaScript">
            <img
              src={js}
              style={{ height: "100px", width: "100px" }}
              alt="JavaScript"
            />
          </Tooltip>
        </div>
        <div className="col-lg-4 tech_hover col-md-6 col-sm-12 text-center mb-3">
          <Tooltip title="C++">
            <img
              src={cpp}
              style={{ height: "100px", width: "100px" }}
              alt="C++"
            />
          </Tooltip>
        </div>
        <div className="col-lg-4 tech_hover col-md-6 col-sm-12 text-center mb-3">
          <Tooltip title="HTML5">
            <img
              src={html}
              style={{ height: "100px", width: "100px" }}
              alt="HTML"
            />
          </Tooltip>
        </div>
        <div className="col-lg-4 tech_hover col-md-6 col-sm-12 text-center mb-3">
          <Tooltip title="CSS3">
            <img
              src={css}
              style={{ height: "100px", width: "100px" }}
              alt="CSS"
            />
          </Tooltip>
        </div>

        <div className="col-lg-4 tech_hover col-md-6 col-sm-12 text-center mb-3">
          <Tooltip title="React JS">
            <img
              src={reactjs}
              style={{ height: "100px", width: "100px" }}
              alt="React"
            />
          </Tooltip>
        </div>
        <div className="col-lg-4 tech_hover col-md-6 col-sm-12 text-center mb-3">
          <Tooltip title="Node JS">
            <img
              src={nodejs}
              style={{ height: "100px", width: "100px" }}
              alt="NodeJS"
            />
          </Tooltip>
        </div>
        <div className="col-lg-4 tech_hover col-md-6 col-sm-12 text-center mb-3">
          <Tooltip title="Mongo DB">
            <img
              src={mongodb}
              style={{ height: "100px", width: "100px" }}
              alt="MongoDB"
            />
          </Tooltip>
        </div>
        <div className="col-lg-4 tech_hover col-md-6 col-sm-12 text-center mb-3">
          <Tooltip title="Linux">
            <img
              src={linux}
              style={{ height: "100px", width: "100px" }}
              alt="Linux"
            />
          </Tooltip>
        </div>
        <div className="col-lg-4 tech_hover col-md-6 col-sm-12 text-center mb-3">
          <Tooltip title="Express JS">
            <img
              src={express}
              style={{ height: "100px", width: "100px" }}
              alt="ExpressJS"
            />
          </Tooltip>
        </div>
        <div className="col-lg-4 tech_hover col-md-6 col-sm-12 text-center mb-3">
          <Tooltip title="Boostrap">
            <img
              src={boostrap}
              style={{ height: "100px", width: "100px" }}
              alt="Boostrap"
            />
          </Tooltip>
        </div>
      </div>
    </motion.div>
  );
};

export default Technologies;
