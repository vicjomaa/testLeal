import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import ResultsPage from '../pages/ResultsPage';
import NotFound from '../pages/NotFound';
import Layout from './Layout';


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

export default App;