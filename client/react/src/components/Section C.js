import React from 'react';
import { Container } from 'react-grid-system';
import "./section-c.css";
import logo from '../img/partners.png'




class SectionC extends React.Component {
  render() {
    return (
       <Container className="container">
             <section className="section-c">
                <Container fluid styles>
                    <div>
                        <h2 className="heading">PARTNERS</h2>
                    </div>
                            <div className="col-md-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt urna quis neque feugiat mollis. Etiam fermentum quis mi vel facilisis. Donec in ornare massa.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt urna quis neque feugiat mollis. Etiam fermentum quis mi vel facilisis. Donec in ornare massa.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt urna quis neque feugiat mollis. Etiam fermentum quis mi vel facilisis. Donec in ornare massa.
                            </div>
                        <div className="col-md-4">
                      <img className="img-responsive" src={logo} alt="logo" styles="width:500px;height:600px;"/>
                        </div>
                </Container>
             </section>
      <br/>
      </Container>

     )
  }
}

export default SectionC;
