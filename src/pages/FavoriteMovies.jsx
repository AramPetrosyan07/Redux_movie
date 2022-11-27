import { Splide, SplideSlide } from "@splidejs/react-splide";
import FavoriteMovieItem from "components/FavoriteMovieItem";
import { useGetObjectsById } from "hooks/useGetObjectsById";
import useWindowDimensions from "hooks/WindowDimensions";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { AnimateSharedLayout } from "framer-motion";
import "../style/FavoriteMovies.css";
import { useNavigate } from "react-router-dom";
import ShareBtn from "components/ShareBtn";
import RemoveMovieFromFavorite from "components/RemoveMovieFromFavorite";
import { useEffect } from "react";

const FavoriteMovies = () => {
  const { width } = useWindowDimensions();
  const { movies } = useSelector((state) => state.movies);
  const { favorite } = useSelector((state) => state.user);
  const favoriteMoviesObj = useGetObjectsById(favorite, movies);
  const [selected, setSelected] = useState(favoriteMoviesObj[0]);
  const navigate = useNavigate();

  let countSlide = useMemo(() => {
    if (width > 1400) {
      return 8;
    } else if (width <= 1400 && width > 1024) {
      return 7;
    } else if (width > 768 && width <= 1024) {
      return 5;
    } else if (width > 500 && width < 768) {
      return 4;
    } else if (width > 400 && width < 500) {
      return 3;
    } else if (width < 400) {
      return 3;
    }
  }, [width]);

  useEffect(() => {
    setSelected(favoriteMoviesObj[0]);
  }, [favorite]);

  let bgImage = () => {
    return selected?.background;
  };

  return (
    <div className="main_favorite_movies">
      <div className="favorite_container">
        <div className="favorite_movie_list">
          <AnimateSharedLayout>
            <Splide
              aria-label="My Favorite Images"
              options={{
                type: "slide",
                // gap: 20,
                speed: 1000,
                height: "10%",
                pagination: false,
                arrows: false,
                perPage: countSlide,
                perMove: 1,
              }}
            >
              {favoriteMoviesObj ? (
                favoriteMoviesObj.reverse().map((item) => (
                  <SplideSlide className="" key={item.id}>
                    <FavoriteMovieItem
                      className="fav_slide_item"
                      item={item}
                      isSelected={selected.id === item.id}
                      onClick={() => setSelected(item)}
                    ></FavoriteMovieItem>
                  </SplideSlide>
                ))
              ) : (
                <></>
              )}
            </Splide>
          </AnimateSharedLayout>
        </div>
      </div>
      <div
        className="favorite_background"
        style={{
          backgroundImage: `url(${bgImage()})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        {favoriteMoviesObj.length !== 0 ? (
          <div className="favorite_buttons">
            <div className="favorite_flex">
              <RemoveMovieFromFavorite movie={selected} />
              <div
                className="play_button"
                onClick={() => navigate(`/detail/${selected.id}`)}
              >
                <p>GO TO MOVIE</p>
              </div>
              <ShareBtn movie={selected} shareIconBgColor={"#ea003d"} />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default FavoriteMovies;
