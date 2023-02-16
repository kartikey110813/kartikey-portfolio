import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
import pdf from "../../assets/kartikeyResume.pdf"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
      <button style={{border:"none"}}> <a  style={{border:"none",background:"#313bac",color:"white",padding:"0.7rem",borderRadius:"25px",textDecoration:"none"}} href = {"https://drive.google.com/file/d/1iAdjpHu-mMmOPvtCuN60jWyRUGJJ6lJd/view?usp=share_link"} > Resume</a></button>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "contact", "skills", "work"].map((item) => (
          <li className="app__flex" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
            {["home", "about", "contact", "skills", "work"].map((item) => (
              <li className="app__flex" key={`${item}`}>
                <a href={`#${item}`} onClick={() => setToggle(false)}>
                  {item}
                </a>
              </li>
              ))}
              </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
