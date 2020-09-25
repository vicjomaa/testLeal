import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import ResultsPage from '../pages/ResultsPage';
import NotFound from '../pages/NotFound';
import Layout from './Layout';
import PropTypes from 'prop-types';

/**
 Este componente gestiona la visualización de las páginas  y las direcciones de acceso
 */


function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={LoginPage}/>
                    <Route exact path="/transactions/:token" component={ResultsPage}/>
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
    
}

App.propTypes={
    LoginPage:"Página de login",
    ResultsPage:"Página de transacciones",
    NotFound:"Página no encontrada"
};
export default App;