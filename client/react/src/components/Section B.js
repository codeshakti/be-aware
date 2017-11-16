import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

import "./section-b.css";
class SectionB extends React.Component {
  render() {
    return (
      <section className="section-b">
        <Container>
          <Row>
                <Col lg={6}>
                <img className="article-cover" src="./images/Article Cover.svg" />
                </Col>
                <div>
                  <h2 className="heading">Nuestras acciones y obras</h2>
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

export default SectionB;
