import React, { Fragment } from 'react';
import '../styles/ListResults.css'
import DetailModal from './DetailModal';

class ListResults extends React.Component{


  state = {
    modalIsOpen: false,
    transaction:{
       createdDate:'',
       value:'',
       points:'',
       type:''
    }
  };

   getDate =(fullDate) =>{
    var date = fullDate.split('T');
    return(date[0]);
   }


   handleOpenModal = () => {
    this.setState({ modalIsOpen: true});
  };

  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };


    render(){
        if(this.props.transactions.length === 0){
            return( <div>
                  <h3>No hay transacciones disponibles</h3>
              </div>)
          }
        return(
          <Fragment>
            <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Fecha</th>
                <th scope="col">Tipo</th>
                <th scope="col">Valor</th>
                <th scope="col">Puntos</th>
                
              </tr>
            </thead>
              {this.props.transactions.map((transaction,i)=>{
                  return(
                    <tbody onClick={()=>{
                      this.handleOpenModal();
                      this.state.transaction=transaction

                    }} key={i}>
                    <tr className="clickable-row" >
                        <td>{this.getDate(transaction.createdDate)}</td>
                        <td>{transaction.type}</td>
                        <td>{transaction.value}</td>
                        <td>{transaction.points}</td>                
                    </tr>
                </tbody>)   
                  })}               
          </table>
            <div>
            <DetailModal
            isOpen={this.state.modalIsOpen} 
            onClose={this.handleCloseModal}
            title ={"Detalle de la transacción"}
            transaction ={this.state.transaction}
            />
          </div>
     </Fragment>)    
    }
}

export default ListResults;