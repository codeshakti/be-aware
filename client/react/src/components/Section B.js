import React from 'react';
import { Container } from 'react-grid-system';
import get2 from '../img/get2.png'

import "./section-b.css";

class SectionB extends React.Component {
  render() {
    return (
      <Container className="container">
        <section className="section-b">
              <div className="col-md-4">
               <a href="/contact">
                <img className="img-responsive" src={get2} alt="logo"/>
              </a>
              </div>
              <div>
                <h2 className="heading">GET TO</h2>
              </div>
              <div className="col-md-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt urna quis neque feugiat mollis. Etiam fermentum quis mi vel facilisis. Donec in ornare massa.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt urna quis neque feugiat mollis. Etiam fermentum quis mi vel facilisis. Donec in ornare massa.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt urna quis neque feugiat mollis. Etiam fermentum quis mi vel facilisis. Donec in ornare massa.
                ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt urna quis neque feugiat mollis. Etiam fermentum quis mi vel facilisis. Donec in ornare massa.
              </div>
      </section>
      </Container>
    )
  }
}

export default SectionB;
