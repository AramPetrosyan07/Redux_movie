import MoviesList from "components/MoviesList";
import React from "react";
import "../style/HomePage.css";
import SplidSlider from "components/SplidSlider";
import Filters from "components/Filters";

const HomePage = () => {
  return (
    <div className="mainHome_page">
      <SplidSlider />
      <div className="home_container">
        <Filters />
        <div className="different_movies">
          <div className="movies">
            <MoviesList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
