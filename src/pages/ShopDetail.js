import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShopDetail = () => {
  const { id } = useParams(); //url에서 id추출
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch("/db.json")
      .then((r) => r.json()) //json형태로 데이터 변환
      .then((data) => {
        const found = data.product.find((m) => m.id === parseInt(id));
        setItem(found);
      })
      .catch(console.error);
  }, [id]); //의존성배열([id]): id가 바뀔 때마다 실행

  if (!item) return <p>데이터 불러오는 중...</p>;

  return (
    <div className="detail-card">
      <figure>
        <img src={item.image} alt={item.title} />
      </figure>
      <div className="textArea">
        <h3>{item.title}</h3>
        <span className="price">{item.price.toLocaleString()}원</span>
        <span className="tags">{item.tags.join(" · ")}</span>
        {item.recommended && <span className="bedge">추천</span>}
      </div>
    </div>
  );
};

export default ShopDetail;
