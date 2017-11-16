import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import {Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router-dom'
import "./header.css"

const Header= () => (
  <div className="container-fluid">
    <div className="navbar-header">
      <NavItem className="navbar-brand" href="#">2Be-Aware</NavItem>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="/LandingPage">Home</a></li>
      <NavItem href="/Labour">Our Labour</NavItem>
      <NavItem href="/Contact">Contact</NavItem>
      <NavItem href="/About">About Us</NavItem>
      <NavItem href="/Dev">Dev Zone</NavItem>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <NavItem href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</NavItem>
      <NavItem href="#"><span className="glyphicon glyphicon-log-in"></span> Login</NavItem>
    </ul>
  </div>
)

export default Header;


