import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { prominent } from "color.js";

import "../style/DetailPage.css";
import InfoDetailWithBG from "components/InfoDetailWithBG";
import InfoDetailWithIMG from "components/InfoDetailWithIMG";

const DetailPage = () => {
  const { id } = useParams();
  const { movies } = useSelector((state) => state.movies);
  const movie = movies.find((el) => el.id === +id);
  const [rgbColor, setRgbColor] = useState("#100e19");

  const getColorOfBackground = () => {
    if (movie.background) {
      prominent(movie.background, { amount: 1 }).then((color) => {
        setRgbColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
      });
    }
  };
  useEffect(() => {
    setRgbColor("#100e19");
    getColorOfBackground();
  }, [movie, id]);

  return (
    <div className="mainDetail_page">
      <div className="backgroundImage_detailPage">
        <img src={movie.background} alt="" />
      </div>
      <div className="detail_second_part_background mt(red)">
        <div
          className="div_bottom_shadow"
          style={{
            boxShadow: `0px -200px 50px -150px ${rgbColor} inset`,
          }}
        ></div>
        <div
          className="detailPage_background_linear_gradient"
          style={{
            background: `linear-gradient(0deg, rgb(16, 14, 25,0) 0%, ${rgbColor} 90%)`,
          }}
        >
          <div className="detailPage_container">
            {movie.background ? (
              <InfoDetailWithBG movie={movie} movies={movies} />
            ) : (
              <InfoDetailWithIMG movie={movie} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
