import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Modal.css'

/**
Estructura de visualización de modals
 */


function Modal(props) {
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="modal-back">
      <div className="modal-container">      
        <div className="modal-content">
          <div className="modal-header-v">
          <h4 className="modal-title font-weight-bolder">{props.title}</h4>
          </div>
          <div className="modal-body">
          {props.children}
          </div>
          <div className="modal-footer-v"> 
          <button onClick={props.onClose} className="btn btn-primary"> Cerrar
          </button>
          </div>   
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;
