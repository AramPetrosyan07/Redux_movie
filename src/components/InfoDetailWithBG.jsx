import React from "react";
import "../style/InfoDetailWithBG.css";
import RecommendedMovies from "./RecommendedMovies";
import useWindowDimensions from "hooks/WindowDimensions";
import { useNavigate } from "react-router-dom";
import LikeButton from "./LikeButton";

const InfoDetailWithBG = ({ movie, movies }) => {
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  return (
    <div className="InfoDetailWithBG">
      <div className="detail_flex">
        <div className="detail_movie_ifream">
          <iframe
            className="iframe"
            src={movie.ifream}
            title={movie.name}
          ></iframe>
        </div>
        <div className="detail_movie_info">
          <p className="detail_movie_name">{movie.name}</p>
          <p className="detail_movie_data_duration">
            {movie.data}, {` ${movie.duration} мин.`}
          </p>
          <p className="detail_movie_ganre">{movie.genre}</p>
          <div className="detail_movie_raiting">
            {/* ------------------------------------------------------------------------------------------- */}
            {/* <RatingStars movie={movie} movies={movies} /> */}
            {/* ------------------------------------------------------------------------------------------- */}
          </div>
          <div className="actors_div">
            <div className="favorite_button_div">
              <LikeButton id={movie.id} />
            </div>
            {movie.actors.map((el, index) => (
              <div
                key={el.name}
                className="actor_container"
                onClick={() => navigate(`/detail/${movie.id}/${index}`)}
              >
                <div className="actor">
                  <img src={el.image} alt="actorsImage" />
                </div>
                <p>{el.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <RecommendedMovies movies={movies} movieId={movie.id} />
      </div>
    </div>
  );
};

export default InfoDetailWithBG;
