import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";

const ForgetPass = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange" });

  const getEmail = (data) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, data.email)
      .then((res) => {
        console.log("all right");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mainLogin">
      <div className="login">
        <form onSubmit={handleSubmit(getEmail)} className="form forgotPass">
          <div className="input-container ic1">
            <input
              id="firstname"
              className="input"
              type="email"
              placeholder="a"
              {...register("email", {
                required: { value: true, message: "Email is required !!!" },
              })}
              s
            />
            <div className="cut"></div>
            <label htmlFor="firstname" className="placeholder">
              email
            </label>
          </div>
          {errors && errors.email && (
            <p className="warning">{errors.email.message}</p>
          )}

          {errors && errors.pass && (
            <p className="warning">{errors.pass.message}</p>
          )}
          <div>
            <button
              disabled={!isValid}
              className={isValid ? "handleButton" : "handleButton disabled"}
            >
              Change password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPass;
