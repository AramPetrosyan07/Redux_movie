import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delFavoriteMovie } from "store/slices/userSlice";
import CloseIcon from "@mui/icons-material/Close";

const RemoveMovieFromFavorite = ({ movie }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const RemoveMovieFromFav = async () => {
    if (user.favorite.includes(movie.id)) {
      let newFav = user.favorite.filter((item) => movie.id !== item);
      dispatch(delFavoriteMovie(newFav));
      await setDoc(doc(db, "users", user.id), {
        ...user,
        favorite: newFav,
      });
    }
  };

  return (
    <div
      className="cansel_button_div"
      onClick={() => {
        RemoveMovieFromFav();
      }}
    >
      <CloseIcon fontSize="large" />
    </div>
  );
};

export default RemoveMovieFromFavorite;
