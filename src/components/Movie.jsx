import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import React, { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../style/movie.css";
import { addFavoriteMovie, addMovieToHistory } from "store/slices/userSlice";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "hooks/WindowDimensions";

const Movie = forwardRef(({ item }, ref) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  const addMovieToHistoryAndFirebaseHistory = async () => {
    const newHistoryArr = Array.from(new Set([item.id, ...user.moviesHistory]));
    try {
      if (user.id) {
        if (newHistoryArr.length < 100) {
          await setDoc(doc(db, "users", user.id), {
            ...user,
            moviesHistory: newHistoryArr,
          });

          dispatch(addMovieToHistory(newHistoryArr));
        } else {
          await setDoc(doc(db, "users", user.id), {
            ...user,
            moviesHistory: [],
          });

          dispatch(addMovieToHistory([]));
        }
      }
    } catch (error) {}
  };

  return (
    <motion.div
      layout
      className="mainMovieDiv"
      ref={ref}
      onClick={() => {
        navigate(`/detail/${item.id}`);
        addMovieToHistoryAndFirebaseHistory();
      }}
    >
      <div className="movieDiv">
        <div
          className="imgDiv"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            borderRadius: "20px",
          }}
        >
          <div className={width > 700 ? "" : "displayNone"}>
            <div className="movie_hover_info">
              <div className="movie_hover_info_div">
                <p>{item.data}</p>
                <p>{item.duration} мин</p>
                <p>{item.genre} </p>
              </div>
            </div>
            <div className="afterDiv-insideImgDiv"></div>
          </div>
        </div>
      </div>
      <h4 className="movieName">{item.name}</h4>
    </motion.div>
  );
});

export const MMovie = motion(Movie);

export default Movie;
