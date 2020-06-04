
import Header from "./Header"
import Footer from "./Footer"
import './SignUp.css'
import React, { Component } from 'react';
import awareApi from '../services/awareApi';



class SignUp extends Component {
       constructor(props){
              super(props)
                     this.state = {
                            firstname:'',
                            lastname:'',
                            email:'',
                            country:'',
                            image:'',
                            password:'',
                            confirm_password:'',

                            users:[],
                     }
              }


handleChange = (e) => {
       this.setState({ [e.target.name]: e.target.value })
}


              handleCreateUser = (e, firstname, lastname, email, country, image, password, confirm_password) => {
              e.preventDefault()
              awareApi.CreateUser(firstname,lastname,email,country,image,password,confirm_password)
              .then(res=> {
                     this.setState({
                            users:res
                     })
              })
       }

  render() {
    return (
       <div className="SignUp">
       <div>
       <Header/>
              <div className="container" id="wrap">
                     <div className="row">
                            <div className="col-md-6 col-md-offset-3">
       <form onSubmit={this.handleCreateUser} action="r" method="post" accept-charset="utf-8" className="form" role="form"> <legend>Sign Up</legend>
       <div className="row">
       <div className="col-xs-6 col-md-6">
       <input type="text" name="firstname" value={this.state.firstname} className="form-control input-lg" placeholder="First Name" onChange={this.handleChange} />                        </div>
       <div className="col-xs-6 col-md-6">
       <input type="text" name="lastname" value={this.state.lastname} className="form-control input-lg" placeholder="Last Name" onChange={this.handleChange}  />
       </div>
       </div>
       <input type="text" name="email" value={this.state.email} className="form-control input-lg" placeholder="Your Email" onChange={this.handleChange} />
       <input type="text" name="country" value={this.state.country} className="form-control input-lg" placeholder="Your Country" onChange={this.handleChange} />
       <input type="text" name="image" value={this.state.image} className="form-control input-lg" placeholder="Your image" onChange={this.handleChange} />
       <input type="password" name="password" value={this.state.password} className="form-control input-lg" placeholder="Password" onChange={this.handleChange} />
       <input type="password" name="confirm_password" value={this.state.confirm_password} className="form-control input-lg" placeholder="Confirm Password" onChange={this.handleChange} />
       <div className="row">

       </div>

       <br />
       <span className="help-block">By clicking Create my account, you agree to our Terms and that you have read our Data Use Policy, including our Cookie Use.</span>
       <button className="btn btn-lg btn-primary btn-block signup-btn" type="submit" onClick={(e)=>{this.handleCreateUser(e,this.state.firstname,this.state.lastname,this.state.email,this.state.country,this.state.image,this.state.password,this.state.confirm_password)}}>
       Create my account</button>
       </form>
       </div>
       </div>
       </div>
       </div>
       <Footer/>
       </div>
       )
}
}

export default SignUp;
