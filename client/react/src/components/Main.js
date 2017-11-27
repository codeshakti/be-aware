import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LandingPage from './LandingPage'
import ApiZone from './ApiZone'
import Footer from './Footer'
import contact from './contact'
import About from './About'
import labour from './labour'
import Login from './Login'
import SignUp from './SignUp'
import UserProfile from './UserProfile'
import ProjectProfile from './ProjectProfile'
import OrgProfile from './OrgProfile'


const Main = () => (
	<div className="Main">
			<Switch>
			<Route exact path='/' component= {LandingPage}></Route>
			<Route path='/home' component= {LandingPage}></Route>
			<Route path='/labour' component= {labour}></Route>
			<Route path='/contact' component= {contact}></Route>
			<Route path='/OrgProfile' component= {OrgProfile}></Route>
			<Route path='/Login' component= {Login}></Route>
			<Route path='/SignUp' component= {SignUp}></Route>
			<Route path='/UserProfile' component= {UserProfile}></Route>
			<Route path='/ProjectProfile' component= {ProjectProfile}></Route>
			</Switch>
	</div>
	)

export default Main