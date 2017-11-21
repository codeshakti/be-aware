import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import Button from './Button'


class contact extends React.Component {
  render() {
    return (
<div className="panel panel-default">
 <div className="panel-heading">
  <h3 className="panel-title">New Registration Form</h3>
 </div>
  <div className="panel-body">
 <form className="form-horizontal" role="form">
  <div className="form-group">
    <label for="name" className="col-sm-2 control-label">Name</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="name"
       placeholder="Enter u r name here"/>
    </div>
  </div>
   <div className="form-group">
    <label for="gmail" className="col-sm-2 control-label">Gmail</label>
 <div className="col-sm-10">
   <div className="input-group input-group-sm">
     <span className="input-group-addon">@</span>
    <input type="text" className="form-control" placeholder=""/>
  </div>
  </div>
  </div>
    <div className="form-group">
    <label for="password" className="col-sm-2 control-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="pass"/>
    </div>
  </div>
    <div className="form-group">
    <label for="password" className="col-sm-2 control-label">Confirm your password
    </label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="confirmpass"/>
    </div>
  </div>
<div className="form-group">
   <label className="col-sm-2 control-label">Gender</label>
   <div className="col-sm-10">
    <div className="radio-inline">
     <label>
      <input id="radiobutton1" name="sampleradiobutton" value="" type="radio"/>
      Male</label>
    </div>
    <div className="radio-inline">
     <label>
      <input id="radiobutton2" name="sampleradiobutton" value="" type="radio"/>
      Female</label>
    </div>
   </div>
  </div>
  <div className="form-group">
    <label for="State" className="col-sm-2 control-label">State</label>
    <div className="col-sm-10">
  <select className="form-control">
   <option>Andhra Pradesh</option>
   <option>Karnataka</option>
   <option>Kerala</option>
   <option>Tamilnadu</option>
  </select>
    </div>
  </div>
  <div className="form-group">
    <label for="Address" className="col-sm-2 control-label">Address</label>
    <div className="col-sm-10">
 <textarea name="" cols="" rows="" className="form-control"></textarea>
    </div>
  </div>
  <div className="form-group">
    <div className="col-sm-offset-2 col-sm-10">
      <div className="checkbox">
          <input type="checkbox">I accept terms and conditions</input>
      </div>
    </div>
  </div> 
</form>
  </div>
  <div className="panel-footer" style="overflow:hidden;text-align:right;">
    <div className="form-group">
    <div className="col-sm-offset-2 col-sm-10">
      <button type="submit" className="btn btn-success btn-sm">Submit</button>
      <button type="submit" className="btn btn-default btn-sm">Cancel</button>
    </div>
  </div>  
 </div>
</div>




        )
  }
}

export default contact;
