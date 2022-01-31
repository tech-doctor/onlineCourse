import React, { useEffect, useState } from 'react';
import { Badge, useToast} from "@chakra-ui/react";
import { Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartList } from '../Store/databaseSlice';
import { useHistory } from 'react-router-dom';
//import { updateIsPurchased } from '../Store/courseSlice'


const CourseCard = (props) => { 
  const dispatch = useDispatch();
  const toast = useToast();
  const history = useHistory();

  const { data,  id, imageAlt, imageSrc, title, date, newPrice, oldPrice} = props
  const cartList = useSelector(state => state.rootReducer.databaseSlice.cartList);
  const purchasedItem = useSelector(state => state.rootReducer.databaseSlice.purchasedItem)
  const [showCartButton, setShowCartButton] = useState(false)
  const [isPurchased, setIsPurchased] = useState(false)

 useEffect(() => {
  setPurchased();
},[]);
 

const setPurchased = () => {
  purchasedItem.forEach(element => {
    if(element.snippet.title === title){
      setIsPurchased(true);
    }
  })
}
 

  const handleToast = (description, status) => {
	toast({
		position: 'top-right',
		status,
		description,
		duration: 2000,
	});
}


  const handleClick = () => {
    dispatch(updateCartList(data))
    //dispatch(updateIsPurchased(data))
    
    const listIndex = cartList.findIndex(item => item.snippet.title === data.snippet.title);
    listIndex === -1 ? handleToast(' 1  item added to Cart', 'success'):
    handleToast('Item already in Cart', 'error')			
  }



	return (
		<div className= "card-item" onMouseEnter={() => setShowCartButton(true)}onMouseLeave={() => setShowCartButton(false)}> 
      <Link to = {`/courses/${id}`} className='link' style = {{textDecoration: 'none', color: 'black'}}>
        {showCartButton && (
          <div className='overlay'></div>
        )}		 
        <div className='card-inner'>
          <div className='card-top'>
            <img alt ={imageAlt}  src = {imageSrc}/>
          </div>
          <div className='card-bottom'>
            <div style={{marginTop: '5px',}} className='card-info'>
              <span style = {deepText}>{title}</span><br/>
              <span >{date}</span>
              <p>
              <span style = {deepText}>₦{newPrice} </span>
              <span style = {{textDecoration: "line-through"}}>₦{oldPrice}</span>
              </p>
              {newPrice > 160 ? 
              <Badge className='best-selling' variant="solid" colorScheme="green" px={2}>
              Best Selling
            </Badge>: ''} 
            </div>
          </div>
        </div>	
      </Link>
      	{showCartButton && (
					<div className='button'>
            {isPurchased? <button onClick={()=> {history.push(`/courses/${id}/watch`)}}>Access Course</button> :
            <button onClick={handleClick}>Add To Cart</button> }
						
				</div> )}
		</div>
	)
}

const deepText = {
	fontWeight : "700"
}

export default CourseCard
