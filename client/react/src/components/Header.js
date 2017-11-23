
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import {Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import "./header.css"

const Header= () => (

<body>
    <div>
        <nav class="navbar navbar-default navigation-clean-button">
            <div class="container">
                <div class="navbar-header"><a class="navbar-brand" href="#">Company Name</a>
                    <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
                </div>
                <div class="collapse navbar-collapse" id="navcol-1">
                    <ul class="nav navbar-nav">
                        <li role="presentation"><a href="/Home">HOME</a></li>
                        <li role="presentation"><a href="/contact">CONTACT</a></li>
                        <li role="presentation"><a href="/labour">LABOUR</a></li>
                        <li role="presentation"><a href="/About">ABOUT</a></li>
                        <li role="presentation"><a href="/ApiZone">API</a></li>
                        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#">Dropdown <span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li role="presentation"><a href="#">First Item</a></li>
                                <li role="presentation"><a href="#">Second Item</a></li>
                                <li role="presentation"><a href="#">Third Item</a></li>
                            </ul>
                        </li>
                    </ul>
                    <p class="navbar-text navbar-right actions"><a class="navbar-link login" href="/Login">Log In</a> <a class="btn btn-default action-button" role="button" href="#">Sign Up</a></p>
                </div>
            </div>
        </nav>
    </div>
    
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>


)
export default Header;



