import React from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css";
import linkedin from "../imgs/linkedin.svg";
import github from "../imgs/github.svg";
import X from "../imgs/x.svg";
import instagram from "../imgs/instagram.svg";

const Contact = () => {
  return (
    <motion.div
      className="main"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-auto p-5 form-control bg-light">
        <div className="text-dark pb-3 text-center">
          <h2>Contact</h2>
          <hr />
        </div>
        <form action="">
          <div class="w-auto mb-3 shadow-sm">
            <input
              type="text"
              className="form-control border border-top-0 border-start-0 border-end-0"
              id="exampleFormControlInput1"
              placeholder="Full Name"
            />
          </div>
          <div className="w-auto mb-3 shadow-sm">
            <input
              type="email"
              className=" form-control border border-top-0 border-start-0 border-end-0"
              id="exampleFormControlInput1"
              placeholder="Email"
            />
          </div>
          <div className="w-auto mb-3 shadow-sm">
            <textarea
              type="text"
              className=" form-control border border-top-0 border-start-0 border-end-0"
              id="exampleFormControlInput1"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" class="btn btn-dark ">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="d-flex mt-4">
        <div className="p-2 flex-fill text-light">
          <a
            href="https://www.linkedin.com/in/william-zhicay/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={linkedin}
              style={{ height: "32px", width: "32px" }}
              alt="Linkedln"
            />
          </a>
        </div>
        <div className="p-2 flex-fill">
          <a
            href="https://twitter.com/wiliko360"
            rel="noreferrer"
            target="_blank"
          >
            <img src={X} style={{ height: "32px", width: "32px" }} alt="X" />
          </a>
        </div>
        <div className="p-2 flex-fill">
          <a
            href="https://github.com/Wilyz360"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={github}
              style={{ height: "32px", width: "32px" }}
              alt="github"
            />
          </a>
        </div>
        <div className="p-2 flex-fill">
          <a
            href="https://www.instagram.com/wiliko360/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={instagram}
              style={{ height: "32px", width: "32px" }}
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
