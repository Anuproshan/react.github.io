import React from 'react';
import './styles.scss';
import Banner from '../../Components/Banner/index';
import Footer from '../../Components/Footer/index';
const Contact = props => {
return (
<React.Fragment>
<Banner title="Get Me"/>
<section className="contactBody">
	<div className="container">
		<div className="row">
			<div className="section-head text-center col-sm-12 py-lg-5 py-md-5 py-sm-5 py-xs-5">
				<h4>Contact Me</h4>
				<h6>Get In Touch</h6>
			</div>
			<div className="col-md-12 pb-lg-5 pb-md-5 pb-sm-5 pb-xs-5">
				<form className='form' id='contact-form' method='post'><input type='hidden' name='form-name' value='contact-form' />
				<div className="messages"></div>
				<div className="controls">
					<div className="row">
						<div className="col-md-4">
							<div className="form-group">
								<input id="form_name" type="text" name="name" placeholder="Name *" required="required" data-error="Firstname is required."/>
								<div className="help-block with-errors"></div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="form-group">
								<input id="form_email" type="email" name="email" placeholder="Email *" required="required" data-error="Valid email is required."/>
								<div className="help-block with-errors"></div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="form-group">
								<input id="form_subject" type="text" name="subject" placeholder="Subject"/>
							</div>
						</div>
						<div className="col-md-12">
							<div className="form-group">
								<textarea id="form_message" name="message" placeholder="Your Message *" rows="4" required="required" data-error="Your message is required."></textarea>
								<div className="help-block with-errors"></div>
							</div>
						</div>
						<div className="col-md-12">
							<button type="submit" className="butn butn-bg"><span>Send Message</span></button>
							<div className="info">
								<span><strong>Email</strong> : anupranup44t@gmail.com</span>
								<span><strong>Phone</strong> : +91 963 0449 918</span>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
<div class="se-tring se-tring-rev">
	<span class="left"></span>
	<span class="right"></span>
</div>
</section>
<Footer />
</React.Fragment>
);
};
export default Contact;