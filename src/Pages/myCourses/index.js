import React from 'react'
import Header from '../../Component/Header/desktopHeader/Header'
import Footer from '../../Component/Footer/footer'
import Subscribe from '../landingPage/subscribe'
import { useSelector } from 'react-redux'
import { Spinner, settings} from "@chakra-ui/react"
//import {Link} from 'react-router-dom'
import '../../Styles/myCourse.scss'
//import CourseCard from '../../Component/courseCard'
import moment from 'moment'
import MyCourseCard from './myCourseCard'
import Slider from 'react-slick'


const  MyCourses = ()  => {
  const purchasedItem = useSelector(state => state.rootReducer.databaseSlice.purchasedItem)

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
					{!purchasedItem? 
					<div className = "no-course">
            <p>No course available</p>
					</div> :
					<div className = 'myCourse-div'>
						<div style = {{textAlign: 'center'}} >
							<Spinner  size="xl"/>
						</div>
						<div>
              <Slider>
					    <MyCourseCard/>
              </Slider>
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




export default MyCourses
