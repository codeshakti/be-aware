import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-grid-system';
import "./searchform.css";



class searchform extends React.Component {
  render() {
    return (
<form class="form-wrapper-01">
<input id="search" type="text" />
<input id="submit" type="submit" value="Search" />
</form>
		)
	}
}

export default searchform;