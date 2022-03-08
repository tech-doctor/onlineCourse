import React from 'react'
import '../../Styles/categoryListPage.scss'
import { Spinner} from "@chakra-ui/react"
import Slider from 'react-slick';
import { settings } from '../../Styles/settings';
import moment from 'moment';
import CourseCard from '../../Component/courseCard';


const TopCourses = (props) => {
const {loading,topCourses, titleFunc } = props



const topCoursesArray = topCourses.slice(4,11)

    if (loading || topCourses.length === 0) {
      return  <div  style = {{textAlign: 'center', padding: '100px'}} >
      <Spinner  size="xl"/>
    </div>
    }

    return (
      <div className = "TopCourses">
        <div>
         <p style = {{ fontSize: '25px'}}>Top {titleFunc} Courses</p>
        </div>
        <div className = 'course-card'>
         <Slider {...settings }> 
          {topCoursesArray.map (data =>
          <CourseCard
            key = {data.id}
            id = {data.videoId}
            // isPurchased = {data.isPurchased}
            imageAlt ={data.snippet.title}  
            imageSrc = {data.snippet.thumbnails.high.url}
            title = {data.snippet.title}
            date = {moment(data.snippet.publishedAt).fromNow()}
            newPrice = {new Date(data.snippet.publishedAt).getDate() + '0'}
            oldPrice = {Math.floor(new Date(data.snippet.publishedAt).getDate() + '0') + 30}
            data = {data}
          />
          )}
         </Slider>
        </div>	
      </div>       
    );
};

export default TopCourses;