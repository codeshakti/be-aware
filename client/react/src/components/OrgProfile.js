import Footer from './Footer';
import Header from './Header';
import React, { Component } from 'react';
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


			org: {},
			projects:[],

		}
	}

handleChange = (e) => {
	this.setState({ [e.target.name]: e.target.value })
}

	componentDidMount() {
		const id = this.props.match.params.id
		console.log(id)
		awareApi.retriveOrg(id)
		.then(org => {
			console.log('OrgProfile componentWillMount retriveOrg', org)
			this.setState({
				org,
				projects: org.project
			})
		})
		.catch(console.error)

	}

	handleCreateProject(e, companyname, projectname, website, country, city, telephone, category, description, image) {
		const ongId = this.props.match.params.id
		e.preventDefault()
		awareApi.CreateProject(companyname,projectname, website, country, city, telephone, category, description, image, ongId)
		.then(res=> {
			this.setState({
				projects:res
			})
		})
	}

handleDeleteProject(e,_id){
		e.preventDefault()
		console.log(_id)
		awareApi.DeleteProject(_id)
			.then(res => {
					this.setState({
					projects:res
				})
		})
	}

	render() {
	const country = this.state.country && this.state.org.country
    const email = this.state.email && this.state.org.email
    const name = this.state.CompanyName && this.state.org.CompanyName
    const telephone = this.state.telephone && this.state.org.telephone
    const logo = this.state.logo && this.state.org.logo

	 return(
		 <div>
	<Header/>
		<div className="container">
			<div className="row">
				<div className="col-md-6">
								<img src={logo} alt="" className="img-rounded img-responsive" />
								<h4>{name}</h4>
								<h4></h4>
								<cite title="country">
								<i className="glyphicon glyphicon-map-marker"></i>
								</cite>
							<p>
								<i className="glyphicon glyphicon-envelope"></i>
								<br />
								<i className="glyphicon glyphicon-globe"></i>
								<br />
								<i className="glyphicon glyphicon-gift"></i>
							</p>
				</div>
				<div className="col-md-6">
								<form action="r" method="post" accept-charset="utf-8" className="form" role="form">
										<h2>Create your project</h2>
										<br/>

										<div className="row-fluid">
											<input type="text" name="projectname" value={this.state.projectname} className="form-control input-md" placeholder="PROJECTNAME" onChange={this.handleChange} />
											<input type="text" name="website" value={this.state.website} className="form-control input-md" placeholder="WEBSITE" onChange={this.handleChange}  />
											<input type="text" name="companyname" value={this.state.companyname} className="form-control input-md" placeholder="COMPANY NAME" onChange={this.handleChange}  />
											<input type="text" name="description" value={this.state.description} className="form-control input-md" placeholder="DESCRIPTION" onChange={this.handleChange}  />
											<input type="text" name="country" value={this.state.country} className="form-control input-md" placeholder="COUNTRY" onChange={this.handleChange}  />
											<input type="text" name="city" value={this.state.city} className="form-control input-md" placeholder="CITY" onChange={this.handleChange} />
											<input type="text" name="telephone" value={this.state.telephone} className="form-control input-md" placeholder="TELEPHONE" onChange={this.handleChange}  />
											<input type="text" name="image" value={this.state.image} className="form-control input-md" placeholder="IMAGE" onChange={this.handleChange} />
											<input type="text" name="category" value={this.state.category} className="form-control input-md" placeholder="CATEGORY" onChange={this.handleChange} />
										<button className="btn btn-lg signup-btn" type="submit" onClick={(e)=>{this.handleCreateProject(e,this.state.companyname,this.state.projectname,this.state.website,this.state.country,this.state.city,this.state.telephone,this.state.category,this.state.description,this.state.image)}}>Create</button>
										</div>
								</form>

						</div>
				</div>
	</div>
					<div className="container">
					<div className="row">
						<h2>{this.state.projects.length && this.state.projects.companyname} Projects</h2>
							<div className="table-responsive">
							          	<table className="table">
									<thead>
										<tr>
											<th>#</th>
											<th>ONG</th>
											<th>PROJECT</th>
											<th>DESCRIPTION</th>
											<th>COUNTRY</th>
											<th>CITY</th>
											<th>TELEPHONE</th>
											<th>DONE</th>
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

												<td>
												<button type="button" className="btn btn-success btn-xs"><span className="glyphicon glyphicon-ok"></span></button>
												<button type="button" className="btn btn-warning btn-xs"><span className="glyphicon glyphicon-pencil"></span></button>
												<button type="button" className="btn btn-danger btn-xs" onClick={(e)=>{this.handleDeleteProject(e,res._id)}}><span className="glyphicon glyphicon-remove"></span></button>
												</td>
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
