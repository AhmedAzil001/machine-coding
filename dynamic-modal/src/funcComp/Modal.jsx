import { useEffect } from "react";
const Modal = ({ title, description, toggleModal }) => {

    const keyDownHandler= ({key}) => {
        if(key==="Escape") toggleModal();
    }

    useEffect(()=>{
        document.addEventListener("keydown", keyDownHandler);
        return ()=> document.removeEventListener("keydown", keyDownHandler)
    },[])

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="btn-div">
          <button onClick={toggleModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

