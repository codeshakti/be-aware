
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import "./header.css"
import home from '../img/home.png'
import get from '../img/get.png'
import what from '../img/what.png'

const Header= () => (

    <div>
        <nav className="navbar navbar-default navigation-clean-button">
            <div className="container">
                    <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
                </div>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="nav navbar-nav">
                        <a href="/home">
                        <img src={home} styles="width:1px"/>
                        </a>
                        <a href="/contact">
                        <img src={get} styles="width:1px"/>
                        </a>
                         <a href="/ProjectProfile">
                        <img src={what} styles="width:1px"/>
                        </a>
                        <li role="presentation"><a href="/OrgProfile/5a1a970ae384697478159623">OrgProfile</a></li>
                        <li role="presentation"><a href="/UserProfile/5a1fcdf349cfdd4872193957">UserProfile</a></li>
                    </ul>
                    <p className="navbar-text navbar-right actions"><a className="navbar-link login" href="/Login">Log In</a> <a className="btn btn-default action-button" role="button" href="/SignUp">Sign Up</a></p>
                </div>
        </nav>
    </div>


)
export default Header;


