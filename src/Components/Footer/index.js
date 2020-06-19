import React from 'react';
import './styles.scss';
import 'font-awesome/css/font-awesome.min.css';
const Footer = props => {
return (
<React.Fragment>
<footer className="footerBody py-lg-5 py-md-5 py-sm-5 py-xs-5 text-center">
	<div className="container">
		<h1>Kindo</h1>
		<ul className="socialIcons">
			<li><a href="#"><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
			<li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
			<li><a href="#"><i className="fa fa-github-square" aria-hidden="true"></i></a></li>
			<li><a href="#"><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
			<li><a href="#"><i className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
		</ul>
		<p>&copy; 2020 UI-Kindo. All Rights Reserved.</p>
	</div>
</footer>
</React.Fragment>
);
};
export default Footer;