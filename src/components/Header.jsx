import React, { useEffect, useRef, useState } from "react";
import Search from "./Search";
import "../style/Header.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import UserInfo from "./UserInfo";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const user = useSelector((state) => state.user);
  const [isVisible, setVisible] = useState(false);
  const handleVisibility = () => setVisible(!isVisible);
  const navigate = useNavigate();
  let location = useLocation();

  const nameSurname = (name) => {
    return `${name.split(" ")[0][0]}`;
  };

  let menuRef = useRef();

  const closeHeader = () => {
    setVisible(false);
  };

  useEffect(() => {
    let header = (e) => {
      if (!menuRef.current.contains(e.target)) closeHeader();
    };
    if (isVisible === true) {
      document.addEventListener("mousedown", header);
    }
  });

  return (
    <div className="mainHeader" ref={menuRef}>
      <div className="header">
        <div className="flex">
          <div className="header_logo">
            <img
              src={process.env.PUBLIC_URL + "/image/logo.png"}
              onClick={() => navigate("/")}
            />
          </div>
          <div className="header_tools">
            {location.pathname === "/" ? <Search /> : <></>}
            <Avatar
              onClick={user.id ? handleVisibility : null}
              style={{
                backgroundColor: user.color,
              }}
            >
              {nameSurname(user.name !== null ? user.name : "Name Surnema")}
            </Avatar>
          </div>
        </div>
        <AnimatePresence>
          <motion.div
            key={isVisible}
            initial={{ height: 0, y: 0 }}
            animate={{ height: "auto", y: 20 }}
            exit={{ height: 0, y: 0 }}
          >
            {isVisible && (
              <div>
                <UserInfo click={closeHeader} />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
