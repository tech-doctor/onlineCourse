import React from 'react'
import { Spinner} from "@chakra-ui/react";
//import { useParams } from 'react-router-dom';
import moment from 'moment';
import { useSelector} from 'react-redux';
import CourseCard from '../../Component/courseCard';
import '../../Styles/categoryListPage.scss'
import CourseSlider from '../../Component/CourseSlider';

const TopCourses = ({titleFunc, topCourses}) => {
  const courseStatus = useSelector(state => state.rootReducer.courseSlice.status);

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
          />
          )}
        </CourseSlider>	
        </div>
      }
      </section>       
    );
};

export default React.memo(TopCourses);