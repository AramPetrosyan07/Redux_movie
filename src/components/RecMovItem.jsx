import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/RecMovItem.css";

const RecMovItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      className="rec_mov_item"
      onClick={() => {
        navigate(`/detail/${item.id}`);
      }}
    >
      <div
        className="rec_mov_background"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          borderRadius: "20px",
        }}
      ></div>
    </div>
  );
};

export default RecMovItem;
