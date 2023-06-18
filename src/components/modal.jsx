import classes from "./modal.module.css";

const Modal = ({ onCloseModal, children }) => {
  return (
    <>
      <div className={classes.backdrop} onClick={onCloseModal} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};
export default Modal;
