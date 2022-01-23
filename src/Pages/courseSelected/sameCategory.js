import React, {useEffect} from 'react';
//import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import { settings } from '../../Styles/settings';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncCourses,getAllcourses } from '../../Store/courseSlice';
import { Spinner } from '@chakra-ui/react';
//import TopCoursesCard from '../categoryListPage/topCoursesCard';
import CourseCard from '../../Component/courseCard';
import { useParams } from 'react-router-dom';


const  SameCategory = () => {
  const dispatch = useDispatch();
  const allCourses = useSelector(getAllcourses);
  //const allCourse = featuredCourses.result;
  let  loading = useSelector(state => state.rootReducer.courseSlice.isLoading);
  
  
  //const [showCartButton, setShowCartButton] = useState(false)
   const paramsId = useParams().id;

  useEffect(() => {
    //dispatch(updateLoading(true))
			dispatch(fetchAsyncCourses())
		//	dispatch(updateLoading(false))
	},[dispatch, paramsId]);

  if (loading || allCourses.length === 0) {
    return  <div  style = {{textAlign: 'center', padding: '100px'}} >
     <Spinner  size="xl"/>
  </div>    
  }

    return (
        <div className = "sameCategoryCourses-div">
          <div className = 'heading'>
             <p style = {{textAlign: 'center',fontSize: '25px'}}>OTHER  COURSES</p>
          </div>
          <div className = "sameCategoryCourses"> 
            <Slider {...settings}> 
				    {allCourses?.map ((data) =>
            <div key={data.id}>
              <CourseCard
               key = {data.id}
               id = {data.videoId}
               imageAlt ={data.snippet.title}  
               imageSrc = {data.snippet.thumbnails.high.url}
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

export default SameCategory
