import React from 'react';
//import { useSelector } from 'react-redux';


const  MyCourseCard = (props) => {
	const { title, imageSrc, imageAlt, newPrice, oldPrice, date} = props;
return (
	<div  className = " myCourse-box">
		{/* <Link to = "/courses/course-selected" style = {{textDecoration: 'none', color: 'black'}} > */}
			<div  className = "image">
				<img alt = {imageAlt}src = {imageSrc}/>
			</div>
			<div className ="details">
				<p style = {deepText}>{title}</p>
				<p>{date}</p>
				<p>
					<span style = {deepText} className = "newPrice">{newPrice}</span>
					<span style = {{textDecoration: "line-through"}} className = "oldPrice"> {oldPrice}</span>
				</p>
			</div>
		{/* </Link> */}
	</div>
	);
}

const deepText = {
	fontWeight : "700"
}

export default MyCourseCard;