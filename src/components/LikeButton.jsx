import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { motion } from "framer-motion";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { addFavoriteMovie, delFavoriteMovie } from "store/slices/userSlice";

const LikeButton = ({ id }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const addFavoriteList = async () => {
    if (user.id) {
      if (!user.favorite.includes(id)) {
        await setDoc(doc(db, "users", user.id), {
          ...user,
          favorite: [id, ...user.favorite],
        });
        dispatch(addFavoriteMovie(id));
      } else if (user.favorite.includes(id)) {
        let newFav = user.favorite.filter((item) => id !== item);
        await setDoc(doc(db, "users", user.id), {
          ...user,
          favorite: newFav,
        });
        dispatch(delFavoriteMovie(newFav));
      }
    }
  };

  const refLike = useRef();

  useEffect(() => {
    refLike.current.focus();
  }, [id]);
  return (
    <motion.div
      ref={refLike}
      onClick={() => addFavoriteList()}
      style={{
        backgroundColor: user.favorite.includes(id) ? "#ea003d" : "#312b45",
      }}
      className="favorite_button"
      whileHover={{ scale: 1.1, backgroundColor: "#ea003d" }}
      whileTap={{ scale: 0.9 }}
    >
      <FavoriteBorderIcon
        className="favorite_icon_in_detail"
        fontSize="large"
      />
    </motion.div>
  );
};

export default LikeButton;
