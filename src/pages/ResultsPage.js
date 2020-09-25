import React from 'react';
import ListResults  from '../components/ListResults';
import SearchBox  from '../components/SearchBox';
import FilterData  from '../components/FilterData';
import Api from '../components/Api';
import Modal from '../components/Modal';
import Swal from 'sweetalert2/dist/sweetalert2';
import PageLoading from '../components/PageLoading';


/**
Página encargada de mostrar resultados de las transacciones del usuario
 */

class PageResult extends  React.Component{

    
    state={
        loading:false,
        error:null,
        updateList:true,
        user:{
            id:"",
            firstName:"",
            lastName:"",
        },
        data:{
            code:"",
            transactions:[],
            transactionShow:[],
        },
        search:{
            description:"",
            startDate:"",
            endDate:""
        }
    }
    componentDidMount(){        
        this.fetchResults('','');
    } 
    alertData=(check,message)=>{
        if (check){
            Swal.fire({
                icon: 'success',
                title: 'Bienvenido',
                text: message,
            });
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: message,
              });
        }      
    }

    fetchResults =async(startDate,endDate) =>{
        this.setState({
            error:null,
            loading:true,
            updateList:false
        });

        try{
            const token =this.props.match.params.token;
            const data = await Api.users.listTransactions(startDate,endDate,token);
            this.setState({
                error:null,
                loading:false,
                updateList:true,
                data:{
                    code:data.code,
                    transactions:data.data,
                    transactionShow:data.data
                },
                user:this.parseJwt(token)
            });
            switch(data.code){
                case 100:
                    this.alertData(true,"Este es el historial de transacciones");
                    break;
                case 120:
                    this.alertData(false,"error en el token");
                    break;
                default:
                    break;
            }         
            console.log("Data Loaded"+data.code);

        }catch(error){
            this.setState({
                error:error,
                loading:false,
                updateList:false
            })
        }
    }

    handleFilter = async(description, startDate, endDate) =>{
        var startDateGT =new Date(startDate).getTime();
        var endDateGT =new Date(endDate).getTime(); 
        this.state.data.transactionShow = await FilterData(this.state.data.transactions,startDateGT,endDateGT,description);    
        this.setState({
           updateList:true
        });
    }
    parseJwt = (token) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    };

    handleChange=(e)=>{
        this.setState({
           search:{
               ...this.state.search,
               [e.target.name]:e.target.value
           }
        });
    }

    render(){
        if(this.state.loading){
            return <PageLoading/>;
        }
        return(  
        <div className="Home">
            <div className="container">
                <div className="row  mt-3 mt-lg-0  mb-3 mb-lg-3">
                    <div className="col">
                    <h3 className="card-title font-weight-bolder">{this.state.user.firstName} {this.state.user.lastName}</h3>
                    <h6 className="card-subtitle mb-2 text-muted ">Reporte de Transaciones</h6>
                    </div>
                </div>
                <div className="row mt-3 mt-lg-4  mb-3 mb-lg-3">
                    <div className="col">
                        <SearchBox
                         fetchFilter={() =>this.handleFilter(this.state.search.description,this.state.search.startDate,this.state.search.endDate)}
                         fetchReboot={() =>{this.handleFilter('','',''); this.setState({
                            search:{
                                description:"",
                                startDate:"",
                                endDate:""
                            }
                        }) }
                        }
                         onChange={this.handleChange} 
                         description={this.state.search.description}
                         startDate={this.state.search.startDate}
                         endDate={this.state.search.endDate}/>
                        {this.state.updateList &&<ListResults transactions={this.state.data.transactionShow} />}
                    </div>
                </div>
            </div>
        </div>)
    }

}

export default PageResult;