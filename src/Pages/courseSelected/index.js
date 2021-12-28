import React from 'react'
import Header from "../../Component/Header/desktopHeader/Header"
import Footer from '../../Component/Footer/footer'
import '../../Styles/courseSelected.scss'
import SameCategory from './sameCategory'
import CategoryDetails from './categoryDetails'
import { Spinner} from "@chakra-ui/react"
import Review from './review'
//import { useParams } from 'react-router-dom'

const  CourseSelected = ()  => {
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
        <div style = {{textAlign: 'center'}} >
          <Spinner  size="xl"/>
        </div>
         <SameCategory/>
        </div>
				<hr/>
				<div>
          <Review/>
        </div>	
			</div>
      <hr/>
			<div>
				<Footer/>
			</div>	
		</div>
	)
}

export default CourseSelected
