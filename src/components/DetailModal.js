import React from 'react';
import Modal from './Modal';

function DetailModal(props) {

  var dateFull = props.transaction.createdDate.split(/[T,.]+/);
  var date =dateFull[0];
  var hour= dateFull[1];
  

 
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} title={props.title}>
      <div className="DeleteBadgeModal">
      <div className="row p-3">
      <div className="col-6 border border-warning border-left-0 border-bottom-0 border-top-0">
          <h6 className="card-subtitle  text-muted">Valor</h6>
          <div className="d-flex" ><h2 className="font-weight-bold" >{props.transaction.value}</h2><p className="mt-3 ml-2">COP</p></div>      
          <h6 className="card-subtitle mt-  text-muted">Puntos</h6>
          <h1 className="font-weight-bold" >{props.transaction.points}</h1>          
        </div>
        <div className="col-6">
          <h6 className="card-subtitle text-muted">Fecha</h6>
          <h6 className="font-weight-bold" >{date}</h6>   
          <h6 className="card-subtitle mt-2 text-muted">Hora</h6>
          <h6 className="font-weight-bold" >{hour}</h6>   
          <h6 className="card-subtitle mt-3 text-muted">Tipo</h6>
          <h5 className="font-weight-bold" >{props.transaction.type}</h5>    
        </div>    
      </div>
     
      
        
      </div>
    </Modal>
  );
}

export default DetailModal;