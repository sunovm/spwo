import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import DetailPlus from'./DetailPlus';
import Modal from './component/Modal';
import Toast from './component/Toast';
import '../Detail.css'

const Detail = () => {
    const [isModalOpen,setIsModalOpen]=useState(false);
    const [cartCount,setCartCount]=useState(0);
    const [toast,setToast]=useState(null);

    const openImage=()=>setIsModalOpen(true);
    const closeImage=()=>setIsModalOpen(false);
    const addCart=()=>{
        setCartCount((prev)=>prev+1);
        setToast({message: '장바구니에 추가되었습니다.'});
    }
    
    // 토스트 자동 닫힘
    // 토스트가 뜨면 1.8초 뒤에 사라지고, 중간에 변경/종료되면 타이머를 정리
    useEffect(()=>{
        if(!toast) return;
        const t=setTimeout(()=>setToast(null),1800);
        return ()=>clearTimeout(t); //clean코드로 timeout함수를 종료
    },[toast]) //toast값이 바뀔 때마다 실행

    // esc 모달 닫기
    useEffect(()=>{
        const onKey=(e)=>{
            if(e.key==='Escape') setIsModalOpen(false)
        }
        window.addEventListener('keydown',onKey); //콜백함수: 내 안에서 함수를 실행해서 또 다른 함수 값을 불러옴
        return()=>window.removeEventListener('keydown',onKey)
    },[])
  return (
    <div className="product-wrap">
        <header>
        <h1 className="logo">
            <Link to='/'>
            <img src={logo} alt="logo" />
            SPWO
            </Link>
        </h1>
        <div className="cart">
            🛒 {cartCount}
        </div>
        </header>

        <main>
            <DetailPlus onAddCart={addCart} openImage={openImage} />
        </main>

        {/* modal 열림 상태일 때만 렌더링 */}
        {
            isModalOpen && (
                <Modal onClose={closeImage}>
                    <img src="https://hdex.co.kr/web/product/small/202509/8bc931ec3514422adb4c953c41e43a78.jpg" alt="modal-img" className='modal-img'/>
                </Modal>
            )
        }

        {toast&&<Toast>{toast.message}</Toast>}
    </div>
  )
}

export default Detail