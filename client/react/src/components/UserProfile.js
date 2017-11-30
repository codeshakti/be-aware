import Footer from './Footer';
import Header from './Header';
import React, { Component } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom';
import { Container } from 'react-grid-system';
import awareApi from '../services/awareApi';

import "./UserProfile.css";



class UserProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }

    

    componentWillMount() {
        awareApi.retriveUser("5a1fcdf349cfdd4872193957")
            .then(user => {
                this.setState({ user })
            })
            .catch(console.error)
    }
    
    render() {
        const country = this.state.user && this.state.user.country
        const email = this.state.user && this.state.user.email
         const name = this.state.projectname && this.state.user.projectname
         const lastname = this.state.lastname && this.state.user.lastname
         const image = this.state.image && this.state.user.image


        return (
            <div>
                <div>
                    <Header />
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="well well-sm">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-4">
                                            <img src={image} alt="" className="img-rounded img-responsive" />
                                        </div>
                                        <div className="col-sm-6 col-md-8">
                                            <h4>
                                            </h4>
                                            <h4>
                                            </h4>

                                            <small><cite title="country">{country} <i className="glyphicon glyphicon-map-marker">
                                            </i></cite></small>
                                            <p>
                                                <i className="glyphicon glyphicon-envelope"></i>email {email}
                                                <br />
                                                <i className="glyphicon glyphicon-globe"></i>name {name}
                                                <br />
                                                <i className="glyphicon glyphicon-gift"></i>surname {lastname}
                                            </p>
                                    {/*       <div className="input-group">
                                              <input type="text" className="form-control" placeholder="Search for..."/>
                                              <span className="input-group-btn">
                                                <button className="btn btn-default" type="button">Go!</button>
                                              </span>
                                            </div>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h2>name + Projects</h2>
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
                                    {
                                    /*    this.state.user.projects && this.state.user.projects.map((project, i) => <tr>
                                            <td>{project._id}</td>
                                            <td>{project.CompanyName}</td>
                                            <td>{project.text}</td>
                                            <td>{project.country}</td>

                                        </tr>)*/
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}


export default UserProfile