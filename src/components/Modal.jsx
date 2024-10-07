import styles from "./Modal.module.css";

function Modal({ children, onClose }) {
  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <dialog
        open
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </dialog>
    </>
  );
}

export default Modal;
