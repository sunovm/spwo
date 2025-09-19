import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate=useNavigate();
  return (
    <div className="card" onClick={() => {
        navigate(`/shop/${item.id}`);
      }}>
      <img src={item.image} alt={item.title} />
      <div className="textArea">
        <h3>{item.title}</h3>
        <span className="price">{item.price.toLocaleString()}원</span>
        <p className="desc">{item.desc}</p>
        <span className="tags">{item.tags.join(" · ")}</span>
      </div>
    </div>
  );
};

export default Card;
