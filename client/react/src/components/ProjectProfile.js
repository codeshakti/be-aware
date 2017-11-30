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
	        <a className="thumbnail" href="#" data-toggle="modal" data-target="#modal">
                <img className="img-responsive" src={project.image} alt="Another alt text"/>
                <h4>{project.projectname}</h4><h5>{project.companyname}</h5>
            </a>
            <div class="caption">
              <div id="modal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                  <div className="modal-content">
                  <h2>{project.projectname}</h2>
                  <h4>{project.companyname}</h4>
                    <div className="modal-header">
                    <h3>{project.description}</h3>
                      <h4>{project.country}</h4>
                      <h4>{project.city}</h4>
                    </div>
                    <div className="modal-body">
                      <div>
                        <p>¿QUIERES COLABORAR?</p>
                      </div>
                      <div className="row">
                          <div className="col-12-xs text-center">
                              <button className="btn btn-success btn-md but" data-dismiss="modal"> YES </button>
                              <button className="btn btn-danger btn-md but" data-dismiss="modal"> NO </button>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
			</div>
			)}
	</div>



		)}
}
{/*<button className="btn btn-danger btn-xs but"
                                    type="button" data-toggle="modal" data-target={"#deleteProductModal-" + product.producto._id}>
                                    <span className="glyphicon glyphicon-remove"></span>
                            </button>
                              <div id={"deleteProductModal-" + product.producto._id} className="modal fade" role="dialog">*/}

export default ProjectProfile;
<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>