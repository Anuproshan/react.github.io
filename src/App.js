import React from 'react';
import './App.scss';
import Sticky from './Components/Sticky/index';
import Home from './Components/Home/index';
import About from './Components/About/index';
import Service from './Components/Service/index';
import Blog from './Components/Blog/index';
import Portfolio from './Components/Portfolio/index';
import Contact from './Components/Contact/index';
import Menutop from './Components/Menutop/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App = prpos =>{
return(
<div className="Main">
<Menutop />
	<Router>
	<div>
		<Sticky />
			<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/service" component={Service} />
			<Route path="/blog" component={Blog} />
			<Route path="/portfolio" component={Portfolio} />
			<Route path="/contact" component={Contact} />
			</Switch>
		</div>
		</Router>
	</div>
);
}
export default App;