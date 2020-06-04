import React from 'react';
import { Container } from 'react-grid-system';
import "./section-a.css";
import logo from '../img/who.png'
import logo2 from '../img/logo2.png'




class SectionA extends React.Component {
  render() {
    return (
    <Container className="container">
             <section className="section-a">
                 <div>
                    <div className="text-center">
                        <img className="img" src={logo2} alt="logo"/>
                    </div>
                    </div>
                    <br/>
                    <div>
                        <h2 className="heading">Nuestras acciones y obras</h2>
                    </div>
                            <div className="col-md-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt urna quis neque feugiat mollis. Etiam fermentum quis mi vel facilisis. Donec in ornare massa.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt urna quis neque feugiat mollis. Etiam fermentum quis mi vel facilisis. Donec in ornare massa.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt urna quis neque feugiat mollis. Etiam fermentum quis mi vel facilisis. Donec in ornare massa.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt urna quis neque feugiat mollis. Etiam fermentum quis mi vel facilisis. Donec in ornare massa.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt urna quis neque feugiat mollis. Etiam fermentum quis mi vel facilisis. Donec in ornare massa.
                            </div>
                        <div className="col-md-4">
                        <a href="/labour">
                      <img className="img-responsive" src={logo} alt="logo"/>
                        </a>
                        </div>
             </section>
 </Container>


      )
    }
  }

      export default SectionA;
