import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-grid-system';
import Main from './components/Main';
import contact from './components/contact';

class App extends React.Component {
  render() {
    return (
      	<Main/>
      	)
  }
}

export default App;