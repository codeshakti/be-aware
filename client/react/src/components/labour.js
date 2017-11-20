import Footer from './Footer';
import React, { Component } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import awareApi from '../services/awareApi'
import searchForm from './searchform.js'

import "./labour.css";

class chooseLabours extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			arrayLabours: [],
		}
	}

	componentWillMount() {
		awareApi.searchByName()
			.then(res => {
				this.setState({
					arrayLabours: res
				})
				console.log(res)
			})
			.catch(console.error)
	}

	render() {
		return(
			<div className="container">
				{
					this.state.arrayLabours.map(obj => 
      				<section className="labour">
          			<Container fluid style>
          			<div className="row">
          			<div>
          				<searchform/>
          				</div>
			          <div>
			            <h3 className="heading">{obj.charityName}</h3>
			          </div>
          				<div className="col-md-8">
				        	<h4>Url: {obj.url}</h4> 
				        	<h4>City: {obj.city}</h4> 
				        	<h4>State: {obj.state}</h4>
				        	<h4>Category: {obj.category}</h4>
			              </div>
					          <div className="col-md-4">
					            <img className="img-responsive" src="http://lorempixel.com/200/200/" alt="logo"/>
					          </div>
      		</div>
               <div>
                  <hr className="divider"/>
               </div>
        </Container>
      	</section>
		)}	
		</div>
		)}
}	

export default chooseLabours