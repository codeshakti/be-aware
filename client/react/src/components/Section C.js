import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import Button from './Button'
import "./section-c.css";




class SectionC extends React.Component {
  render() {
    return (
      <section className="section-c">
        <Container>
          <Row>
                <div>
                  <h2 className="heading">Colabora con nosotros</h2>
                  </div>
                  <div>
                  <hr className="divider"/>
                  </div>
                  <div>
                  <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt urna quis neque feugiat mollis. Etiam fermentum quis mi vel facilisis. Donec in ornare massa.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt urna quis neque feugiat mollis. Etiam fermentum quis mi vel facilisis. Donec in ornare massa.
                  </p>
              </div>
          </Row>
      </Container>
      <Button/>
      </section>
      )
  }
}

export default SectionC;
