import React from 'react'
import {Link} from 'react-router-dom'

const  categoryList = (props) => {
	//const getCategortListStyle = props.getCategortListStyle
	return (
		<div style = {props.getCategortListStyle } className ="categoryList">
			<ul>
				<li><Link to = "/courses/category">HTML</Link></li>
				<li><Link to = "/courses/category">CSS</Link></li>
				<li><Link to = "/courses/category">Javascript</Link></li>
				<li><Link to = "/courses/category">JQuery</Link></li>
			</ul> 
		</div>
	)
}

export default categoryList