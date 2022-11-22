import Auth from "hooks/Auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/LoadingPage.css";

const LoadingPage = () => {
  let local = localStorage.getItem("uid");
  Auth(local);

  return (
    <div className="main_loading">
      <div className="loading_container">
        <img
          className="loading_gif"
          src={process.env.PUBLIC_URL + "/image/loading.gif"}
        />
        <img
          className="loading_logo"
          src={process.env.PUBLIC_URL + "/image/logo2.png"}
        />
      </div>
    </div>
  );
};

export default LoadingPage;
