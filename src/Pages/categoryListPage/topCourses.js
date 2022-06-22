import React, {useEffect} from 'react'
import { Spinner} from "@chakra-ui/react";
import Slider from 'react-slick';
import { useParams } from 'react-router-dom';
import { getSelectedCategory } from '../../Store/courseSlice';
import { settings } from '../../Styles/settings';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import { fetchAsyncCategories } from '../../Store/courseSlice';
import CourseCard from '../../Component/courseCard';
import '../../Styles/categoryListPage.scss'
import CourseSlider from '../../Component/CourseSlider';

const TopCourses = (props) => {
 // const topCourses = useSelector(getSelectedCategory);
  const loading = useSelector(state => state.rootReducer.courseSlice.isLoading);
  const courseStatus = useSelector(state => state.rootReducer.courseSlice.status);
  const errorMessage = useSelector(state => state.rootReducer.courseSlice.errorMessage);
  const dispatch = useDispatch();
  const {playlistId} = useParams();
  const {titleFunc, topCourses} = props

//   useEffect(() => {
//     let mounted = true;
//     if(mounted){
//     //if(courseStatus === 'idle'){
//       dispatch(fetchAsyncCategories(playlistId)) 
//     //}
//     }
//     return () => {
//       mounted = false;
//     }
// },[dispatch,playlistId]);

const topCoursesArray = topCourses.slice(4,11)
    return (
      <section className = "TopCourses">
        {courseStatus === 'pending'  && <div  style = {{textAlign: 'center', padding: '100px'}} >
          <Spinner  size="xl"/>
        </div>}
        {courseStatus === 'rejected' && <div  style = {{textAlign: 'center', padding: '100px 0', color:'grey'}} >
          <h3>{` please try again!`}</h3>
        </div>}
        {courseStatus === 'fufilled' && <div>
        <div className='category_heading'>
         <p>TOP {titleFunc.toUpperCase()} COURSES</p>
        </div>
        <CourseSlider 
         noHeading={true}
        >
          {topCoursesArray.map(data =>
          <CourseCard
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
          />
          )}
        </CourseSlider>	
        </div>
      }
      
      </section>       
    );
};

export default React.memo(TopCourses);