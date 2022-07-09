import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import moment from 'moment';
import { Article } from '../../Component/styles/course';
import Filter from '../../Component/Filter';

const AllCategories = ({ titleFunc, topCourses}) => {
  const history = useHistory();
  const [searchItem, setSearchItem] = useState('');
  
  const handleSearch = (e) => {
    setSearchItem(e.target.value);
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
      <div key = {data.key} className='allCategories-box'>
        <Link style = {{textDecoration: 'none'}}   to =  {{pathname: `/courses/${data.videoId}`, state: {prevPath: history.location.pathname,position: data.position}}}>
          <Article className='all_courses' style={{justifyContent:'flex-start'}}>
          <div className='image'>
          <img loading='lazy' width={'200px'} height = {'100%'} src={data.imageUrl} alt = {data.title}/>
          </div>
          <div className='right'>
            <p className='title category_title'>{data.title}</p>
            <p className='details category_detail'>{`Updated about ${moment(data.publishedAt).fromNow()}`}</p>
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
export default React.memo(AllCategories);