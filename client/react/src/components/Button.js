import React from 'react';
import ReactDOM from 'react-dom';
import "./Button.css"

class Button extends React.Component {
  render() {
    return (
      <div className="buttons">
        <button className="button">LOGIN USER</button>
        <button className="button">LOGIN ORG.</button>
      </div>

    )
  }
}

export default Button;
