import React from 'react'
import {Link} from 'react-router-dom'

const  categoryList = (props) => {
	//const getCategortListStyle = props.getCategortListStyle
	return (
		<div style = {props.getCategortListStyle } className ="categoryList">
			<ul>
				<li><Link to = "/courses/category" style = {{textDecoration: 'none', color: 'black'}} >HTML</Link></li>
				<li><Link to = "/courses/category" style = {{textDecoration: 'none', color: 'black'}} >CSS</Link></li>
				<li><Link to = "/courses/category" style = {{textDecoration: 'none', color: 'black'}} >Javascript</Link></li>
				<li><Link to = "/courses/category" style = {{textDecoration: 'none', color: 'black'}} >JQuery</Link></li>
			</ul> 
		</div>
	)
}

export default categoryList