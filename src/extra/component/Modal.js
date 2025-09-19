import React, { useEffect } from "react";
//body영역에 스크롤이 생기지 않게 함
const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  return (
    <div className="modal-bg" onClick={onClose} role="'modal">
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} type="button">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
