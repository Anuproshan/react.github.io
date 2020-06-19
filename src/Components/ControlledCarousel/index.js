import React, {useState} from 'react';
import './styles.scss';
import {Button} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Banner01 from '../../assets/Scaleton/Bbanner01.png';
import Banner02 from '../../assets/Scaleton/Bbanner02.png';
import Banner03 from '../../assets/Scaleton/Bbanner03.png';
import Banner04 from '../../assets/Scaleton/Bbanner04.png';
const ControlledCarousel = props => {
const [index, setIndex] = useState(0);
const handleSelect = (selectedIndex, e) => {
setIndex(selectedIndex);
}; 
return (
<React.Fragment>
<section className="carouselBody">
	<Carousel activeIndex={index} onSelect={handleSelect}>
	<Carousel.Item>
	<img
	className="img-fluid"
	src={Banner01}
	alt="First slide"
	/>
	<Carousel.Caption>
	<h3>UI / UX Designer & Front End Web Developer</h3>
	<p>A "Front Eed Web Developer's " Typically responsibilities include such as: Prioritizing User experince, Bringing a concept to life with Html, Css, and JavaScript, Production and maintenance of websites and dwev application user interfaces.</p>
	<Button className="btn btn-outline-0 shadow caroBtn" size="lg">Contact Me</Button>
	</Carousel.Caption>
	</Carousel.Item>
	<Carousel.Item>
	<img
	className="img-fluid"
	src={Banner02}
	alt="Second slide"
	/>
	<Carousel.Caption>
	<h3>UI / UX Designer & Front End Web Developer</h3>
	<p>A "Front Eed Web Developer's " Typically responsibilities include such as: Prioritizing User experince, Bringing a concept to life with Html, Css, and JavaScript, Production and maintenance of websites and dwev application user interfaces.</p>
	<Button className="btn btn-outline-0 shadow caroBtn" size="lg">Contact Me</Button>
	</Carousel.Caption>
	</Carousel.Item>
	<Carousel.Item>
	<img
	className="img-fluid"
	src={Banner03}
	alt="Third slide"
	/>
	<Carousel.Caption>
	<h3>UI / UX Designer & Front End Web Developer</h3>
	<p>
		A "Front Eed Web Developer's " Typically responsibilities include such as: Prioritizing User experince, Bringing a concept to life with Html, Css, and JavaScript, Production and maintenance of websites and dwev application user interfaces.
	</p>
	<Button className="btn btn-outline-0 shadow caroBtn" size="lg">Contact Me</Button>
	</Carousel.Caption>
	</Carousel.Item>
	<Carousel.Item>
	<img
	className="img-fluid"
	src={Banner04}
	alt="Third slide"
	/>
	<Carousel.Caption>
	<h3>UI / UX Designer & Front End Web Developer</h3>
	<p>
		A "Front Eed Web Developer's " Typically responsibilities include such as: Prioritizing User experince, Bringing a concept to life with Html, Css, and JavaScript, Production and maintenance of websites and dwev application user interfaces.
	</p>
	<Button className="btn btn-outline-0 shadow caroBtn" size="lg">Contact Me</Button>
	</Carousel.Caption>
	</Carousel.Item>
	</Carousel>
	<div class="se-tring se-tring-gray">
		<span class="left"></span>
		<span class="right"></span>
	</div>
</section>
</React.Fragment>
);
};
export default ControlledCarousel;