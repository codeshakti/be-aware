import React from 'react';
import {NavItem, Image } from 'react-bootstrap';
import './Login.css'
import Header from "./Header"
import Footer from "./Footer"
import awareApi from '../services/awareApi'



class Login extends React.Component {
   constructor(props){
    super(props)
        this.state= {
            email:'',
            password:''
        }
   }

   handleChange = (e) => {
    console.log(e.target.name)
        this.setState({ [e.target.name]: e.target.value })
   }

   handleCreateLogin = (e) => {
    e.preventDefault()
    console.log('hola')
    const email = this.state.email
    const password = this.state.password

    awareApi.ListByName()
    .then(res=> {
        console.log(res)
        res.forEach((user)=>{
            console.log(email, password)
            if(email === user.email && password === user.confirm_password){

               this.props.history.push({pathname:'/home', props:user})
            }
        })
    })
   }
  render() {
    return (
    	<div className="custom_body">
    	<Header/>
    		<div className="container">
    			<div className="row">

    	   			 <div className="login_box">
    	        	<section className="main-box">
        	        <form>
        	        <div className="input-box">
            	        <span className="input-group-addon i_icon"><i className="glyphicon glyphicon-user"></i></span>
                        <input onChange={this.handleChange} id="email" type="text" className="form-control input_layout" name="email" placeholder="Email"/>
                    </div>
                    <div className="input-box">
            	         <span className="input-group-addon i_icon"><i className="glyphicon glyphicon-lock"></i></span>
                         <input onChange={this.handleChange} id="password" type="password" className="form-control input_layout" name="password" placeholder="Password"/>
                    </div>
                    </form>
                    <button type="submit" onClick={this.handleCreateLogin }className="btn btn-lg btn-primary btn-block signup-btn">LOGIN</button>
                </section>
    	    </div>
    	</div>
    </div>
     <Footer/>
</div>
	)
}
}

export default Login;
