import React from 'react';
import './styles.scss';
import {NavLink} from 'react-router-dom';
const Banner = props => {
return (
<React.Fragment>
	<div className="bannerBody">
		<div className="container">
			<div className="row">
				<div className="col-md-12 col-sm-12">
					<div className="innerBanner">
						<h1 className="title">{props.title}</h1>
					</div>
				</div>
			</div>
		</div>	
	</div>
</React.Fragment>
);
};
export default Banner;