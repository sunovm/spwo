import React, { useEffect, useState } from "react";
import BestCard from "../component/BestCard";
import vid from "../assets/vid.mp4";

const Best = () => {
  const [best, setBest] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((r) => r.json()) //json형태로 데이터 변환
      .then((data) => setBest(data.best || [])) //json에서 best 되어있는 애들만 뽑아줌(만약 다른 것들과 섞여있다면 걸러줌)
      .catch(console.error);
  }, []); //의존성배열([]): 첫 실행시 한번만
  return (
    <>
      <div className="vid-area">
        <video src={vid} autoPlay loop muted preload="auto" playsInline></video>
      </div>
      <div className="container">
        <div className="title-area">
          <h2>Best 7</h2>
          <small>
            총 <span>{best.length}</span>개의 상품이 있습니다.
          </small>
        </div>
        <div className="best-area">
          {best.map((item) => (
            <BestCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Best;
