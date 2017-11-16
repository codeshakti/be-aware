import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import "./section-a.css";




class SectionA extends React.Component {
  render() {
    return (
      <section className="section-a">
        <Container>
          <Row>
                <div>
                  <h2 className="heading">Nuestros colaboradores</h2>
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
      </section>
      )
  }
}

export default SectionA;
