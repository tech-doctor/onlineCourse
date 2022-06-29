import React from 'react';
import { Article } from '../styles/course';

const  CourseList = ({title, image,bestSelling, price }) => {
  return (
    <Article className='courseList'>
      <div className='left'>
        <img width={'300px'} height = {'180px'} src={image} alt='list'/>
      </div>
      <div className='right'>
        <p className='title'>{`${title}`}</p>
        <p className='details'>Updated about 2 years ago</p>
        <p className='price'>{price}</p>
      </div> 
    </Article>
  );
}

export default CourseList;