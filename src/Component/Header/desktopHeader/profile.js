import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faUserCircle}  from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const  Profile = (props) => {
  const cartList = useSelector(state => state.rootReducer.databaseSlice.cartList);
 const purchasedItem = useSelector(state => state.rootReducer.databaseSlice.purchasedItem)

  const {profileVisibility, setProfileVisibility} = props
	const container = React.createRef()
  
	const handleClickOutside = (event) => {
		if (
			container.current &&
			!container.current.contains(event.target)
		) {
			setProfileVisibility(false)	
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		}
	})

  return (
		<div>
      {profileVisibility? (
        <div className = 'profile' ref = {container}>
         	<div className = 'profile-details'>
           <div className = "avatar" style = {{fontSize: '40px'}}>
             <FontAwesomeIcon className = "user-icon" icon={faUserCircle}/>
           </div>
           <div className = "email-name">
             <span style = {{fontWeight: '700', fontSize: '20px'}} className = "name">Oluka Damilola Isaac</span><br/>
             <span className = "email">hilghsilk2damson@gmail.com</span>
           </div>         
         </div>
         <hr/>
         <div className = "profile-list">
           <ul>
           <Link to = "/home/my-courses" style = {{textDecoration: 'none', color: 'black'}} > <li>My courses <small>{purchasedItem.length}</small></li></Link>
             <Link to = "/cart" style = {{textDecoration: 'none', color: 'black'}} > <li>My Cart<small>{cartList.length}</small></li></Link>
             <Link to = "/dashboard/purchase-history" style = {{textDecoration: 'none', color: 'black'}} ><li>Purchase history<small>5</small></li></Link>
           </ul>
         </div>
         <hr/>
         <div className = "logOut">
           <p style = {{cursor: 'pointer'}}>LogOut</p>
         </div>
        </div> 
      ): ''}
		
		</div>
  )
}

export default React.memo(Profile); 
