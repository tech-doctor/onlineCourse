import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Article } from '../../Component/styles/course';
import Filter from '../../Component/Filter';

const AllCategories = ({ titleFunc, topCourses}) => {
  const [searchItem, setSearchItem] = useState('');
  
  const handleSearch = (e) => {
    setSearchItem(e.target.value);
    console.log(searchItem);
  }
  
  return (
    <section className = "allCategory">
      <Filter
      handleSearch = {handleSearch}
      heading = {`All ${titleFunc} Courses`}
      />
      {topCourses.filter((value) => {
        if(searchItem === ''){ 
          return value;
        }else if(value.snippet.title.toLowerCase().includes(searchItem.toLowerCase())){
          return value;
        } 
      }).map(data =>  (
      <div key = {data.id} className='allCategories-box'>
        <Link style = {{textDecoration: 'none'}}   to = {`/courses/${data.videoId}`}>
          <Article className='all_courses' style={{justifyContent:'flex-start'}}>
          <div className='image'>
          <img loading='lazy' width={'200px'} height = {'100%'} src={data.snippet.thumbnails.high.url} alt = {data.snippet.title}/>
          </div>
          <div className='right'>
            <p className='title category_title'>{data.snippet.title}</p>
            <p className='details category_detail'>{`Updated about ${moment(data.snippet.publishedAt).fromNow()}`}</p>
            <p className='price category_price'>₦{data.newPrice}</p>
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

export default React.memo(AllCategories);