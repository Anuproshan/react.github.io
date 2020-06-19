import React from 'react';
import './styles.scss';
import Banner from '../../Components/Banner/index';
import BlogSub from '../../Components/BlogSub/index';
import Footer from '../../Components/Footer/index';
const Service = props => {
return (
<React.Fragment>
<section className="serviceBody">
<Banner title="Service"/>
<BlogSub/>
</section>
<Footer/>
</React.Fragment>
);
};
export default Service;