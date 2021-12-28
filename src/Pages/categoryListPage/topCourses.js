import React from 'react'
import '../../Styles/categoryListPage.scss'
import { Spinner} from "@chakra-ui/react"
//import {Link} from 'react-router-dom'
import Slider from 'react-slick';
import { settings } from '../../Styles/settings';
import moment from 'moment';
import TopCoursesCard from './topCoursesCard'


const TopCourses = (props) => {
const {loading,topCourses } = props

    if (loading || topCourses.length === 0) {
      return  <div  style = {{textAlign: 'center', padding: '100px'}} >
      <Spinner  size="xl"/>
    </div>
    }

    return (
      <div className = "TopCourses">
        <div>
         <p style = {{ fontSize: '25px'}}>Top JS Courses</p>
        </div>
        <div className = 'course-card'>
         <Slider {...settings}> 
          {topCourses.map (data =>
          <TopCoursesCard
            key = {data.id}
            id = {data.id}
            imageAlt ={data.snippet.title}  
            imageSrc = {data.snippet.thumbnails.standard.url}
            title = {data.snippet.title}
            date = {moment(data.snippet.publishedAt).fromNow()}
            newPrice = {new Date(data.snippet.publishedAt).getDate() + '0'}
            oldPrice = {Math.floor(new Date(data.snippet.publishedAt).getDate() + '0') + 30}
          />
          )}
         </Slider>
        </div>	
      </div>       
    );
};

export default TopCourses;