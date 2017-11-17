import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LandingPage from './LandingPage'
import ApiZone from './ApiZone'
import Header from './Header'
import Footer from './Footer'
import contact from './contact'
import About from './About'
import labour from './labour'


const Main = () => (
	<div className="Main">
	<Header/>
			<Footer/>
			<Switch>
			<Route exact path='/Home' component= {LandingPage}></Route>
			<Route path='/labour' component= {labour}></Route>
			<Route path='/contact' component= {contact}></Route>
			<Route path='/About' component= {About}></Route>
			<Route path='/ApiZone' component= {ApiZone}></Route>
			</Switch>
	</div>
	)

export default Main