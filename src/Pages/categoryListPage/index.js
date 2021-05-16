import React from 'react'
import Header from '../../Component/Header/desktopHeader/Header'
import Footer from '../../Component/Footer/footer'
import '../../Styles/categoryListPage.css'
import AllCategories from './allCategories'

const  CategoryListPage = ()  => {

	const Box = function box(){
		return (
		<div className = "course-box">
				<div className = 'image'>
          <img alt ="" src = "https://www.valuecoders.com/blog/wp-content/uploads/2020/06/10-reasons-to-use-reactjs-for-enterprise-app-development-1024x614.jpg"></img>
				</div>
				<div className = "course-box-details">
           <p>Title</p>
					 <p>Time</p>
					 <p>Rating</p>
					 <p>Price-tag</p>
				</div>
			</div>
		)
	}

	return (
		<div>
		  <div>
			  <Header/>
			</div>
			<div className = "eachCategoryList">
			  <div className = "TopCourses">
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
				<div>
					<AllCategories/>
				</div>
			</div>
			<div>
			 <Footer/>
			</div>		
		</div>
	)
}

export default CategoryListPage
