import React from 'react'
import { Spinner} from "@chakra-ui/react";
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { getSelectedCategory } from '../../Store/courseSlice';
import { settings } from '../../Styles/settings';
import moment from 'moment';
import CourseCard from '../../Component/courseCard';
import '../../Styles/categoryListPage.scss'
import CourseSlider from '../../Component/CourseSlider';

const TopCourses = (props) => {
  const topCourses = useSelector(getSelectedCategory);
  const loading = useSelector(state => state.rootReducer.courseSlice.isLoading);
  const {titleFunc } = props



const topCoursesArray = topCourses.slice(4,11)

    if (loading) {
      return  <div  style = {{textAlign: 'center', padding: '100px'}} >
      <Spinner  size="xl"/>
    </div>
    }

    return (
      <section className = "TopCourses">
        <div className='category_heading'>
         <p>TOP {titleFunc.toUpperCase()} COURSES</p>
        </div>
        <CourseSlider 
         noHeading={true}
        >
          {topCoursesArray.map (data =>
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
          )}
        </CourseSlider>	
      </section>       
    );
};

export default TopCourses;