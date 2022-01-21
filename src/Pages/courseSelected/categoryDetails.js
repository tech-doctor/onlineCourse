import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faAngleRight, faArrowUp} from '@fortawesome/free-solid-svg-icons'
import { Spinner, Stack,Skeleton, useToast} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSelectedCourse } from '../../Store/courseSlice'
import { updateCheckoutList, updateCartList } from '../../Store/databaseSlice'

const  CategoryDetails = (props) => {
  const { id, title, duration, likeCount,viewCount,embedLink,publishedAt} = props;
  const paramsId = useParams().id;
  const dispatch = useDispatch();
  const toast = useToast();

  const selectedCourses = useSelector(getSelectedCourse);
  const cartList = useSelector(state => state.rootReducer.databaseSlice.cartList);

  const handleToast = (description, status) => {
    toast({
      position: 'top-right',
      status,
      description,
      duration: 2000,
    });
  }

  const handleCartButton = () => {
    dispatch(updateCartList(selectedCourses[0]));
    const listIndex = cartList.findIndex(item => item.snippet.title === selectedCourses[0].snippet.title);
    listIndex === -1 ? handleToast(' 1  item added to Cart', 'success'):
    handleToast('Item already in Cart', 'error')
  }


  return (
    <div className = "categoryFlex">
      {!title? <div style = {{textAlign: 'center', padding: '100px'}}  >
          <Spinner/>
        </div> :  
      
      <div className='categoryDetails'>
        
        <div className = "category-heading">
          <span style = {{fontSize: '15px'}}>Category <FontAwesomeIcon icon = {faAngleRight}/></span>
          <span style = {{fontSize: '15px'}}>HTML <FontAwesomeIcon icon = {faAngleRight}/></span>
          <span style = {{fontSize: '15px'}}>09</span>
        </div>
        <div className = "details">
          <div className = 'title'>
          <h3>{title}</h3>
          </div>
          <div className = 'description'>
            <span>{'description'}</span>
          </div><br/>
          <div style = {{fontSize : '14px'}} className=' duration - counts'>
            <span>Duration: <span style = {{fontWeight: 'bold'}}>{duration}</span></span><br/>
            <span><span style = {{fontWeight: 'bold'}}>{likeCount} </span>Likes </span>
            <span><span style = {{fontWeight: 'bold'}}>{viewCount} </span>Views</span>
          </div>
          <div style = {{fontSize : '13px'}} className='time - language'>
            <span>Latest Upated: {publishedAt}</span>
            <span  style = {{fontWeight: 'bold'}}> All in pidgin English</span>
          </div>
        </div><br/>
        <div className =" ADD-BUY">
         <Link to = {`/courses/${paramsId}/watch`}>
            <button  style = {{cursor: 'pointer'}}>Access</button>
          </Link>
          <button 
          style ={{cursor : 'pointer'}}
          onClick = {handleCartButton}
          >Add To Cart</button>
          <Link to = '/cart/checkout'>
            <button 
             style = {{cursor: 'pointer'}}
             onClick={()=> {dispatch(updateCheckoutList(selectedCourses[0]))}}
             >Buy Now</button>
          </Link>
        </div>
      </div>}
      <div className = "preview">
        {!embedLink?  <Stack>
          <Skeleton height="200px" />
        </Stack>:  
        <div>
        <div className = "iframe">
          <iframe width="100%" height="200px" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay;  encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className = 'instruction'>
        <span >
        <FontAwesomeIcon icon = {faArrowUp}/>
        </span><br/>
          Tap to preview course 
        </div> 
        </div>} 
      </div>
    </div>
  )
}

export default CategoryDetails



// function removeTags(str) {
//   if ((str===null) || (str===''))
//       return false;
//   else
//       str = str.toString();
        
//   // Regular expression to identify HTML tags in 
//   // the input string. Replacing the identified 
//   // HTML tag with a null string.
//   return str.replace( /(<([^>]+)>)/ig, '');
