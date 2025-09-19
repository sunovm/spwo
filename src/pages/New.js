import React, { useEffect, useState } from "react";
import NewCard from "../component/NewCard";

const New = () => {
  const [rec, setRec] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((r) => r.json()) //요청한 데이터를 json형태로 변경
      .then((data) => {
        const product = data.product || []; //data.product가 있으면 그 값 그대로 보여주고, 없으면 빈 배열로 처리=> product 데이터가 항상 배열로 처리되도록 해주는 구문

        // db.json에서 recommended라는 값이 true인 요소만 모아서 새 배열 onlyNew 담기
        const onlyNew = product.filter((m) => m.new);
        setRec(onlyNew);
      })
      .catch((err) => {
        console.log("db.json 로드 실패: ", err);
      });
  }, []); //[]: 처음 실행했을 때 한번만
  

  return (
    <div className="container">
      <div className="title-area">
        <h2>신상품</h2>
        <small>
          총 <span>{rec.length}</span>개의 상품이 있습니다.
        </small>
      </div>
      <div className="card-new">
        {rec.map((item) => (
          <NewCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default New;
