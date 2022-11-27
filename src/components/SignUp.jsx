import React from "react";

const SignUp = ({ isValid }) => {
  return (
    <div>
      <button
        disabled={!isValid}
        className={isValid ? "handleButton" : "handleButton disabled"}
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
