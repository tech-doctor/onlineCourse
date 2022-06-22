import React, {useEffect} from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import  {faStar}  from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom'
import { Spinner} from "@chakra-ui/react"
import Slider from 'react-slick';
import { settings } from '../../Styles/settings';
import CourseCard from '../../Component/courseCard';
import CourseSlider from '../../Component/CourseSlider';
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import { getAllcourses, fetchAsyncCourses } from '../../Store/courseSlice'

const  SimilarCourses = () => {
  const dispatch = useDispatch();
  const allCourses = useSelector(getAllcourses);
  let  loading = useSelector(state => state.rootReducer.courseSlice.isLoading);
  
  

  useEffect(() => {
			dispatch(fetchAsyncCourses())
	},[dispatch]);

  if (loading || allCourses.length === 0) {
    return  <div  style = {{textAlign: 'center', padding: '100px'}} >
     <Spinner  size="xl"/>
  </div>    
  }





	return (
		<div className = "otherCourses">
		<CourseSlider
        heading={ "Similar Courses" }
        subHeading={ "Check out what others are learning " }
      >
				{allCourses?.map ((data) =>
				(<CourseCard
					key = {data.id}
					id = {data.videoId}
					imageAlt ={data.snippet.title}  
					imageSrc = {data.snippet.thumbnails.high.url}
					title = {data.snippet.title}
					date = {moment(data.snippet.publishedAt).fromNow()}
					newPrice = {data.newPrice}
					oldPrice = {data.oldPrice}
          bestSelling = {data.bestSelling}
					data = {data}
				/>)
				)}
			</CourseSlider>	
		</div>
	)
}

export default SimilarCourses
