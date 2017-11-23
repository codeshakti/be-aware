import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import SectionA from './Section A.js';
import SectionB from './Section B.js';
import SectionC from './Section C.js';
import Button from './Button.js';
import Footer from './Footer.js';



class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
      <Header/>
        <SectionA/>
        <SectionB/>
        <SectionC/>
        <Button/>
        <Footer/>
      </div>
    )
  }
}

export default LandingPage;