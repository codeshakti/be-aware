import Footer from './Footer';
import Header from './Header';
import React, { Component } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom';
import { Container } from 'react-grid-system';
import awareApi from '../services/awareApi';


class ProjectProfile extends Component {

	constructor(props) {
		super(props);

		this.state = {
			projects: [],
		}
	}

componentWillMount() {
		awareApi.ListByProject()
			.then(res => {
				this.setState({
					projects: res
				})
				console.log(res)
			})
            .catch(console.error)
        }

render(){
	return(
	<div>
		<Header/>
		{this.state.projects.map(project =>
			<div className ="col-lg-3 col-sm-4 col-xs-6">
	        <a href="#" className="thumbnail">
	             <img src={project.image} className="img-responsive"/>
	             <h2>{project.ProjectName}</h2>
	        </a>
			</div>

		)}
	</div>


 
		)}
}

export default ProjectProfile;