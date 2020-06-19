import React from 'react';
import './styles.scss';
import Banner from '../../Components/Banner/index';
import BlogPost from '../../Components/BlogPost/index';
import Footer from '../../Components/Footer/index';
const Blog = props => {
return (
<React.Fragment>
<section className="blogBody">
<Banner title="My Blogs"/>
<BlogPost/>
</section>
<Footer/>
</React.Fragment>
);
};
export default Blog;