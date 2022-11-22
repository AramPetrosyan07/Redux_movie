import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import { changeRateingMovie } from "store/slices/moviesSlice";
import { addVoteMovies } from "store/slices/userSlice";
import { raitingCalc } from "hooks/useRaitingCalc";
// import { doc, setDoc } from "firebase/firestore";
// import { db } from "../firebase";

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  52 toxi function@ anjatac a, firebase um u user i mej chi avelacnum
// astxerin erkrord angam sexmelis nor poxum a state @

const RatingStars = ({ movie, movies }) => {
  const user = useSelector((state) => state.user);
  const [vote, setVote] = useState(0);
  const [rateingValue, setRateingValue] = useState(0);
  const [toChack, setToChack] = useState(false);
  const dispatch = useDispatch();

  const toChackHasOrNo = () => {
    user.voteMovies.forEach((arr) => {
      if (+arr[0].substring(arr[0].length - 1) === movie.id) {
        setToChack(true);
      }
    });
    return toChack;
  };

  // const ratingCalc = () => {
  //   const reiting = movie.reiting;
  //   let multiply = 0;
  //   let sum = 0;
  //   for (let item in reiting) {
  //     let oneX = +item.substring(item.length - 1) * reiting[item];
  //     multiply += oneX;
  //     sum += reiting[item];
  //   }
  //   if (multiply === 0 || sum === 0) {
  //     return 0;
  //   }
  //   return multiply / sum;
  // };

  const callRaitingHook = () => {
    setRateingValue(raitingCalc(movie));
  };

  useEffect(() => {
    callRaitingHook();
  }, [vote, movies]);

  const voteMovie_changeFullData = () => {
    console.log(vote);
    let reiting = JSON.parse(JSON.stringify(movie.reiting));
    // if (toChackHasOrNo()) {
    for (let el in reiting) {
      if (+el.substring(el.length - 1) === vote) {
        reiting[el] += 1;
      }
    }
    // }

    let newMoviesData = JSON.parse(JSON.stringify(movies));
    let arr = newMoviesData.map((el) => {
      if (el.id !== movie.id) return el;
      else {
        return (el = { ...el, reiting: reiting });
      }
    });

    dispatch(changeRateingMovie(arr));
  };

  const addVoteMovie = async () => {
    let voteObj = [`movie${movie.id}`, vote];
    if (user.id) {
      // await setDoc(doc(db, "users", user.id), {
      //   ...user,
      //   voteMovies: [movie.id, ...user.voteMovies],
      // });
      dispatch(addVoteMovies(voteObj));
    }
  };

  const handleVote = (e) => {
    voteMovie_changeFullData();
    setVote(e);
    addVoteMovie();
    console.log(toChackHasOrNo());
  };
  // && !user.voteMovies.includes(movie.id)
  return (
    <div>
      {user.id ? (
        <Rating
          name="half-rating"
          value={rateingValue}
          precision={0.1}
          size="large"
          onChange={(e) => handleVote(Math.ceil(+e.target.value))}
        />
      ) : (
        <Rating
          name="half-rating"
          value={rateingValue}
          precision={0.1}
          size="large"
          readOnly
        />
      )}
    </div>
  );
};

export default RatingStars;
