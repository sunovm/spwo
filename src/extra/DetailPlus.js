import React, { useState } from "react";

const DetailPlus = ({ onAddCart, openImage }) => {
  const [tab, setTab] = useState("detail"); //detail || review ||qna
  const handleAddCart = onAddCart || (() => {});
  const handleOpenImage = openImage || (() => {});

  return (
    <div className="product-detail">
      <div className="product-info">
        <figure>
          <img
            src="https://hdex.co.kr/web/product/small/202509/8bc931ec3514422adb4c953c41e43a78.jpg"
            alt="modal-img"
            className="modal-img"
            onClick={handleOpenImage}
            title="이미지를 클릭하면 확대해서 볼 수 있습니다."
          />
        </figure>
        <div className="text-area">
          <h3>우먼스 펌 서포트 부츠컷 레깅스 (Black)</h3>
          <p className="price">52,000원</p>
          <div className="action">
            <button type="button" className="btnCart" onClick={handleAddCart}>
              장바구니
            </button>
            <button type="button" className="btnZoom" onClick={handleOpenImage}>
              🔍 확대
            </button>
          </div>
        </div>
      </div>

      {/* tab */}
      <div className="tabs" role="tablist" aria-label="상품 정보 탭">
        <button
          type="button"
          role="tab"
          aria-selected={tab === "detail"}
          className={`tab ${tab === "detail" ? "active" : ""}`}
          onClick={() => setTab("detail")}
        >
          상세
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "review"}
          className={`tab ${tab === "review" ? "active" : ""}`}
          onClick={() => setTab("review")}
        >
          리뷰
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "qna"}
          className={`tab ${tab === "qna" ? "active" : ""}`}
          onClick={() => setTab("qna")}
        >
          문의
        </button>
      </div>

      {/* 탭 콘텐츠 */}
      <div className="tab-panel">
        {tab === "detail" && (
          <ul className="bullets">
            <li>가벼운 쿠셔닝으로 장시간 러닝에 적합</li>
            <li>통기성 좋은 매쉬 소재</li>
            <li>초보 러너에게 추천</li>
          </ul>
        )}

        {tab === "review" && (
          <div>
            <p>⭐️⭐️⭐️⭐️☆ 4.3/5 (128개)</p>
            <p>“발볼 넓은데 편해요!”</p>
          </div>
        )}

        {tab === "qna" && (
          <div>
            <p>Q. 세탁 방법?</p>
            <p>A. 미온수에 손빨래 해주세요.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailPlus;
