import { prominent } from "color.js";
import InfoDetailWithBG from "components/InfoDetailWithBG";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { data } from "dataBase";
import { addMovie } from "store/slices/moviesSlice";

const DemoPage = ({ demo }) => {
  const { movies } = useSelector((state) => state.movies);
  const [rgbColor, setRgbColor] = useState("#100e19");
  const dispatch = useDispatch();

  const getColorOfBackground = () => {
    if (demo.background) {
      prominent(demo.background, { amount: 1 }).then((color) => {
        setRgbColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
      });
    }
  };
  useEffect(() => {
    setRgbColor("#100e19");
    getColorOfBackground();
  }, [demo]);

  return (
    <div className="mainDetail_page" id="main_demo">
      <div className="backgroundImage_detailPage">
        <img src={demo.background} alt="" />
      </div>
      <div className="detail_second_part_background ">
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
            {demo.background ? (
              <InfoDetailWithBG movie={demo} movies={movies} />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="add_movie_div">
          <motion.button
            whileHover={{
              scale: 1.05,
              background:
                "linear-gradient(315deg, rgba(92,219,249,1) 0%, rgba(11,68,144,1) 100%)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              console.log("add");
              if (demo !== null) {
                dispatch(addMovie(demo));
              }
            }}
          >
            Add movie
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
