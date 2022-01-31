import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Spinner} from "@chakra-ui/react"
import Slider from 'react-slick';
import { settings } from '../../Styles/settings';
import { fetchAsyncCourses, getAllcourses, updateLoading } from '../../Store/courseSlice'
import moment from 'moment'
import CourseCard from '../../Component/courseCard';
//import { useParams } from 'react-router-dom';


const FeaturedCourses = () => {
  const dispatch = useDispatch();
  const allCourses = useSelector(getAllcourses);
 // const allCourse = featuredCourses.result;
  let  loading = useSelector(state => state.rootReducer.courseSlice.isLoading);
  

  useEffect(() => {
    dispatch(updateLoading(true))
			dispatch(fetchAsyncCourses())
			dispatch(updateLoading(false))
	},[dispatch]);

  

  
	

 // const [showCartButton, setShowCartButton] = useState(false)

	if (loading || allCourses.length === 0) {
    return  <div  style = {{textAlign: 'center', padding: '100px'}} >
     <Spinner  size="xl"/>
  </div>    
  }
  



	return (
		<div className = "featuredCourses">
		  <div className='heading'>
				<p style = {{fontSize: '30px'}}>Featured Courses</p>
			</div>
			<div className = 'course-card'>
			<Slider {...settings}>
				{allCourses?.map ((data) =>
				(<CourseCard
					key = {data.id}
					id = {data.videoId}
					// isPurchased = {data.isPurchased}
					imageAlt ={data.snippet.title}  
					imageSrc = {data.snippet.thumbnails.high.url}
					title = {data.snippet.title}
					date = {moment(data.snippet.publishedAt).fromNow()}
					newPrice = {new Date(data.snippet.publishedAt).getDate() + '0'}
					oldPrice = {Math.floor(new Date(data.snippet.publishedAt).getDate() + '0') + 30}
				   // allCourse = {allCourse}
					data = {data}
				/>)
				)}
				</Slider>
			</div>
		</div>
	)
}


export default FeaturedCourses


 