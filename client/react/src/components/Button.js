import React from 'react';
import ReactDOM from 'react-dom';
import "./Button.css"

class Button extends React.Component {
  render() {
    return (
      <div className="buttons">
        <button className="button text-center">SING IN</button>
        <button className="button text-center">LOG IN</button>
      </div>

    )
  }
}

export default Button;
