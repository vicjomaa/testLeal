import React from 'react';
import Navbar from './Navbar';


/**
Estructura general del render de las páginas
 */


function Layout(props){
    return(
        <React.Fragment>
            <Navbar/>
            {props.children}
        </React.Fragment>
        );

}

export default Layout;