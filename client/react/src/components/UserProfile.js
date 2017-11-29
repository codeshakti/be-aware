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
        awareApi.retriveUser("5a1bee80060565444a8055dd")
            .then(res => {
                this.setState({
                    user: res
                })
            })
            .catch(console.error)
    }
    
    render() {
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
                                            <img src="https://pbs.twimg.com/profile_images/616523971299799040/2TmsQKJa.jpg" alt="" className="img-rounded img-responsive" />
                                        </div>
                                        <div className="col-sm-6 col-md-8">
                                            <h4>{this.state.user.firstName}
                                            </h4>
                                            <h4>{this.state.user.lastName}
                                            </h4>

                                            <small><cite title="country">{this.state.user.country} <i className="glyphicon glyphicon-map-marker">
                                            </i></cite></small>
                                            <p>
                                                <i className="glyphicon glyphicon-envelope"></i>{this.state.user.email}
                                                <br />
                                                <i className="glyphicon glyphicon-globe"></i>{this.state.user.country}
                                                <br />
                                                <i className="glyphicon glyphicon-gift"></i>June 02, 1988
                                            </p>
                                           <div className="input-group">
                                              <input type="text" className="form-control" placeholder="Search for..."/>
                                              <span className="input-group-btn">
                                                <button className="btn btn-default" type="button">Go!</button>
                                              </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h2>{this.state.user.firstName} Projects</h2>
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
                                        this.state.user.projects && this.state.user.projects.map((project, i) => <tr>
                                            <td>{project._id}</td>
                                            <td>{project.CompanyName}</td>
                                            <td>{project.text}</td>
                                            <td>{project.country}</td>

                                        </tr>)
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