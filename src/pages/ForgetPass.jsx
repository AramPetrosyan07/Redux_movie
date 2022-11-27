import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ForgetPass = () => {
  const [send, setSend] = useState(NaN);

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange" });

  const getEmail = (data) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, data.email)
      .then((res) => setSend(1))
      .catch((error) => setSend(2));
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
              placeholder="_"
              {...register("email", {
                required: { value: true, message: "Email is required !!!" },
              })}
            />
            <div className="cut"></div>
            <label htmlFor="firstname" className="placeholder">
              email
            </label>
          </div>
          {errors.email && <p className="warning">{errors.email.message}</p>}

          <div>
            <button
              disabled={!isValid}
              className={isValid ? "handleButton" : "handleButton disabled"}
            >
              Change password
            </button>
          </div>
          <div className="warningForgetPassDiv">
            {send === 1 ? (
              <p className="warningForgetPass send">
                The message has been sent
              </p>
            ) : send === 2 ? (
              <p className="warningForgetPass notSend">
                The message was not sent
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPass;
