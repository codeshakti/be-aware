import Footer from './Footer';
import Header from './Header';
import React, { Component } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom';
import { Container } from 'react-grid-system';
import awareApi from '../services/awareApi';





class OrgProfile extends Component {

	constructor(props) {
		super(props)
		this.state = {
			companyname:'',
			projectname:'',
			website:'',
			country:'',
			city:'',
			telephone:'',
			category:'',
			description:'',
			image:'',
			logo:'',


			orgs: [],
			projects:[],

		}
	}

handleChange = (e) => {
	this.setState({ [e.target.name]: e.target.value })
}

	componentDidMount() {
		awareApi.ListByOrg()
		.then(res => {
			this.setState({
			 orgs: res
		 })
			awareApi.ListByProject()
			.then(res => {
				console.log(res)
				this.setState({
					projects: res
				})

			})
		})
		.catch(console.error)
		console.log(this.state)
	}

	handleCreateProject(e, companyname, projectname, website, country, city, telephone, category, description, image) {
		e.preventDefault()
		awareApi.CreateProject(companyname,projectname, website, country, city, telephone, category, description, image)
		.then(res=> {
			this.setState({
				projects:res
			})
		})



	}

	render() {
	 return(
<div>
	<Header/>
		<div className="container">
			<div className="row">
				<div className="col-md-6">
								<img src={this.state.orgs.logo} alt="" className="img-rounded img-responsive" />

								<h4>{this.state.orgs.companyname}</h4>
								<h4>{this.state.orgs.website}</h4>
								<cite title="country">{this.state.orgs.country} 
								<i className="glyphicon glyphicon-map-marker"></i>
								</cite>
							<p>
								<i className="glyphicon glyphicon-envelope"></i>
								<br />
								<i className="glyphicon glyphicon-globe"></i>
								<br />
								<i className="glyphicon glyphicon-gift"></i>June 02, 1988
							</p>
				</div>
				<div className="col-md-6">
								<form action="r" method="post" accept-charset="utf-8" className="form" role="form">
										<h4>Create your project</h4>
										<div className="row">
										<input type="text" name="projectname" value={this.state.projectname} className="form-control input-md" placeholder="PROJECTNAME" onChange={this.handleChange} /></div>
										<input type="text" name="website" value={this.state.website} className="form-control input-md" placeholder="WEBSITE" onChange={this.handleChange}  />
										<input type="text" name="companyname" value={this.state.companyname} className="form-control input-md" placeholder="COMPANY NAME" onChange={this.handleChange}  />
										<input type="text" name="description" value={this.state.description} className="form-control input-md" placeholder="DESCRIPTION" onChange={this.handleChange}  />
										<input type="text" name="country" value={this.state.country} className="form-control input-md" placeholder="COUNTRY" onChange={this.handleChange}  />
										<input type="text" name="city" value={this.state.city} className="form-control input-md" placeholder="CITY" onChange={this.handleChange} />
										<input type="text" name="telephone" value={this.state.telephone} className="form-control input-md" placeholder="TELEPHONE" onChange={this.handleChange}  />
										<input type="text" name="image" value={this.state.image} className="form-control input-md" placeholder="IMAGE" onChange={this.handleChange} />
										<input type="text" name="category" value={this.state.category} className="form-control input-md" placeholder="CATEGORY" onChange={this.handleChange} />
										<button className="btn btn-md btn-primary btn-block signup-btn" type="submit" onClick={(e)=>{this.handleCreateProject(e,this.state.companyname,this.state.projectname,this.state.website,this.state.country,this.state.city,this.state.telephone,this.state.category,this.state.description,this.state.image)}}>Create</button>
								</form> 
						</div>		         
				</div>
	</div>            	
					<div className="container">
					<div className="row">
						<h2>{this.state.projects.companyname} Projects</h2>
							<div className="table-responsive">
							          	<table className="table">
									<thead>
											<tr>
											<th>#</th>
											<th>ONG</th>
											<th>PROJECT NAME</th>
											<th>DESCRIPTION</th>
											<th>COUNTRY</th>
											<th>CITY</th>
											<th>TELEPHONE</th>
										</tr>
									</thead>
											<tbody>
												{this.state.projects.length && this.state.projects.map(res => 
											<tr>
												<td>1</td>
												<td>{res.companyname}</td>
												<td>{res.projectname}</td>
												<td>{res.description}</td>
												<td>{res.country}</td>
												<td>{res.city}</td>
												<td>{res.telephone}</td>
										    </tr>
										)}
											</tbody>
								</table>
							</div>
						</div>
					</div>
					

				<Footer/>
			</div>
												
	)}
}



export default OrgProfile;