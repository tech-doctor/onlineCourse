import React, {useEffect} from 'react'
import Header from '../../Component/Header/desktopHeader/Header'
import Footer from '../../Component/Footer/footer'
import '../../Styles/categoryListPage.scss'
import AllCategories from './allCategories'
import { Stack,Skeleton} from "@chakra-ui/react"
import Author from './author'
import TopCourses from './topCourses'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncCategories, getSelectedCategory } from '../../Store/courseSlice'
//import CourseCard from '../landingPage/courseCard'


const  CategoryListPage = ()  => {
  const topCourses = useSelector(getSelectedCategory);
  const loading = useSelector(state => state.rootReducer.courseSlice.isLoading);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncCategories())
},[dispatch]);

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
			    <div>
            <TopCourses
            topCourses = {topCourses}
            loading= {loading}
            />
          </div>
        <hr/>
        
				<div> 
          {topCourses.length === 0 ?    
          <div>
            <Stack>
              <Skeleton height="100px" />
              <Skeleton height="100px" />
              <Skeleton height="100px" />
              <Skeleton height="100px" />
            </Stack>
          </div> :
			  	<AllCategories
          topCourses = {topCourses}
          loading= {loading}/>}
				</div>
			</div>
			<div>
			 <Footer/>
			</div>		
		</div>
	)
}

// const deepText = {
// 	fontWeight : "700"
// }

export default CategoryListPage
