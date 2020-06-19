import React from 'react';
import './styles.scss';
const AboutSub = props => {
return (
<React.Fragment>
<section className="aboutSubBody py-lg-5 py-md-5 py-sm-5 py-xs-5">
	<div className="container">
		<div className="row py-lg-5 py-md-5 py-sm-5 py-xs-5">
			<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
				<div className="piCs">
					<img src={props.imgsrc} className="img-fluid profilePics" alt="PortfolioPics"/>
				</div>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
				<div className="aboutContent">
					<div className="content">
						<h4>I'm Anup R Kindo['KINDO']</h4>
						<span>UI / UX Designer &amp; Front End Web Developer</span>
						<p>['Front-End-Web-Developer'] end developer A front-end developer architects and develops
							websites and web applications using web technologies ['HTML-5','CSS3','JavaScript'],
							which typically runs on the Open Web Platform or acts
						as compilation input for non-web platform environments.</p>
						<div className="skills mt-50">
							<div className="skill-item">
								<h6>Html5 <span>90%</span></h6>
								<div className="skills-progress"><span data-value="80%"></span></div>
							</div>
							<div className="skill-item">
								<h6>Css3 <span>90%</span></h6>
								<div className="skills-progress"><span data-value="80%"></span></div>
							</div>
							<div className="skill-item">
								<h6>JQuery <span>60%</span></h6>
								<div className="skills-progress"><span data-value="60%"></span></div>
							</div>
							<div className="skill-item">
								<h6>JavaScript <span>60%</span></h6>
								<div className="skills-progress"><span data-value="60%"></span></div>
							</div>
							<div className="skill-item">
								<h6>SASS <span>60%</span></h6>
								<div className="skills-progress"><span data-value="60%"></span></div>
							</div>
							<div className="skill-item">
								<h6>Bootstrap3 <span>90%</span></h6>
								<div className="skills-progress"><span data-value="90%"></span></div>
							</div>
							<div className="skill-item">
								<h6>Bootstrap4 <span>90%</span></h6>
								<div className="skills-progress"><span data-value="90%"></span></div>
							</div>
							<div className="skill-item">
								<h6>React <span>50%</span></h6>
								<div className="skills-progress"><span data-value="50%"></span></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="se-tring se-tring-gray">
		<span className="left"></span>
		<span className="right"></span>
	</div>
</section>
</React.Fragment>
);
};
export default AboutSub;