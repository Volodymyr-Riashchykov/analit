import { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const { overlay, modal } = s;
const modalRoot = document.querySelector("#modal-root");

export default function Modal({onClose,children}) {
  useEffect(() => {
    const handleKeydown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
    
  return createPortal(
      <div className={overlay} onClick={handleBackdropClick}>
          <div className={modal}>{children}</div>
      </div>,
      modalRoot,
  );
    

}
