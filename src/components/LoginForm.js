import React, { Fragment } from 'react';

/**
Componente para iniciar el login con email y contraseña
 */

class LoginForm extends React.Component{
    render(){     
        return(
            <Fragment>
                <form onSubmit={this.props.onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={this.props.onChange} className="form-control" type="text" name="email" value={this.props.formValues.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={this.props.onChange} className="form-control" type="text" name="password" value={this.props.formValues.password}/>
                </div>     
                <button onClick={this.handleClick} className="btn btn-primary">Login</button>
            </form>             
            </Fragment>
        )
    }
}

export default LoginForm;