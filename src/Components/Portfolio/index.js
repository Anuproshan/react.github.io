import React from 'react';
import './styles.scss';
import Banner from '../../Components/Banner/index';
import MyWork from '../../Components/MyWork/index';
import Footer from '../../Components/Footer/index';
const Portfolio = props => {
return (
<React.Fragment>
<section className="protfolioBody">
<Banner title="Portfolio"/>
<MyWork/>
<Footer/>
</section>
</React.Fragment>
);
};
export default Portfolio;