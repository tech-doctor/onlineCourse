import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import  {faAngleDown}  from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import {Badge, Collapse , Button} from "@chakra-ui/react";
import moment from 'moment';
import { useSelector } from 'react-redux';
import { Stack,Skeleton} from "@chakra-ui/react"
import { getSelectedCategory } from '../../Store/courseSlice';
import CourseList from '../../Component/courseList';
import { Article } from '../../Component/styles/course';
import Filter from '../../Component/Filter';

const AllCategories = (props) => {
  const topCourses = useSelector(getSelectedCategory);
  const { titleFunc} = props;


  return (
    <section className = "allCategory">
      <Filter
      heading = {`All ${titleFunc} Courses`}
      />
      {topCourses.map(data =>  (
      <div key = {data.id} className='allCategories-box'>
        <Link style = {{textDecoration: 'none'}}   to = {`/courses/${data.videoId}`}>
          <Article className='all_courses' style={{justifyContent:'flex-start'}}>
          <div className='image'>
          <img loading='lazy' width={'200px'} height = {'100%'} src={data.snippet.thumbnails.high.url} alt = {data.snippet.title}/>
          </div>
          <div className='right'>
            <p className='title category_title'>{data.snippet.title}</p>
            <p className='details category_detail'>{`Updated about ${moment(data.snippet.publishedAt).fromNow()}`}</p>
            <p className='price category_price'>₦{new Date(data.snippet.publishedAt).getDate() + '0'}</p>
          </div>
          </Article>
          
        </Link>   
      </div> 
      ))}
      <div className='button'>
        <button>
           Load More
        </button>
      </div>
    </section>
  )
}

const deepText = {
  fontWeight: '700'
}

export default AllCategories;