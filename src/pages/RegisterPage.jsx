import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { db } from "../firebase";
import SignUp from "components/SignUp";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange" });

  const randomColor = () => {
    let hex = Math.floor(Math.random() * 0xffffff);
    let color = "#" + hex.toString(16);
    return color;
  };

  const handleRegister = (data) => {
    setError("");
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.pass)
      .then(async ({ user }) => {
        await setDoc(doc(db, "users", user.uid), {
          id: user.uid,
          name: data.name,
          date: data.date,
          email: data.email,
          pass: data.pass,
          color: randomColor(),
          favorite: [],
          voteMovies: [],
          moviesHistory: [],
          role: "user",
        });
        localStorage.setItem("uid", user.uid);
        navigate("/login");
        dispatch(
          setUser({
            id: user.uid,
            name: data.name,
            date: data.date,
            email: data.email,
            pass: data.pass,
            color: data.color,
            favorite: [],
            voteMovies: [],
            moviesHistory: [],
            role: user.role,
          })
        );
        reset();
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className="mainLogin">
      <div className="login">
        <form onSubmit={handleSubmit(handleRegister)} className="formRegister">
          <div className="input-container ic2">
            <input
              id="firstname"
              className="input"
              type="text"
              placeholder="name surname"
              {...register("name", {
                required: { value: true, message: "Name is required !!!" },
              })}
            />
            <div className="cut"></div>
            <label htmlFor="firstname" className="placeholder">
              Name
            </label>
          </div>
          {errors.name && <p className="warning">{errors.name.message}</p>}

          <div className="input-container ic2">
            <input
              id="firstname"
              className="input"
              type="date"
              placeholder="date"
              {...register("date", {
                required: { value: true, message: "Date is required !!!" },
              })}
            />
            <div className="cut"></div>
            <label htmlFor="firstname" className="placeholder">
              date
            </label>
          </div>
          {errors.date && <p className="warning">{errors.date.message}</p>}

          <div className="input-container ic2">
            <input
              id="firstname"
              className="input"
              type="email"
              placeholder="email"
              {...register("email", {
                required: { value: true, message: "Password is required !!!" },
              })}
            />

            <div className="cut"></div>
            <label htmlFor="firstname" className="placeholder">
              email
            </label>
          </div>
          {errors.email && <p className="warning">{errors.email.message}</p>}

          <div className="input-container ic2">
            <input
              id="firstname"
              className="input"
              type="text"
              placeholder="password"
              {...register("pass", {
                required: { value: true, message: "Password is required !!!" },
                minLength: {
                  value: 6,
                  message: "Password must be longer than 6 characters",
                },
              })}
            />
            <div className="cut"></div>
            <label htmlFor="firstname" className="placeholder">
              password
            </label>
          </div>
          {errors.pass && <p className="warning">{errors.pass.message}</p>}
          <div className="warningForgetPass">
            {error !== "" ? (
              <p className="notSend">Email already in use</p>
            ) : (
              ""
            )}
          </div>
          <div className="flesButtons">
            <SignUp isValid={isValid} />
            <div>
              <Link to="/login" className="handleButton">
                login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
