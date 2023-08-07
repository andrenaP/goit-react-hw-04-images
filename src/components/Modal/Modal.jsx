import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.css';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ largeImage, onModalClose }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onModalClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onModalClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onModalClose();
    }
  };

  return createPortal(
    <div className="overlay" onClick={handleBackdropClick}>
      <div className="modal">
        <img src={largeImage} alt="Modal" className="modalImage" />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  onClick: PropTypes.func,
  largeImage: PropTypes.string.isRequired,
};
