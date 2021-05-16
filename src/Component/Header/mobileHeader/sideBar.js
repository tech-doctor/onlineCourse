import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faAngleRight, faUserCircle, faAngleDown} from '@fortawesome/free-solid-svg-icons'

const  SideBar = (props) => {
  const [closedCategory, setCategory] = useState(true)
	//const [angleRight, setAngleDirection] = useState(faAngleRight)

 const 	getStyle =  {
		display: closedCategory? 
		'none' : 'block',	
	}
  
	const MobileCategories = function category(){
    return (
      <div className = "category">
        <p onClick = {onAngleIconClick} style  = {{ cursor: 'pointer'}}>Categories {closedCategory? 
					 <FontAwesomeIcon  style ={{fontSize: '15px'}} icon={faAngleRight}/> :
          <FontAwesomeIcon  style ={{fontSize: '15px'}} icon={faAngleDown}/>
					}
					
				 </p>
      <ul style = {getStyle}>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>JQuery</li>
      </ul> 
        <p style = {{fontWeight : '700', cursor: 'pointer'}}>Random</p>
      </div>  
    )
  }


	 const  onAngleIconClick = () => {
		 //setAngleDirection(faAngleDown)
      setCategory(!closedCategory)
	 }
	
   const {isLoggedIn} = props

	return (
		<div>
		  <div className = "side-bar" style = {props.getSidebarStyle} >
        {!isLoggedIn? 
          <div className ="category">
          <button>Login</button><br/>
          <button>Register</button>
          <MobileCategories/>
        </div> : 
        <div  className = "sidebar-profile">
          <div className = 'profile-details'>
            <div className = "avatar" style = {{fontSize: '40px'}}>
              <FontAwesomeIcon className = "user-icon" icon={faUserCircle}/>
            </div>
            <div className = "email-name">
              <span style = {{fontWeight: '700', fontSize: '20px'}} className = "name">Oluka Damilola Isaac</span><br/>
              <span className = "email">hilghsilk2damson@gmail.com</span>
            </div>      
          </div>
          <div className = "profile-list">
            <MobileCategories/>
            <ul>
              <li>My courses <small>1</small></li>
              <li>My Cart <small>2</small></li>
              <li>Purchase history <small>3</small></li>
            </ul>  
          </div>
          <div className = "logOut">
            <p style  = {{cursor: "pointer"}}>LogOut</p>
          </div>
        </div>  
        }
        
        
      </div>	
		</div>
	)
}

export default SideBar
