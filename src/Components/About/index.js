import React from 'react';
import './styles.scss';
import Footer from '../../Components/Footer/index';
import AboutSub from '../../Components/AboutSub/index';
import Banner from '../../Components/Banner/index';
import Anups from '../../assets/Scaleton/Anups.jpg';
const About = props => {
return (
<React.Fragment>
<section className="aboutBody">
<Banner title="About Me"/>
<AboutSub imgsrc={Anups} />
</section>
<Footer/>
</React.Fragment>
);
};
export default About;