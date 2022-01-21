import React from 'react';
import { useSelector } from 'react-redux';


const  MyCourseCard = () => {
	const purchasedItem = useSelector(state => state.rootReducer.databaseSlice.purchasedItem)
	return (
		<div className='body'>
			{purchasedItem?.map(( data, index ) => 
				(<div key = {index} className = " nextto myCourse-box">
					{/* <Link to = "/courses/course-selected" style = {{textDecoration: 'none', color: 'black'}} > */}
						<div  className = "image">
							<img alt ="" src = "../Assets/React-frontend.jpg"/>
						</div>
						<div className ="details">
							<p style = {deepText}>{data.Title}</p>
							<p>7th june 2020</p>
							<p>
								<span style = {deepText} className = "newPrice">₦15.99</span>
								<span style = {{textDecoration: "line-through"}} className = "oldPrice"> ₦87.99</span>
							</p>
						</div>
				  {/* </Link> */}
				</div>
			))}
		</div>
	);
}

const deepText = {
	fontWeight : "700"
}

export default MyCourseCard;