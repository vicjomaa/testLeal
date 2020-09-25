import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../images/logo.png';


/**
Header de las paginas
 */

class Navbar extends React.Component{
    dropdown =() => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
    render(){
        return(
            <div className="topnav" id="myTopnav">
                <Link to="https://leal.co/"><img className="Active" src={logo} alt="logo" /></Link>
                <Link className="option" id="item" to="/">Login</Link>
                <a className="icon" onClick={this.dropdown}>
                    <i className="fa fa-bars"></i>         
                </a>
          </div>
               
        )


    }
}

export default Navbar;
