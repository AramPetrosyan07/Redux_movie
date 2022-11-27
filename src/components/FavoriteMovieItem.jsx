import React from "react";
import { motion } from "framer-motion";

import "../style/FavoriteMovieItem.css";

const FavoriteMovieItem = ({ item, isSelected, onClick }) => {
  // const navigate = useNavigate();

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
  };

  return (
    <motion.div className="favorite_movie_item" onClick={onClick}>
      <div
        className="favorite_movie_background"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          borderRadius: "20px",
        }}
      >
        {isSelected && (
          <motion.div
            className="favorite_outline"
            layoutId="outline"
            initial={false}
            animate={{ borderColor: "#ea003d" }}
            transition={spring}
          />
        )}
      </div>
    </motion.div>
  );
};

export default FavoriteMovieItem;
