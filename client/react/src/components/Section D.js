import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import "./section-d.css";




class SectionD extends React.Component {
  render() {
    return (
     <section className="section-d text-center">
          <Container fluid style>
                       <div className="col-md-8">
                         <h2 className="heading">REGISTRATE y ÚNETE</h2>
                         <hr className="divider"/>
                               <div className="buttons text-center">
                              <button className="button">SING IN</button>
                              <button className="button">LOG IN</button>
                              </div>
                         <hr className="divider"/>
                      </div>
            </Container>
     </section>
     )
  }
}

export default SectionD;
