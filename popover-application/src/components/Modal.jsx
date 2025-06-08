import React, { useEffect } from 'react';

const Modal = ({ component, onClose, title }) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <div className='modal-backdrop'></div>

      <div className='modal'>
        <div className='modal-heading'>
          <h4>{title}</h4>
          <button onClick={onClose}>Close</button>
        </div>
        <div>
          {component}
        </div>
      </div>
    </>
  );
};

export default Modal;
