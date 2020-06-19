import React from 'react';
import './styles.scss';
import blogPost1 from '../../assets/Scaleton/1.gif';
import blogPost2 from '../../assets/Scaleton/2.gif';
import blogPost3 from '../../assets/Scaleton/3.gif';
import blogPost4 from '../../assets/Scaleton/4.gif';
import blogPost5 from '../../assets/Scaleton/rob_s-shot.gif';
import blogPost6 from '../../assets/Scaleton/logo-animation-ps.gif';
const BlogPost = props => {
return (
<React.Fragment>
<section className="blogPostBody py-md-5 py-sm-5">
	<div className="container">
		<div className="row">
			<div className="col-md-4 col-sm-6 col-xs-12 mb-md-5 mb-sm-5">
				<div className="blogPostInner">
					<div className="imagePost">
						<img src={blogPost1} alt="post" className="img-fluid postImage" />
					</div>
					<div className="postContent">
						<span><a href="#0">August 06 , 2020</a></span>
						<span>/</span>
						<span><a href="#0">
							<em>WordPress</em>
						</a></span>
						<h5><a href="#0">Managing Their Own Websites</a></h5>
						<p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the dummy text ever</p>
						<a href="#0" class="more">Continue Reading<i class="fas fa-angle-right"></i></a>
					</div>
				</div>
			</div>
			<div className="col-md-4 col-sm-6 col-xs-12 mb-md-5 mb-sm-5">
				<div className="blogPostInner">
					<div className="imagePost">
						<img src={blogPost2} alt="post" className="img-fluid postImage" />
					</div>
					<div className="postContent">
						<span><a href="#0">August 06 , 2017</a></span>
						<span>/</span>
						<span><a href="#0">
							<em>WordPress</em>
						</a></span>
						<h5><a href="#0">Managing Their Own Websites</a></h5>
						<p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the dummy text ever</p>
						<a href="#0" class="more">Continue Reading<i class="fas fa-angle-right"></i></a>
					</div>
				</div>
			</div>
			<div className="col-md-4 col-sm-6 col-xs-12 mb-md-5 mb-sm-5">
				<div className="blogPostInner">
					<div className="imagePost">
						<img src={blogPost3} alt="post" className="img-fluid postImage" />
					</div>
					<div className="postContent">
						<span><a href="#0">August 06 , 2017</a></span>
						<span>/</span>
						<span><a href="#0">
							<em>WordPress</em>
						</a></span>
						<h5><a href="#0">Managing Their Own Websites</a></h5>
						<p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the dummy text ever</p>
						<a href="#0" class="more">Continue Reading<i class="fas fa-angle-right"></i></a>
					</div>
				</div>
			</div>
			<div className="col-md-4 col-sm-6 col-xs-12 mb-md-5 mb-sm-5">
				<div className="blogPostInner">
					<div className="imagePost">
						<img src={blogPost4} alt="post" className="img-fluid postImage" />
					</div>
					<div className="postContent">
						<span><a href="#0">August 06 , 2017</a></span>
						<span>/</span>
						<span><a href="#0">
							<em>WordPress</em>
						</a></span>
						<h5><a href="#0">Managing Their Own Websites</a></h5>
						<p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the dummy text ever</p>
						<a href="#0" class="more">Continue Reading<i class="fas fa-angle-right"></i></a>
					</div>
				</div>
			</div>
			<div className="col-md-4 col-sm-6 col-xs-12 mb-md-5 mb-sm-5">
				<div className="blogPostInner">
					<div className="imagePost">
						<img src={blogPost5} alt="post" className="img-fluid postImage" />
					</div>
					<div className="postContent">
						<span><a href="#0">August 06 , 2017</a></span>
						<span>/</span>
						<span><a href="#0">
							<em>WordPress</em>
						</a></span>
						<h5><a href="#0">Managing Their Own Websites</a></h5>
						<p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the dummy text ever</p>
						<a href="#0" class="more">Continue Reading<i class="fas fa-angle-right"></i></a>
					</div>
				</div>
			</div>
			<div className="col-md-4 col-sm-6 col-xs-12">
					<div className="blogPostInner">
					<div className="imagePost">
						<img src={blogPost6} alt="post" className="img-fluid postImage" />
					</div>
					<div className="postContent">
						<span><a href="#0">August 06 , 2017</a></span>
						<span>/</span>
						<span><a href="#0">
							<em>WordPress</em>
						</a></span>
						<h5><a href="#0">Managing Their Own Websites</a></h5>
						<p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the dummy text ever</p>
						<a href="#0" class="more">Continue Reading<i class="fas fa-angle-right"></i></a>
					</div>
				</div>
			
			</div>
		</div>
	</div>
</section>
</React.Fragment>
);
};
export default BlogPost;