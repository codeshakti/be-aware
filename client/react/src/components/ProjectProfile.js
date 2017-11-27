import Footer from './Footer';
import Header from './Header';
import React, { Component } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom';
import { Container } from 'react-grid-system';
import awareApi from '../services/awareApi';





class ProjectProfile extends Component {

	constructor(props) {
		super(props)
		this.state = {
			project: {}
		}
	}

componentDidMount() {
		awareApi.ListByProject()
			.then(res => {
				this.setState({
					project: res[0]
				})
			})
            .catch(console.error)
		  console.log(this.state)
        }

render(){
	return(
		<div>
		<Header/>
		<div className="container">
 			<div className="row">
			    <div className="col-lg-3 col-sm-4 col-xs-6">
			        <a href="#" className="thumbnail">
			             <img src="http://placehold.it/350x150" className="img-responsive"/>
			        </a>
			    </div>
			     <div className="col-lg-3 col-sm-4 col-xs-6">
			        <a href="#" className="thumbnail">
			             <img src="http://placehold.it/350x150" className="img-responsive"/>
			        </a>
			    </div>
			    <div className="col-lg-3 col-sm-4 col-xs-6">
			        <a href="#" className="thumbnail">
			             <img src="http://placehold.it/350x150" className="img-responsive"/>
			        </a>
			    </div>
			    <div className="col-lg-3 col-sm-4 col-xs-6">
			        <a href="#" className="thumbnail pull-left">
			             <img src="http://placehold.it/350x150" className="img-responsive"/>
			        </a>
			    </div>
			    <div className="col-lg-3 col-sm-4 col-xs-6">
			        <a href="#" className="thumbnail">
			             <img src="http://placehold.it/350x150" className="img-responsive"/>
			        </a>
			    </div>
			    <div className="col-lg-3 col-sm-4 col-xs-6">
			        <a href="#" className="thumbnail">
			             <img src="http://placehold.it/350x150" className="img-responsive"/>
			        </a>
			    </div>
			    <div className="col-lg-3 col-sm-4 col-xs-6">
			        <a href="#" className="thumbnail">
			             <img src="http://placehold.it/350x150" className="img-responsive"/>
			        </a>
			    </div>
			    <div className="col-lg-3 col-sm-4 col-xs-6">
			        <a href="#" className="thumbnail">
			             <img src="http://placehold.it/350x150" className="img-responsive"/>
			        </a>
			    </div>
			    <div className="col-lg-3 col-sm-4 col-xs-6">
			        <a href="#" className="thumbnail">
			             <img src="http://placehold.it/350x150" className="img-responsive"/>
			        </a>
			    </div>
			    <div className="col-lg-3 col-sm-4 col-xs-6">
			        <a href="#" className="thumbnail">
			             <img src="http://placehold.it/350x150" className="img-responsive"/>
			        </a>
			    </div>
			    <div className="col-lg-3 col-sm-4 col-xs-6">
			        <a href="#" className="thumbnail">
			             <img src="http://placehold.it/350x150" className="img-responsive"/>
			        </a>
			    </div>
			    <div className="col-lg-3 col-sm-4 col-xs-6">
			        <a href="#" className="thumbnail">
			             <img src="http://placehold.it/350x150" className="img-responsive"/>
			        </a>
				</div>
			</div>
			</div>
			<Footer/>
    </div>
 
		)}
}

export default ProjectProfile;