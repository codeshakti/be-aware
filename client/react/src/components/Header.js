
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import "./header.css"

const Header= () => (

    <div>
        <nav className="navbar navbar-default navigation-clean-button">
            <div className="container">
                <div className="navbar-header"><a className="navbar-brand" href="#">Company Name</a>
                    <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
                </div>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="nav navbar-nav">
                        <li role="presentation"><a href="/Home">HOME</a></li>
                        <li role="presentation"><a href="/contact">CONTACT</a></li>
                        <li role="presentation"><a href="/labour">WORK</a></li>
                        <li role="presentation"><a href="/OrgProfile">OrgProfile</a></li>
                        <li role="presentation"><a href="/UserProfile">UserProfile</a></li>
                        <li role="presentation"><a href="/ProjectProfile">ProjectProfile</a></li>
                        <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#">Dropdown <span className="caret"></span></a>
                            <ul className="dropdown-menu" role="menu">
                                <li role="presentation"><a href="/Home">HOME</a></li>
                                <li role="presentation"><a href="/labour">WORK</a></li>
                                <li role="presentation"><a href="/contact">CONTACT</a></li>
                            </ul>
                        </li>
                    </ul>
                    <p className="navbar-text navbar-right actions"><a className="navbar-link login" href="/Login">Log In</a> <a className="btn btn-default action-button" role="button" href="/SignUp">Sign Up</a></p>
                </div>
            </div>
        </nav>
    </div>


)
export default Header;



