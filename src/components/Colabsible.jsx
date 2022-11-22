import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { removeMovie } from "store/slices/moviesSlice";
import "../style/Colabsible.css";

const Colabsible = () => {
  const [isVisible, setVisible] = useState(false);
  const [text, setText] = useState("");
  const handleVisible = () => setVisible(!isVisible);
  const dispatch = useDispatch();

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeMovie(text));
    setText("");
  };

  return (
    <div>
      <div onClick={handleVisible} className="remove_movie_button">
        Remove Movie
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="colabsible_div">
              <form onSubmit={(e) => handleRemove(e)}>
                <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="colabsible_input"
                />
                <button
                  onClick={(e) => handleRemove(e)}
                  className="colabsible_input"
                >
                  Remove
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Colabsible;
