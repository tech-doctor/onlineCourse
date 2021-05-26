import React from 'react'
import Header from "../../Component/Header/desktopHeader/Header"
import Footer from '../../Component/Footer/footer'
import '../../Styles/courseSelected.scss'
import SameCategory from './sameCategory'
import CategoryDetails from './categoryDetails'
import Review from './review'

const  courseSelected = ()  => {


	return (
		<div className = "courseSelected">
      <div>
				<Header/>
			</div>
			<hr/>
			<div className = "center-div">
			  <div>
          <CategoryDetails/>
        </div>
				<hr/>
				<div>
         <SameCategory/>
        </div>
				<hr/>
				<div>
          <Review/>
        </div>
				<hr/>
			</div>
			<div>
				<Footer/>
			</div>	
		</div>
	)
}

export default courseSelected