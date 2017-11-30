import React from 'react';
import Header from './Header.js';
import SectionA from './Section A.js';
import SectionB from './Section B.js';
import SectionC from './Section C.js';
import Footer from './Footer.js';
import './LandingPage';



class LandingPage extends React.Component {
     constructor(props){
    super(props)
        this.state= {
            user:''
        }
   } 


  componentWillReceiveProps(){
    this.setState({
      user: this.props.location.props
    })
  }
  render() {
    return (
      <div className="landing-page">
      <Header/>
      <SectionA/>
       <SectionB/>
        <SectionC/>
      <Footer/>
      </div>
      )
  }
}

export default LandingPage;