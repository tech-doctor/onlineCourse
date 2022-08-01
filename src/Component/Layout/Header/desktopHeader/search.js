import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory} from 'react-router-dom';
import { getAllcourses, fetchAsyncCourses } from "../../../../Store/courseSlice"


const Search = ({searchItem}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const allCourses = useSelector(getAllcourses);
  
  
  useEffect(() => {
    dispatch(fetchAsyncCourses());
  },[dispatch]);

  
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

  
  
   const filteredCourses = allCourses.filter((value) => {
    if(searchItem === '') return;
    else if(value.title.toLowerCase().includes(searchItem.toLowerCase())){
      return value;
    } 
  })


  return (
     <>
      {filteredCourses.length > 0 && <div className="drop_down">
        {filteredCourses.slice(0,7).map((item, index) => 
          <Link 
          key={item.key}
          to = {{pathname: `/courses/${item.videoId}`, state: {prevPath: history.location.pathname, position: item.position}}} className='link' style = {{textDecoration: 'none', color: 'black'}}>
            <div 
              className="drop_down_item">
                <Highlighted
                  text={item.title}
                  highlight={searchItem}
                />
            </div>
          </Link>
        )}
      </div>}
    </> 
  )
}



export default Search;