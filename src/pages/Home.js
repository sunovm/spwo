import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "../App.css";
import "react-multi-carousel/lib/styles.css";
import AllCard from "../component/AllCard";

//상단 스와이퍼(반응형에 따라 보여지는 개수 조정)
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Home = () => {
  const [rec, setRec] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/db.json`)
      .then((r) => r.json()) //요청한 데이터를 json형태로 변경
      .then((data) => {
        const product = data.product || []; //data.product가 있으면 그 값 그대로 보여주고, 없으면 빈 배열로 처리=> product 데이터가 항상 배열로 처리되도록 해주는 구문
        console.log("product 배열: ", product);

        // db.json에서 recommended라는 값이 true인 요소만 모아서 새 배열 onlyRecommended에 담기
        const onlyRecommended = product.filter((m) => m.recommended);

        const firstFour = onlyRecommended.splice(0, 4);

        setRec(firstFour);
      })
      .catch((err) => {
        console.log("db.json 로드 실패: ", err);
      });
  }, []); //[]: 처음 실행했을 때 한번만

  return (
    <div className="contents">
      <Carousel
        responsive={responsive}
        swipdable={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        infinite
        className="hero-slide"
      >
        <div>
          <img
            src="https://hdex.co.kr/web/product/small/202505/3a6938e1d949472a5b291745b5fa0cc2.jpg"
            alt="스포티 링거 머슬핏 숏 슬리브 (White)"
          />
        </div>
        <div>
          <img
            src="https://hdex.co.kr/web/product/small/202509/8bc931ec3514422adb4c953c41e43a78.jpg"
            alt="우먼스 펌 서포트 부츠컷 레깅스 (Black)"
          />
        </div>
        <div>
          <img
            src="https://hdex.co.kr/web/product/small/202509/770c1f2d0458e86bb176e1d95563d3a0.jpg"
            alt="크랙 프린티드 후디 (Navy)"
          />
        </div>
        <div>
          <img
            src="https://hdex.co.kr/web/product/small/202508/7f2774cb2cf4d1fb2860c348139b135f.jpg"
            alt="코어 백 로고 피그먼트 롱 슬리브 (Charcoal)"
          />
        </div>
      </Carousel>

      <div className="intro-text">
        <h2>
          <span>Move Freely, <span>Wear SPWO</span></span>
          <span>자유로운 움직임을 위한 완벽한 스포츠웨어</span>
        </h2>
        <div className="text-area">
          <p>SPWO는 운동 중에도 편안함과 스타일을 동시에 제공합니다.</p>
          <p>신축성과 통기성을 갖춘 소재로 자유로운 움직임을 보장합니다.</p>
          <p>러닝, 요가, 트레이닝 등 모든 활동에 최적화된 스포츠웨어입니다.</p>
        </div>
      </div>

      <div className="hot-area">
        <h2>Hot 🔥</h2>
        <div className="hot-card">
          {
            rec.map((item)=>(
              <AllCard key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
