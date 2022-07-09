import React, {useEffect} from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncCourses,getAllcourses,  getSelectedCourse } from '../../Store/courseSlice';
import { Spinner } from '@chakra-ui/react';
import CourseCard from '../../Component/courseCard';
import CourseSlider from '../../Component/CourseSlider';
import { useParams } from 'react-router-dom';


const  OtherCourses = () => {
  const dispatch = useDispatch();
  const paramsId = useParams().id;
  const allCourses = useSelector(getAllcourses);
  const selectedCourses = useSelector(getSelectedCourse);
  
  useEffect(() => {
		dispatch(fetchAsyncCourses())
	},[dispatch, paramsId]);



  //compare allcourses and Selected courses and return the unsimilar ones
  const similarCourses = allCourses.filter(course => course.videoId !== selectedCourses[0]?.id);

  


  return (
    <div className = "other_courses">
      {similarCourses.length === 0 && <div  style = {{textAlign: 'center', padding: '100px'}}>
      <Spinner  size="xl"/></div> }
      <CourseSlider
        heading={ "Other Courses" }
        subHeading={ "Check out what others are learning " }>
        {similarCourses?.map ((data) =>
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

export default OtherCourses
