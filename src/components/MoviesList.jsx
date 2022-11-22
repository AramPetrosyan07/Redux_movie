import React from "react";
import { useSelector } from "react-redux";
import { MMovie } from "./Movie";
import { motion } from "framer-motion";
import "../style/moviesList.css";

const MoviesList = () => {
  const { movies, searchFilter, status, error } = useSelector(
    (state) => state.movies
  );

  const movieListVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
      },
    }),
  };

  return (
    <motion.div className="moviesList">
      {(searchFilter.length > 0 ? searchFilter : movies).map((item, index) => {
        return (
          <MMovie
            key={item.id}
            item={item}
            variants={movieListVariants}
            initial={"hidden"}
            whileInView={"visible"}
            custom={index}
            viewport={{ amount: 0.2, once: true }}
          />
        );
      })}
    </motion.div>
  );
};

export default MoviesList;
