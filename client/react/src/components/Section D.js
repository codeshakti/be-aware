import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import Button from './Button'
import "./section-d.css";




class SectionD extends React.Component {
  render() {
    return (
     <section className="section-d text-center">
          <Container fluid style>
                       <div className="col-md-8">
                         <h2 className="heading">REGISTRATE y ÚNETE</h2>
                         <hr className="divider"/>
                         <Button/>   
                         <hr className="divider"/>
                      </div>
            </Container>
     </section>
     )
  }
}

export default SectionD;
