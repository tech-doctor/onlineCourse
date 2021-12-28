import React from 'react'
import Header from '../../Component/Header/desktopHeader/Header'
import Footer from '../../Component/Footer/footer'
import Subscribe from '../landingPage/subscribe'
import { useSelector } from 'react-redux'
import { Spinner} from "@chakra-ui/react"
import {Link} from 'react-router-dom'
import '../../Styles/myCourse.scss'


const  MyCourses = ()  => {
	//const dispatch = useDispatch()
  const itemsBought = useSelector(state => state.rootReducer.courseSlice.purchasedItem)


	return (
		<div className  = "myCourse">
			<div>
				<Header/>
			</div>
			<hr/>
			<div>
        <div className = "title">
					<h2 style = {{color: 'white'}}>MY COURSES</h2>
				</div>
				<hr/>
				<div className  = "center-div">
					{!itemsBought? 
					<div className = "no-course">
            <p>No course available</p>
					</div> :
					<div className = 'myCourse-div'>
						<div style = {{textAlign: 'center'}} >
							<Spinner  size="xl"/>
						</div>
						<div className = "body">
						{itemsBought.map(( data, index ) => 
							(<div key = {index} className = "myCourse-box">
								<Link to = "/courses/course-selected" style = {{textDecoration: 'none', color: 'black'}} >
									<div  className = "image">
										<img alt ="" src = "../Assets/React-frontend.jpg"/>
									</div>
									<div className ="details" style = {{textAlign: 'center'}}>
									  <p style = {deepText}>{data.Title}</p>
										<p>7th june 2020</p>
										<p><small><span style = {deepText} className = "rating-number">4.5</span>{data.Rating.stars}
										<span className = "likes">(147,256)</span></small>
										</p>
										<p>
											<span style = {deepText} className = "newPrice">$15.99</span>
											<span style = {{textDecoration: "line-through"}} className = "oldPrice"> $87.99</span>
										</p>
									</div>
								</Link>
						  </div>))}
						</div>
					</div>}	
				</div> 
			</div>
			<hr/>
			<div>
				<Subscribe/>
			</div>
			<hr/>
			<div>
        <Footer/>
			</div>
		</div>
	)
}

const deepText = {
	fontWeight : "700"
}


export default MyCourses
