import React, { useState } from "react";
import { motion } from "framer-motion";
import ShareIcon from "@mui/icons-material/Share";
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";
import "../style/ShareBtn.css";

const ShareBtn = ({ movie, shareIconBgColor }) => {
  const [shareOpen, setShareOpen] = useState(false);

  const toggleOpenSearch = () => setShareOpen(!shareOpen);

  return (
    <div className={shareOpen ? "shareOpen" : "shareClose"}>
      <div
        className="share_icon_div"
        style={{ backgroundColor: shareIconBgColor }}
      >
        <ShareIcon fontSize="large" onClick={toggleOpenSearch} />
      </div>
      {shareOpen && (
        <div className="searchIcons_flex">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <FacebookShareButton url={movie.ifream}>
              <FacebookIcon round={true} className="iconFb" />
            </FacebookShareButton>
          </motion.div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <TelegramShareButton url={movie.ifream}>
              <TelegramIcon round={true} className="iconFb" />
            </TelegramShareButton>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ShareBtn;
