import React from 'react'
import { useNavigate } from 'react-router-dom';

const BestCard = ({item}) => {
  const navigate = useNavigate();
  return (
    <div
      className="best-card"
      onClick={() => {
        navigate(`/best/${item.id}`);
      }}
    >
      <figure>
        <img src={item.image} alt={item.title} />
      </figure>
      <div className="textArea">
        <h3>{item.title}</h3>
        <span className="price">{item.price.toLocaleString()}원</span>
        <span className="tags">{item.tags.join(" · ")}</span>
        {item.recommended&&<span className="bedge">추천</span>}
      </div>
    </div>
  )
}

export default BestCard