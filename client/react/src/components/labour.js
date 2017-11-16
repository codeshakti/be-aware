import Footer from './Footer';
import React, { Component } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import awareApi from '../services/awareApi'

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
		return(<div>
				{
					this.state.arrayLabours.map(obj => 
						<Container>
						<section className="arrayLabours">
				          <Row>
				          		<div>
				                  <h3 className="heading">{obj.charityName}</h3>
				                
				                  <p className="paragraph">
				                	<li>{obj.url}</li> 
				                	<li>{obj.city} </li>
				                	<li>{obj.state} </li>
				                	<li>{obj.category}</li>
				                  </p>
				                   <hr className="divider"/>
				              </div>
				          </Row>
				          </section>
      					</Container>





													)

				}
				</div>)
		}
}	

export default chooseLabours