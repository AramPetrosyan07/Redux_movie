import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import "../style/Login.css";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [errLogOrPass, setErrLogOrPass] = useState("");

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange" });

  const handleLogin = (data) => {
    setErrLogOrPass("");
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.pass)
      .then((userCredential) => {
        if (userCredential.user.uid) {
          localStorage.setItem("uid", userCredential.user.uid);
          navigate("/");
        }
      })
      .catch((err) => setErrLogOrPass(err.message));
  };

  return (
    <div className="mainLogin">
      <div className="login">
        <form onSubmit={handleSubmit(handleLogin)} className="form">
          <div className="input-container ic1">
            <input
              id="firstname"
              className="input"
              type="email"
              placeholder="a"
              {...register("email", {
                required: { value: true, message: "email is required !!!" },
              })}
            />
            <div className="cut"></div>
            <label htmlFor="firstname" className="placeholder">
              email
            </label>
          </div>
          {errors && errors.email && (
            <p className="warning">{errors.email.message}</p>
          )}
          <div className="input-container ic2">
            <input
              id="lastname"
              className="input"
              type="text"
              placeholder="a"
              {...register("pass", {
                required: { value: true, message: "password is required !!!" },
                minLength: {
                  value: 6,
                  message: "Password must be longer than 6 characters",
                },
              })}
            />
            <div className="cut"></div>
            <label htmlFor="lastname" className="placeholder">
              password
            </label>
          </div>
          {errors && errors.pass && (
            <p className="warning">{errors.pass.message}</p>
          )}
          {errLogOrPass === "Firebase: Error (auth/user-not-found)." ? (
            <p className="warning">The password or email is incorrect</p>
          ) : (
            ""
          )}
          <div>
            <button
              disabled={!isValid}
              className={isValid ? "handleButton" : "handleButton disabled"}
            >
              Sign in
            </button>
          </div>
          <div>
            <Link to="/register" className="handleButton">
              Regster
            </Link>
            <Link to="/forgetpass" className="handleButton">
              Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
