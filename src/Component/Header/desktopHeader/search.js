import React, {useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory} from 'react-router-dom';
import { getAllcourses, fetchAsyncCourses } from "../../../Store/courseSlice"


const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const allCourses = useSelector(getAllcourses);
  const [searchItem, setSearchItem] = useState('');
  const [openSearch, setOpenSearch] = useState(false);
  
  useEffect(() => {
    dispatch(fetchAsyncCourses())
  },[dispatch]);

  // search  function  to update the search result

  const Highlighted = ({ text = "", highlight = "" }) => {
    if (!highlight.trim()) {
      return <span>{text}</span>;
    }
    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);
  
    return (
      <span>
        {parts.filter(String).map((part, i) => {
          return regex.test(part) ? (
            <mark key={i}>{part}</mark>
          ) : (
            <span key={i}>{part}</span>
          );
        })}
      </span>
    );
  };

  
  

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  }
  
   const filteredCourses = allCourses.filter((value) => {
    if(searchItem === ''){ 
      return;
    }else if(value.title.toLowerCase().includes(searchItem.toLowerCase())){
      return value;
    } 
  })

  //console.log(filteredCourses)

  return (
     <div className = "search">
      <input 
      onChange={handleSearch}
      type = "text" placeholder = "Search" className = "search-input"/>	
      <img src = '/Assets/search.png' style = {{width: '18px', height: '18px'}} className = "search-icon" alt='search'/>
      {
        filteredCourses.length > 0 && <div 
        //style={style} 
        className="drop_down">
        {filteredCourses.slice(0,7).map((item, index) => 
          <Link 
          key={item.key}
          to = {{pathname: `/courses/${item.videoId}`, state: {prevPath: history.location.pathname, position: item.position}}} className='link' style = {{textDecoration: 'none', color: 'black'}}>
            <div 
              onMouseOver={(e) => e.target.style.backgroundColor = '#E8E8E8'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
              style={itemStyle}
              className="drop_down_item">
                {item.title}
                <Highlighted
                  text={item.title}
                  highlight={searchItem}
                />
            </div>
          </Link>
        )}
      </div>
      }
    
    </div> 
  )
}

const itemStyle = {
  padding: '10px 10px',
  cursor: 'pointer',
  backgroundColor: '#fff',
  color: '#000',
  fontSize: '13px',
  hover: {
    backgroundColor: 'red',
  }
}



export default Search;