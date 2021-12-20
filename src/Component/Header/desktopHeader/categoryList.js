//import { Container } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'

const  CategoryList = (props) => {
	const {categoryVisibility, setCategoryVisibility} = props
	const container = React.createRef()

	const handleClickOutside = (event) => {
		if (
			container.current &&
			!container.current.contains(event.target)
		) {
			setCategoryVisibility(false)
			
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		}
	})



	return (
		<div>
			{categoryVisibility? (
			<div className ="categoryList" ref = {container}>
				<ul>
					<li><Link to = "/courses/category" style = {{textDecoration: 'none', color: 'black'}} >HTML</Link></li>
					<li><Link to = "/courses/category" style = {{textDecoration: 'none', color: 'black'}} >CSS</Link></li>
					<li><Link to = "/courses/category" style = {{textDecoration: 'none', color: 'black'}} >Javascript</Link></li>
					<li><Link to = "/courses/category" style = {{textDecoration: 'none', color: 'black'}} >JQuery</Link></li>
				</ul> 
		  </div>
		  ): ''}
		</div>	
	)
}

export default CategoryList