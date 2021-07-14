import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faStar}  from '@fortawesome/free-solid-svg-icons'
import Header from '../../Component/Header/desktopHeader/Header'
import Footer from '../../Component/Footer/footer'
import '../../Styles/categoryListPage.scss'
import AllCategories from './allCategories'
import { Spinner, Stack,Skeleton} from "@chakra-ui/react"
import Author from './author'
import {Link} from 'react-router-dom'


const  CategoryListPage = ()  => {

  const Stars = () => {
		return(
			<span className = "rating-stars">
        <FontAwesomeIcon className = 'search-icon'  icon={faStar}/>
			  <FontAwesomeIcon className = 'search-icon'  icon={faStar}/>
			  <FontAwesomeIcon className = 'search-icon'  icon={faStar}/>
			  <FontAwesomeIcon className = 'search-icon'  icon={faStar}/>
			</span>
			)
	}

	const Box = function box(){
		return (
		<div className = "course-box">
      <Link style = {{textDecoration: 'none', color: 'black'}}  to = "course-selected">
				<div className = 'image'>
          <img alt ="" src = "https://www.valuecoders.com/blog/wp-content/uploads/2020/06/10-reasons-to-use-reactjs-for-enterprise-app-development-1024x614.jpg"></img>
				</div>
				<div className = "course-box-details">
        <p style = {deepText}>Hereis the title for this course</p>
					<p>7th june 2020</p>
					<p><small><span style = {deepText} className = "rating-number">4.5</span><Stars/>
					<span className = "likes">(147,256)</span></small>
					</p>
					<p>
						<span style = {deepText} className = "newPrice">$15.99</span>
						<span style = {{textDecoration: "line-through"}} className = "oldPrice"> $87.99</span>
					</p>
				</div>
        </Link>
			</div>
		)
	}

	return (
		<div>
		  <div>
			  <Header/>
			</div>
			<div style = {{margin: "0 3%"}} className = "eachCategoryList">
        <div>
          <Author/>
        </div>
        <hr/>
			  <div className = "TopCourses">
        <div style = {{textAlign: 'center'}} >
          <Spinner  size="xl"/>
        </div>
		      <div>
				   <p style = {{ fontSize: '25px'}}>Top JS Courses</p>
			    </div>
			    <div className = 'course-box-list'>
				   <Box/>
						<Box/>
						<Box/>
						<Box/>
						<Box/>
						<Box/>
			    </div>	
		    </div>
        <hr/>
				<div>
          <div>
            <Stack>
              {/* isLOaded will cancel out the effect when the content is loaded */}
              <Skeleton height="70px" isLoaded>
              </Skeleton>
              <Skeleton height="70px" />
              <Skeleton height="70px" />
            </Stack>
          </div>
			  	<AllCategories/>
				</div>
			</div>
			<div>
			 <Footer/>
			</div>		
		</div>
	)
}

const deepText = {
	fontWeight : "700"
}

export default CategoryListPage
