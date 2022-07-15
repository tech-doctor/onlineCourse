import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Spinner} from "@chakra-ui/react"
import { fetchAsyncCourses, getAllcourses, updateLoading } from '../../Store/courseSlice'
import moment from 'moment'
import CourseCard from '../../Component/courseCard';
import CourseSlider from '../../Component/CourseSlider';
import { Loader } from '../../Component/Loader'
//import { useParams } from 'react-router-dom';


const FeaturedCourses = () => {
  const dispatch = useDispatch();
  const allCourses = useSelector(getAllcourses);
 
  let  loading = useSelector(state => state.rootReducer.courseSlice.isLoading);
  

  useEffect(() => {
    dispatch(updateLoading(true))
			dispatch(fetchAsyncCourses())
			dispatch(updateLoading(false))
	},[dispatch]);

  

  
	

 // const [showCartButton, setShowCartButton] = useState(false)

	if (loading || allCourses.length === 0) {
    return  <div  style = {{textAlign: 'center', padding: '25% 0 20% 0'}} >
     <Loader
      speed={'0.55s'}
      size={'xl'}
      />
  </div>    
  }
  



	return (
		<div className = "featuredCourses">
			<CourseSlider
        heading={ "Featured Courses" }
        subHeading={ "Check out what others are learning " }
      >
				{allCourses?.map ((data) =>
				(<CourseCard
					key = {data.key}
					id = {data.videoId}
					imageAlt ={data.title}  
					imageSrc = {data.imageUrl}
					title = {data.title}
					date = {moment(data.publishedAt).fromNow()}
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


export default FeaturedCourses


 