import css from './Modal.module.css';

export const Modal = ({ url, tags }) => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <img src={url} alt={tags} />
      </div>
    </div>
  );
};
