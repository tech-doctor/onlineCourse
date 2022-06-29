import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import { Spinner, Stack,Skeleton, useToast} from "@chakra-ui/react"
import { Link, useHistory,useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getSelectedCourse } from '../../Store/courseSlice'
import { updateCheckoutList, updateCartList, removeItem } from '../../Store/databaseSlice'
import VideoPlayer from '../../Component/View/videoPlayer'

const  CategoryDetails = (props) => {
  const { id, title, duration, likeCount,viewCount,embedLink,publishedAt, price, bestSelling} = props;
  const paramsId = useParams().id;
  const dispatch = useDispatch();
  const history = useHistory();
  const {position, prevPath} = history.location.state;
  const toast = useToast();

  const selectedCourses = useSelector(getSelectedCourse);
  const cartList = useSelector(state => state.rootReducer.databaseSlice.cartList);
  const purchasedItem = useSelector(state => state.rootReducer.databaseSlice.purchasedItem)
  const [isAdded, setIsAdded] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);


  useEffect(() => {
    purchasedItem.forEach(element => {
      if(paramsId === element.id){
        setIsPurchased(true);
      }
    })
    cartList.forEach(element => {
      if(element.snippet.title === title){
        setIsAdded(true);
      }
    })
    return () => {
      setIsAdded(false);
    }
},[paramsId, purchasedItem]);


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
    handleToast('1 item added to cart', 'success');
    setIsAdded(true);
  }

  const removeFromCart = () => {
    dispatch(removeItem(selectedCourses[0]));
    handleToast('Item removed from Cart', 'error');
    setIsAdded(false);
  }

  const handleBuyButton = ()  => {
    dispatch(updateCheckoutList(selectedCourses[0]));
    history.push('/cart/checkout');
  }

  function category () {
    switch (prevPath) {
      case '/category/PLEu7Y7_blvLXlM820Uy30N8ay-eoZVyIK': 
        return('HTML');
      case '/category/PLEu7Y7_blvLVwibRK9szNWmTios4OsLF2':
        return( 'CSS' );
      case '/category/PLEu7Y7_blvLVNfrsztZmfWEw57lWyuUfI':
        return( 'Javascript' );
      case '/category/PLEu7Y7_blvLVVwb0lGCk9J1E4mJcDO808':
        return( 'JQuery' );
      default:
        return( 'Random' );
    }
  }
  

  return (
    <section className = "category_top">
      <h4 className = "category-heading">
        <span>Category</span>
        <span> &#62;</span>
        <span>{category()}</span>
        {position !== undefined &&
        <>
        <span> &#62;</span>
        <span>{position < 10? `0${position}`:position}</span>
        </> 
        }
      </h4>
    <div className = "categoryFlex">
      <div className = "preview">
        {!embedLink?  <Stack>
          <Skeleton height="200px" />
        </Stack>:  
        <div>
        <div className = "iframe">
         <VideoPlayer
         title = {title}
         />
        </div>
        <div className = 'instruction'>
        <span >
        <FontAwesomeIcon icon = {faArrowUp}/>
        </span><br/>
          Tap to preview course 
        </div> 
        </div>
         } 
      </div>
      {!title? 
      <div style = {{textAlign: 'center', margin: 'auto'}}  >
          <Spinner/>
        </div> :  
      <div className='categoryDetails'> 
        <div className='tags'>
          {bestSelling &&  <span className='best_selling'>Best Selling</span>}
          <span className='likes'>{`${likeCount} Likes`}</span>
          <span className='views'>{`${viewCount} Views`}</span>
        </div>
        <div className = 'title'>
          <h3>{title}</h3>
        </div>
        <div className = 'description'>
          <span>{`Still on still make this ${title.toLowerCase()} course for no loss, like my videos and subscribe to the channel base on ministry movements. Taink you.`}</span>
        </div>
        <div style = {{fontSize : '14px'}} className='duration_div'>
          <p className='duration'><img src='/Assets/duration.png' alt='icon'/><span>Duration:<span>{duration}</span></span></p>
          <p className='update'><img src='/Assets/update.png' alt='icon'/><span>Latest updated:<span>{publishedAt}</span></span></p>
          <p className='language'><img src='/Assets/language.png' alt='icon'/><span>language:<span>Pidgin</span></span></p>
        </div>
        <div className='price'>
          <p>₦{price}</p>
        </div>
        <div className =" button">
          {isPurchased?  <Link to = {`/courses/${paramsId}/watch`}>
            <button className='access'>Access Course</button>
          </Link>:
          <div className='ADD-BUY'>
            {isAdded?  <button onClick = {removeFromCart} style= {{color:'red', backgroundColor:'rgb(100%, 96.4%, 96.4%)'}}>Remove From Cart</button>: <button 
            className='add_to_cart'
            onClick = {handleCartButton}
            >Add To Cart</button>}
            <button
              className='buy_now'
              onClick={handleBuyButton}
            >Buy Now</button>
          </div>}
        </div>
      </div>}
      </div>
    </section>
  )
}

export default React.memo(CategoryDetails);




