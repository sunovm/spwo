import React, { useEffect, useState } from 'react'
import AllCard from '../component/AllCard';

const Shop = () => {
  const [all, setAll]=useState([]); //전체 데이터 상태
  const [showAll, setShowAll]=useState(false); //전체보기(더보기) 초기값은 false(처음에는 전체보기 상태가 아님)

  useEffect(()=>{
    fetch('/db.json')
      .then(r=>r.json()) //json형태로 데이터 변환
      .then(data=>setAll(data.product || [])) //json에서 product라고 되어있는 애들만 뽑아줌(만약 다른 것들과 섞여있다면 걸러줌)
      .catch(console.error)
  },[]); //의존성배열([]): 첫 실행시 한번만

  const visible=showAll?all:all.slice(0,10);
  const restCount=Math.max(all.length-10,0); //전체 데이터 개수: 10을 뺀 나머지를 보여주고, 나머지가 음수일 경우에는 0으로 처리
  return (
    <div className="container">
      <div className="title-area">
        <h2>상품 전체보기</h2>
        <small>총 <span>{all.length}</span>개의 상품이 있습니다.</small>
      </div>
      <div className="product-area">
        {visible.map((item)=>(
          <AllCard key={item.id} item={item} />
        ))}
      </div>

      {
        !showAll&&restCount>0&&(
          <div className='btn-area'>
            <button onClick={()=>setShowAll(true)}>
              더보기 (+{restCount})
            </button>
          </div>
        )
      }
    </div>
  )
}

export default Shop