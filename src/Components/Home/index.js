import React from 'react';
import './styles.scss';
import Footer from '../../Components/Footer/index';
import ControlledCarousel from '../../Components/ControlledCarousel/index';
import MyWork from '../../Components/MyWork/index';
import AboutSub from '../../Components/AboutSub/index';
import BlogSub from '../../Components/BlogSub/index';
import PortPics from '../../assets/Scaleton/Pics01.svg';
const Home = props => {
return (
<React.Fragment>
<div className="homeBody">
<ControlledCarousel />
<AboutSub imgsrc={PortPics} />
<BlogSub/>
<MyWork/>
<Footer/>
</div>
</React.Fragment>
);
};
export default Home;