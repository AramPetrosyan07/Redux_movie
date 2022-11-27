import React from "react";
import "../style/UserInfo.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const UserInfo = ({ click }) => {
  const navigate = useNavigate();

  return (
    <div className="userInfo">
      <div className="flex_header">
        <motion.div
          className="header_favorite_box"
          whileHover={{ scale: 1.05, backgroundColor: "#ea003d" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            click();
            navigate(`/favoritemovies`);
          }}
        >
          <FavoriteBorderIcon className="favorite" />
          <p>Favorite movies</p>
        </motion.div>
        <motion.div
          className="header_story_box"
          whileHover={{ scale: 1.05, backgroundColor: "#ea003d" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            click();
            navigate(`/history`);
          }}
        >
          <HistoryIcon className="story" />
          <p>History</p>
        </motion.div>
        <motion.div className="header_settings_box_padding">
          <motion.div
            className="header_settings_box"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              click();
              navigate(`/settings`);
            }}
          >
            <SettingsIcon className="settings_icon" />
            <p>Settings</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default UserInfo;
