import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import "../style/SplidSlider.css";
import { useGetObjectsById } from "hooks/useGetObjectsById";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SplidSlider = () => {
  const navigate = useNavigate();
  const { movies, largeBg } = useSelector((state) => state.movies);
  const sliderObjects = useGetObjectsById(largeBg, movies);

  return (
    <div className="slider_container">
      <Splide
        aria-label="My Favorite Images"
        options={{
          type: "loop",
          padding: "3rem",
          gap: 15,
          speed: 2000,
          height: "10%",
          autoplay: true,
          interval: 5000,
          pagination: false,
          arrows: false,
        }}
      >
        <SplideSlide className="sliderDiv">
          <img
            src="https://thumbs.dfs.ivi.ru/storage30/contents/f/f/3769c7eb2c2257f4b5f4cfcadee79e.jpg/1216x370/?q=60"
            alt="Image 1"
          />
        </SplideSlide>
        <SplideSlide className="sliderDiv">
          <img
            src="https://thumbs.dfs.ivi.ru/storage5/contents/b/2/52b4cf25a867c1243d8934531983a8.jpg/1216x370/?q=60"
            alt="Image 2"
          />
        </SplideSlide>
        {sliderObjects.map((item) => (
          <SplideSlide
            className="sliderDiv"
            key={item.id}
            onClick={() => navigate(`/detail/${item.id}`)}
          >
            <img src={item.largeBg} alt="Image 2" />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default SplidSlider;
