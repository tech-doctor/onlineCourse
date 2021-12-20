import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faUserCircle}  from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
//import { Container } from '@chakra-ui/react'

const  Profile = (props) => {
  
  const {profileVisibility, setProfileVisibility, cartList, itemsBought} = props
	const container = React.createRef()
  //console.log(itemsBought)
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
             <li><Link to = "/home/my-courses" style = {{textDecoration: 'none', color: 'black'}} >My courses</Link><small>{itemsBought.length}</small></li>
             <li><Link to = "/cart" style = {{textDecoration: 'none', color: 'black'}} >My Cart</Link><small>{cartList.length}</small></li>
             <li><Link to = "/dashboard/purchase-history" style = {{textDecoration: 'none', color: 'black'}} >Purchase history</Link><small>5</small></li>
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

export default Profile 
