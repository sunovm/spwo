import React from 'react'

const NewCard = ({item}) => {
  return (
    <div className="new-card">
      <img src={item.image} alt={item.title} />
      <div className="textArea">
        <h3>{item.title}</h3>
        <span className="price">{item.price.toLocaleString()}원</span>
        <p className="desc">{item.desc}</p>
        <span className="tags">{item.tags.join(" · ")}</span>
      </div>
    </div>
  );
}

export default NewCard