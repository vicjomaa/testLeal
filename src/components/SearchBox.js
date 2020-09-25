import React,{Fragment} from 'react';


/**
Componente encargado de recoger la información que filtra las transacciones
 */


class SearchBox extends React.Component{

    render(){
        return(
        <Fragment>
                <div className="row mb-3">
                    <div className="col-sm-4 col-md-6 col-lg-3 ">
                        <label htmlFor="description">Tipo:</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="description" placeholder="Busca por tipo" value={this.props.description} />
                    </div>
                    <div className="col-sm-4 col-md-3 col-lg-3">
                        <label htmlFor="startDate">Desde:</label>
                        <input onChange={this.props.onChange} className="form-control" type="date" data-date-format="YYYY MMMM DD" name="startDate"value={this.props.startDate} />
                    </div>  
                    <div className="col-sm-4 col-md-3 col-lg-3 ">
                        <label htmlFor="startDate">Hasta:</label>
                        <input onChange={this.props.onChange} className="form-control" type="date" data-date-format="YYYY MMMM DD" name="endDate" value={this.props.endtDate}/>
                    </div>  
                    <div className="col-lg-3 d-flex align-self-end  mt-3 mt-lg-0">
                        <button type="button" onClick={this.props.fetchReboot} className="btn btn-secondary mr-3">Borrar</button> 
                        <button type="button" onClick={this.props.fetchFilter} className="btn btn-primary ">Filtrar</button> 
                    </div>  
                </div>  
        </Fragment>)    
    }
}

export default SearchBox ;