import React, { useEffect, useState } from 'react';
import { useToast} from "@chakra-ui/react";
import { Link, useHistory} from 'react-router-dom';
import { CardItem } from './styles/course';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartList, removeItem } from '../Store/databaseSlice';



 

const CourseCard = (props) => { 
  const dispatch = useDispatch();
  const toast = useToast();
  const history = useHistory();

  const { data,  id, index, imageAlt, imageSrc, title, date, newPrice, oldPrice, bestSelling} = props
  
  const cartList = useSelector(state => state.rootReducer.databaseSlice.cartList);
  const purchasedItem = useSelector(state => state.rootReducer.databaseSlice.purchasedItem)
  const [showCartButton, setShowCartButton] = useState(false)
  const [isPurchased, setIsPurchased] = useState(false);
  const [isAdded, setIsAdded] = useState(false);


  useEffect(() => {
    purchasedItem.forEach(element => {
      if(element.snippet.title === title){
        setIsPurchased(true);
      }
    })
    cartList.forEach(element => {
      if(element.snippet.title === title){
        setIsAdded(true);
      }
    })

    
  },[purchasedItem, cartList, title]);

  function TextAbstract(text, length) {
    if (text == null) {
      return "";
    }
    if (text.length <= length) {
        return text;
    }
    text = text.substring(0, length);
    //last = text.lastIndexOf(" ");
    //text = text.substring(0, last);
    return text + " ...";
  }
  const textAbstract = TextAbstract(title, 30);

  


  const handleToast = (description, status) => {
	toast({
		position: 'top-right',
		status,
		description,
		duration: 2000,
	});
}


  const addToCart = () => {
    dispatch(updateCartList(data))
    handleToast('Item added to Cart', 'success');	
    setShowCartButton(false);
  }

  const removeFromCart = () => {
    dispatch(removeItem(data))
    handleToast('Item removed from Cart', 'error');
    setShowCartButton(false)
    setIsAdded(false);
  }





	return (
		<CardItem onMouseEnter={() => setShowCartButton(true)}onMouseLeave={() => setShowCartButton(false)}> 
      <Link to = {{pathname: `/courses/${id}`, state: {prevPath: history.location.pathname, position: data.position}}} className='link' style = {{textDecoration: 'none', color: 'black'}}>
        {showCartButton && (
          <div className='overlay'>
          </div>)}		 
        <div className='card-inner'>
          <div className='card-top'>
            <img style={{backgroundColor:'gray'}} loading='lazy' width = "320px" height = '100%' alt ={imageAlt}  src = {imageSrc}/>  
          </div>
          <div className='card-bottom'>
            <div style={{marginTop: '5px',}} className='card-info'>
              <p className='title'>{textAbstract}</p>
              <p className='date' >{date}</p>
              {bestSelling? 
              <div className='best-selling'>
               BEST SELLING
              </div>
               : null} 
              <p className='price'>
              <span className='new_price'>₦{newPrice} </span>
              <span className='old_price' style = {{textDecoration: "line-through"}}>₦{oldPrice}</span>
              </p> 
            </div>
          </div>
        </div>	
      </Link>
      {showCartButton && (
      <div className='button'>
      {isPurchased? <button onClick={()=> {history.push(`/courses/${id}/watch`)}}>Access Course</button>: 
      isAdded? <button onClick={removeFromCart} style={{color: 'red'}} >Remove From Cart</button> :
      <button onClick={addToCart}>Add To Cart</button> }		
      </div>
      )}
		</CardItem>
	)
}

export default React.memo(CourseCard);
