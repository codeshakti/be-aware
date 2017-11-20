import React from 'react';
import ReactDOM from 'react-dom';
import SectionA from './Section A.js';
import SectionB from './Section B.js';
import SectionC from './Section C.js';
import SectionD from './Section D.js';
import Footer from './Footer.js';



class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <SectionA/>
        <SectionB/>
        <SectionC/>
        <SectionD/>
        <Footer/>
      </div>
    )
  }
}

export default LandingPage;