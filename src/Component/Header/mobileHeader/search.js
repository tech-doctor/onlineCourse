import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faSearch, faTimes} from '@fortawesome/free-solid-svg-icons'

const  Search = (props) =>  {

  const {setSearchInput} = props
  
  const handleSearchCancel = () => {
    setSearchInput(false)
  }


	return (
		<div>
      <input style = {mobileSearchStyle} type = 'text' placeholder = 'Enter search query...'/>	
      <FontAwesomeIcon
        onClick = {handleSearchCancel}  
        style ={cancelIcon} 
        icon={faTimes}
      />		
		</div>
	)
}

// const searchIcon = {
//   fontSize: '22px', 
//   position: 'fixed', 
//   left: '80px', 
//   top: '20px',
//   zIndex: '100',
//   cursor:  'pointer',
//   border: 'none'
// }

const cancelIcon = {
  fontSize: '22px', 
  position: 'fixed', 
  right: '20px', 
  top: '20px',
  zIndex: '100',
  cursor: 'pointer'
}

const mobileSearchStyle = {
  width: '90%',
  fontSize: '20px',
  padding: '1em 1.5em',
  border: 'none',
  outline: 'none',
  position: 'absolute',
  top: '-65px',
}
export default Search
