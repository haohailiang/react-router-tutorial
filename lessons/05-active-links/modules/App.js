import React   from 'react'
import NavLink from './NavLink'

export default React.createClass({
	render() {
		return (
			<div>
				<h1>React Router Tutorial</h1>
				<ul role="nav">
					<li>组件的方式调用Active Class Name</li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/repos">Repos</NavLink></li>
					<li>直接的方式调用Active Styles</li>
					<li><Link to="/about" activeStyle={{ color: 'red' }}>About</Link></li>
					<li><Link to="/repos" activeStyle={{ color: 'red' }}>Repos</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
})
