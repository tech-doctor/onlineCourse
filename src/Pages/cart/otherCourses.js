import React, {useEffect} from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import  {faStar}  from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom'
import { Spinner} from "@chakra-ui/react"
import Slider from 'react-slick';
import { settings } from '../../Styles/settings';
import CourseCard from '../../Component/courseCard';
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import { getAllcourses, fetchAsyncCourses } from '../../Store/courseSlice'

const  OtherCourses = () => {
  const dispatch = useDispatch();
  const featuredCourses = useSelector(getAllcourses);
  const allCourse = featuredCourses.result;
  let  loading = useSelector(state => state.rootReducer.courseSlice.isLoading);
  
  

  useEffect(() => {
			dispatch(fetchAsyncCourses())
	},[dispatch]);

  if (loading || featuredCourses.length === 0) {
    return  <div  style = {{textAlign: 'center', padding: '100px'}} >
     <Spinner  size="xl"/>
  </div>    
  }





	return (
		<div className = "otherCourses">
		<div className = "heading">
			<p style = {{textAlign: 'center', fontWeight: '700', fontSize: '20px'}}>Other Courses you might interest you</p>
		</div>
		<div className = "body">
      <Slider {...settings}> 
        {allCourse?.map ((data) =>
        <div key={data.id}>
          <CourseCard
            key = {data.id}
            id = {data.contentDetails.upload.videoId}
            imageAlt ={data.snippet.title}  
            imageSrc = {data.snippet.thumbnails.standard.url}
            title = {data.snippet.title}
            date = {moment(data.snippet.publishedAt).fromNow()}
            newPrice = {new Date(data.snippet.publishedAt).getDate() + '0'}
            oldPrice = {Math.floor(new Date(data.snippet.publishedAt).getDate() + '0') + 30}
            data = {data}
          />
        </div>
        )}
      </Slider>
		 </div>	
		</div>
	)
}

// const deepText = {
// 	fontWeight : "700"
// }

export default OtherCourses
