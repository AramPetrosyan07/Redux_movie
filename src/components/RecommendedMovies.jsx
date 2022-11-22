import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import "../style/RecommendedMovies.css";
import RecMovItem from "./RecMovItem";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import useWindowDimensions from "hooks/WindowDimensions";
import { useGetObjectsById } from "hooks/useGetObjectsById";

const RecommendedMovies = ({ movies, movieId }) => {
  const user = useSelector((state) => state.user);
  const { width } = useWindowDimensions();

  const historyArr = useGetObjectsById(user.moviesHistory, movies);

  const getRecommendedMovies = () => {
    let recommendedMoviesIdArr = [];
    const RecommededMovieObject = {};
    const getGanresInArrOfHistoryArr = historyArr.map((hMov) => {
      return hMov.genre.split(", ");
    });
    getGanresInArrOfHistoryArr.forEach((ganresArr) => {
      ganresArr.forEach((ganre) => {
        if (RecommededMovieObject[ganre] === undefined) {
          RecommededMovieObject[ganre] = 1;
        } else if (RecommededMovieObject[ganre] !== undefined) {
          RecommededMovieObject[ganre] += 1;
        }
      });
    });

    for (let i in RecommededMovieObject) {
      let propGanreArr = movies.filter((mov) => mov.genre.includes(i));
      if (recommendedMoviesIdArr.length < 20) {
        for (let m = 0; m < RecommededMovieObject[i]; m++) {
          if (propGanreArr[m].id !== movieId) {
            recommendedMoviesIdArr = Array.from(
              new Set([...recommendedMoviesIdArr, propGanreArr[m].id])
            );
          }
        }
      }
    }
    let recommendedMovies = recommendedMoviesIdArr.map((id) => {
      return movies.find((mov) => mov.id === id);
    });

    return recommendedMovies;
  };
  // getRecommendedMovies();

  let countSlide = useMemo(() => {
    if (width > 1400) {
      return 7;
    } else if (width <= 1400 && width > 1024) {
      return 5;
    } else if (width > 768 && width <= 1024) {
      return 4;
    } else if (width > 400 && width < 768) {
      return 4;
    } else if (width < 400) {
      return 3;
    }
  }, [width]);

  return (
    <div className="recommended_movies_container">
      <p>Recommended movies</p>
      {getRecommendedMovies().length === 0 ? (
        <div className="demo_recomended_warning">
          <h3>
            The Recommended movies field is organized by History movie genres
          </h3>
        </div>
      ) : (
        <>
          <Splide
            aria-label="My Favorite Images"
            options={{
              type: "slide",
              gap: 20,
              speed: 1000,
              height: "10%",
              pagination: false,
              arrows: false,
              perPage: countSlide,
              perMove: 1,
            }}
          >
            {getRecommendedMovies().map((item) => (
              <SplideSlide key={item.id}>
                <RecMovItem item={item} />
              </SplideSlide>
            ))}
          </Splide>
        </>
      )}
    </div>
  );
};

export default RecommendedMovies;
