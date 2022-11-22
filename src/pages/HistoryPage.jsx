import { useGetObjectsById } from "hooks/useGetObjectsById";
import useWindowDimensions from "hooks/WindowDimensions";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../style/HistoryPage.css";

const HistoryPage = () => {
  const { width } = useWindowDimensions();
  const { movies } = useSelector((state) => state.movies);
  const { moviesHistory } = useSelector((state) => state.user);
  const favoriteMoviesObj = useGetObjectsById(moviesHistory, movies);
  const navigate = useNavigate();

  return (
    <div className="main_header">
      <div className="header_container">
        {favoriteMoviesObj.map((movie) => (
          <div className="header_movie_item" key={movie.id}>
            <div
              className="heaer_movie_imgBg"
              style={{
                backgroundImage: `url(${movie.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
              onClick={() => navigate(`/detail/${movie.id}`)}
            ></div>
            <div>
              <p className="header_info_name">{movie.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;
