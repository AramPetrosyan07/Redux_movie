import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../style/ChangeMovieInfo.css";
import CreateMovie from "./CreateMovie";
import DemoPage from "./DemoPage";

const ChangeMovieInfo = () => {
  const [selectMovieName, setSelectMovieName] = useState("");
  const [selctedMovie, setSelectedMovie] = useState({});
  const { movies } = useSelector((state) => state.movies);

  const selectMovie = () => {
    let selectMovie = movies.find((movie) => movie.name === selectMovieName);
    setSelectedMovie(selectMovie);
  };

  const getData = (data) => {
    let changingObj = JSON.parse(JSON.stringify(selctedMovie));

    for (let i in data) {
      if (i === "id") {
        continue;
      } else if (typeof data[i] === "string" && data[i] !== "") {
        changingObj[i] = data[i];
      } else if (typeof data[i] === "number" && data[i] !== 0) {
        changingObj[i] = data[i];
      }
    }
    for (let o in data.actors) {
      for (let i in data.actors[o]) {
        if (data.actors[o][i] !== "") {
          changingObj.actors[o][i] = data.actors[o][i];
        }
      }
    }
    setSelectedMovie(changingObj);
  };

  return (
    <div className="main_changeMovie">
      <div className="changeMovie_container">
        <div className="changeMovie_select_input">
          <input
            value={selectMovieName}
            onChange={(e) => setSelectMovieName(e.target.value)}
          />
          <button onClick={() => selectMovie()}>Select Movie</button>
        </div>
        <CreateMovie page={"changeMovie"} getData={getData} />
      </div>
      {selctedMovie.id ? <DemoPage demo={selctedMovie} /> : <></>}
    </div>
  );
};

export default ChangeMovieInfo;
