import React from 'react';
import './styles.scss';
import 'font-awesome/css/font-awesome.min.css';
const Menutop = props => {
return (
<React.Fragment>
	<div className="menuTopBody py-md-2 py-sm-2 py-xs-2">
		<div className="container">
		<div className="row">
		<div className="col-md-4 col-sm-4 col-xs-4">
			<div className="innerMenu menuOne">
				<a href="#"><span><i className="fa fa-phone-square" aria-hidden="true"></i></span>(+91) 963 0449 918</a>
			</div>
		</div>
		<div className="col-md-4 col-sm-4 col-xs-4">
			<div className="innerMenu menuTwo">
				<a href="#"><span><i className="fa fa-envelope-o" aria-hidden="true"></i></span>anupranup44@gmail.com</a>
			</div>
		</div>
		<div className="col-md-4 col-sm-4 col-xs-4">
			<div className="innerMenu menuThree">
				<a href="#"><span><i className="fa fa-linkedin-square" aria-hidden="true"></i></span>Linkdin</a>
			</div>
		</div>
		</div>
		</div>
	</div>
</React.Fragment>
);
};
export default Menutop;