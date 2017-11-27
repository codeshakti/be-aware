import Footer from './Footer';
import Header from './Header';
import React, { Component } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom';
import { Container } from 'react-grid-system';
import awareApi from '../services/awareApi';

import "./UserProfile.css";



class userProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {},
            userproject: []
        }
    }

    componentDidMount() {
        //const id = this.props.match.params.id 
        awareApi.ListByName()
            .then(res => {
                this.setState({
                    user: res[0]
                })
            })
            .catch(console.error)
        awareApi.UserProjects()
            .then(res => {
                console.log(res)
                this.setState({
                    userproject: res
                })
                console.log(this.state)
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
                                                <i className="glyphicon glyphicon-gift"></i>June 02, 1988</p>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-primary">
                                                    Social</button>
                                                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                                    <span className="caret"></span><span className="sr-only">Social</span>
                                                </button>
                                                <ul className="dropdown-menu" role="menu">
                                                    <li><a href="#">Twitter</a></li>
                                                    <li><a href="https://plus.google.com/+Jquery2dotnet/posts">Google +</a></li>
                                                    <li><a href="https://www.facebook.com/jquery2dotnet">Facebook</a></li>
                                                    <li className="divider"></li>
                                                    <li><a href="#">Github</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h2>{this.state.user.firstName} Projects</h2>
                        <p>The table-responsive className creates a responsive table which will scroll horizontally on small devices (under 768px). When viewing on anything larger than 768px wide, there is no difference:</p>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>ONG </th>
                                        <th>ONG</th>
                                        <th>STATUS</th>
                                        <th>CONTACT</th>
                                        <th>EDIT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.userproject.length && this.state.userproject[2].projects.map((project, i) => <tr>
                                            <td>{i + 1}</td>
                                            <td>{project.CompanyName}</td>
                                            <td>{}</td>
                                            <td>{project.country}</td>
                                            <td>New York</td>
                                            <td>USA</td>
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


export default userProfile