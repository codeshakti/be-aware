import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-grid-system';
import "./Button.css"

class Button extends React.Component {
  render() {
    return (
    	<section className="button login">
              <Container fluid style>
      				<div className="butt text-center">
				        <button class="btn btn-lg btn-primary btn-block signup-btn" type="submit">
                        Create my account</button>
				        </div>
				</Container>
        <br/>
      </section>

    )
  }
}

export default Button;
