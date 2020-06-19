import React from 'react';
import './styles.scss';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
const Menu = props => {
return (
<React.Fragment>
<header>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<div className="container">
<Navbar.Brand><NavLink to="/">Ar@Kindo</NavLink></Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Nav className="MyNav ml-auto">
<NavLink to="/">Home</NavLink>
<NavLink to="/about">About</NavLink>
<NavLink to="/service">Service</NavLink>
<NavLink to="/blog">Blog</NavLink>
<NavLink to="/portfolio">Portfolio</NavLink>
<NavLink to="/contact">Contact</NavLink>
</Nav>
</Navbar.Collapse>
</div>
</Navbar>
</header>
</React.Fragment>
);
};
export default Menu;