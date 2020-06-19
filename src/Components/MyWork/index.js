import React from 'react';
import './styles.scss';
import 'font-awesome/css/font-awesome.min.css';
const MyWork = props => {
return (
<React.Fragment>
<section className="myWorkBody py-md-5 py-sm-5">
	<div className="container">
		<div className="row">
			<div class="col-lg-12 text-center mb-lg-5 mb-md-5 mb-sm-5 mb-xs-5">
				<div class="workHeader">
					<h4>My Project</h4>
					<h6>I've Worked On these Projects</h6>
				</div>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-md-5 mb-sm-5">
				<div className="innerWorker arbutus1">
					<h1><a href="https://www.arbutusinfotech.com/" rel="_blank">
						<i className="fa fa-link" aria-hidden="true"></i>
					</a></h1>
				</div>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-md-5 mb-sm-5">
				<div className="innerWorker arbutus2">
					<h1><a href="https://www.arbutusinfotech.com/" rel="_blank">
						<i className="fa fa-link" aria-hidden="true"></i>
					</a></h1>
				</div>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-md-5 mb-sm-5">
				<div className="innerWorker arbutus3">
					<h1><a href="https://www.arbutusinfotech.com/" target="_blank">
						<i className="fa fa-link" aria-hidden="true"></i>
					</a></h1>
				</div>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-md-5 mb-sm-5">
				<div className="innerWorker arbutus4">
					<h1><a href="https://www.arbutusinfotech.com/" target="_blank">
						<i className="fa fa-link" aria-hidden="true"></i>
					</a></h1>
				</div>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-md-5 mb-sm-5">
				<div className="innerWorker arbutus5">
					<h1><a href="https://adoring-goldwasser-0012d1.netlify.app/" target="_blank">
						<i className="fa fa-link" aria-hidden="true"></i>
					</a></h1>
				</div>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-md-5 mb-sm-5">
				<div className="innerWorker arbutus6">
					<h1><a href="https://relaxed-boyd-405f2a.netlify.app/" target="_blank">
						<i className="fa fa-link" aria-hidden="true"></i>
					</a></h1>
				</div>
			</div>
		</div>
	</div>
	<div class="se-tring se-tring-gray"><span class="left"></span><span class="right"></span></div>
</section>
</React.Fragment>
);
};
export default MyWork;