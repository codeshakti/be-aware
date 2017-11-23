import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-grid-system';
import "./Button.css"

class Button extends React.Component {
  render() {
    return (
    	<section className="button">
              <Container fluid style>
      				<div className="buttons text-center">
				        <button className="button text-center">SING IN</button>
				        <button className="button text-center">LOG IN</button>
				        </div>
				</Container>
      </section>

    )
  }
}

export default Button;
