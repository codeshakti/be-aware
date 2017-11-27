import React from 'react';
import Footer from './Footer';
import Header from './Header';



class contact extends React.Component {
  render() {
    return (
    	<div>
    	<Header/>
    	<div className="container">
			<div className="col-md-5">
			    <div className="form-area">  
			        <form>
			        <br styles="clear:both"/>
			                    <h3 styles="margin-bottom: 25px; text-align: center;">Contact Form</h3>
			    				<div className="form-group">
									<input type="text" className="form-control" id="name" name="name" placeholder="Name" required/>
								</div>
								<div className="form-group">
									<input type="text" className="form-control" id="email" name="email" placeholder="Email" required/>
								</div>
								<div className="form-group">
									<input type="text" className="form-control" id="mobile" name="mobile" placeholder="Mobile Number" required/>
								</div>
								<div className="form-group">
									<input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" required/>
								</div>
			                    <div className="form-group">
			                    <textarea className="form-control" type="textarea" id="message" placeholder="Message" maxlength="140" rows="7"></textarea>
			                        <span className="help-block"><p id="characterLeft" className="help-block ">You have reached the limit</p></span>                    
			                    </div>
			            
			        <button type="button" id="submit" name="submit" className="btn btn-primary pull-right">Submit Form</button>
			        </form>
			    </div>
			</div>
		</div>
		<Footer/>
		</div>

    	)
  }
}

export default contact;
