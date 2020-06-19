import React, { Component } from 'react';
import './styles.scss';
import Menu from '../../Components/Menu/index';
class  Sticky extends Component{
constructor(){
super();
this.state = {
scrolled: false,
}
}
componentDidMount(){
window.addEventListener("scroll", () => {
const isTop = window.scrollY < 100;
if (isTop !== true) {
this.setState({scrolled: true});
}
else {
this.setState({scrolled: false});
}
});
}
componentWillUnmount(){
window.removeEventListener("scroll");
}
render(){
return (
<React.Fragment>
<section className={this.state.scrolled ? 'nav scrolled' : 'nav'}>
	<Menu/>
</section>
</React.Fragment>
);
}
};
export default Sticky;