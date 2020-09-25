import React from 'react';
import LoginForm from '../components/LoginForm';
import PageLoading from '../components/PageLoading';
import Api from '../components/Api';
import Swal from 'sweetalert2/dist/sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


class LoginPage extends React.Component{
    state={
        form:{
            email:"",
            password:""         
        },
        error:null,
        loading:false,
        data:{
            code:101,
            message:""

        }
    };

    alertData=(check,message)=>{
        if (check){
            Swal.fire({
                icon: 'success',
                title: 'Excelente',
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
   
    handleSubmit =async(e) =>{
        e.preventDefault();  
        this.setState({
            error:null,
            loading:true,
        });
        try{
            const data = await Api.users.login(this.state.form.email,this.state.form.password)
            this.setState({
                error:null,
                loading:false,
            });
            switch(data.code){
                case 100:
                    this.props.history.push('/transactions/'+data.token);
                    break;
                case 101:
                    this.alertData(false,'El email o la contraseña no coinciden con ningun registro');
                    break;
                case 102:
                    this.alertData(false,'Hay un error en la solicitud. Intentalo de nuevo');
                    break;
                case 130:
                    this.alertData(false,'Hace falta el email o la contraseña');
                    break;
                default:
                    break;
            }         

        }catch(error){
            this.setState({
                error:error,
                loading:false,
            })
        }
    }

    handleChange =(e)=>{
        this.setState({
            form:{
                ...this.state.form,
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
                <div className="row ">
                    <div className="col-lg-6 col-md-6 col-12">
                            <h1>Login de usuarios <br/> en la Plataforma</h1>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <LoginForm onSubmit={this.handleSubmit} onChange={this.handleChange} formValues={this.state.form} />
                    </div>
                </div>
            </div>
        </div>
    )}
}

export default LoginPage;