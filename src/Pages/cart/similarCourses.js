import React, {useEffect} from 'react'
import { Spinner} from "@chakra-ui/react"
import CourseCard from '../../Component/courseCard';
import CourseSlider from '../../Component/CourseSlider';
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import { getAllcourses, fetchAsyncCourses } from '../../Store/courseSlice'

const  SimilarCourses = () => {
  const dispatch = useDispatch();
  const allCourses = useSelector(getAllcourses);
  const cartList = useSelector(state => state.rootReducer.databaseSlice.cartList);
  

  useEffect(() => {
			dispatch(fetchAsyncCourses())
	},[dispatch]);

    const similarCourses = allCourses.filter(course => {
      let isSimilar = false;
      cartList.forEach(item => {
        if(course.snippet.title === item.snippet.title){
          isSimilar = true;
        }
      }
      )
      return !isSimilar;
    })

	return (
		<div className = "otherCourses">
      {similarCourses.length === 0 && <div style = {{textAlign: 'center', padding: '100px'}} >
      <Spinner  size="xl"/>
      </div> }
      <CourseSlider
        heading={ "Similar Courses" }
        subHeading={ "Check out what others are learning " }
      >
        {similarCourses?.map ((data) =>
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
