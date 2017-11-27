import Footer from './Footer';
import Header from './Header';
import React, { Component } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom';
import { Container } from 'react-grid-system';
import awareApi from '../services/awareApi'

import "./labour.css";

class chooseLabours extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			arrayProjects: [],
		}
	}

	componentWillMount() {
		awareApi.ListByProject()
			.then(res => {
				this.setState({
					arrayProjects: res
				})
				console.log(res)
			})
			.catch(console.error)
	}



render() {
	return(
    <div>
    <div className="container">
    <Header/>
    {this.state.arrayProjects.map(function(labour, index){
      return index % 2 == 0 ?  <Container fluid style>
      <section className="section-labour">
                  <div>
                    <h2 className="heading">{labour.CompanyName}</h2>
                  </div>
                      <div className="col-md-8">
                      <p>{labour.text}</p>
                    </div>
                        <div className="col-md-4">
                          <img className="img-responsive" src={labour.image} alt="logo"/>
                        </div>
            </section>
            </Container>
          : <section className="section-labour2">
          <Container fluid style>
            <div className="col-md-4">
                <img className="img-responsive" src={labour.image} alt="logo"/>
                </div>
              <div>
                <h2 className="heading">{labour.CompanyName}</h2>
              </div>
              <div className="col-md-8">
                <p>{labour.text}</p>
              </div>
          </Container>
      </section>
    })}
      </div>
      <Footer/>
      </div>
    )}
}	

export default chooseLabours

