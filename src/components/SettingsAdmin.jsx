import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../style/SettingsAdmin.css";
import Colabsible from "./Colabsible";

const SettingsAdmin = () => {
  const { movies } = useSelector((state) => state.movies);
  const navigate = useNavigate();
  const count = useSelector((state) => state.movies.largeBg).length;

  return (
    <div className="settingsAdmin">
      <div className="settingsAdmin_p_parent">
        <p>{movies.length} Movies</p>
        <p>{count} Carusel</p>
      </div>
      <div>
        <div
          className="handleButtonReg"
          onClick={() => navigate("/settings/createmovie")}
        >
          Create Movie
        </div>
        <Colabsible />
        <div
          className="handleButtonReg"
          onClick={() => navigate("/settings/changemovieinfo")}
        >
          Change Movie
        </div>
      </div>
    </div>
  );
};

export default SettingsAdmin;
