import { Splide, SplideSlide } from "@splidejs/react-splide";
import RecMovItem from "components/RecMovItem";
import { useGetObjectsById } from "hooks/useGetObjectsById";
import useWindowDimensions from "hooks/WindowDimensions";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../style/ActorDetailPage.css";

const ActorDetailPage = () => {
  const { movies } = useSelector((state) => state.movies);
  const { id, actorId } = useParams();
  const { width } = useWindowDimensions();

  const actorObj = movies[+id - 1].actors[+actorId];
  console.log(actorObj);

  const moviesIdByActor = [];

  for (let movie of movies) {
    for (let actor of movie.actors) {
      if (actor.name === actorObj.name) moviesIdByActor.push(movie.id);
    }
  }

  const moviesObjByActor = useGetObjectsById(moviesIdByActor, movies);
  console.log(moviesObjByActor);

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
    <div className="main_Actor_Detail_page">
      <div className="actor_Detail_container">
        <div className="actor_Detail_flex">
          <div
            className="actor_Detail_imageDiv"
            style={{
              backgroundImage: `url(${actorObj.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            {/* <img src={actorObj.image} /> */}
          </div>
          <div className="actor_title">
            <h1>{actorObj.name}</h1>
            <p>{actorObj.about}</p>
          </div>
        </div>
        <div className="his_movies">
          <h2>Films in which he acted</h2>
          <Splide
            aria-label="My Favorite Images"
            options={{
              type: "slide",
              gap: 105,
              speed: 1000,
              height: "10%",
              pagination: false,
              arrows: false,
              perPage: countSlide,
              perMove: 1,
            }}
          >
            {moviesObjByActor.map((item) => (
              <SplideSlide key={item.id}>
                <RecMovItem item={item} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default ActorDetailPage;
