import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-grid-system';
import "./section-a.css";




class SectionA extends React.Component {
  render() {
    return (
 <Container className="container">
             <section className="section-a">
                 <div>
                    <h1 className="text-center">Nuestras acciones y obras</h1>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt urna quis neque feugiat mollis. Etiam fermentum quis mi vel facilisis. Donec in ornare massa.
                            </div>
                        <div className="col-md-4">
                      <img className="img-responsive" src="http://lorempixel.com/400/200/" alt="logo"/>
                        </div>
             </section>
 </Container>

      )
    }
  }

      export default SectionA;
