import ReactDOM from "react-dom";
import "./Modal.css";

const ModalPortal = ({ children, isOpen, closeModal }) => {

  const handleContainerClick = (e) => e.stopPropagation(); 

  return ReactDOM.createPortal(
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleContainerClick}>
        <button className="modal-close" onClick={closeModal}>X</button>
        {children}
      </div>
    </article>
    ,document.getElementById("modal-test")
  );
};

export default ModalPortal;
