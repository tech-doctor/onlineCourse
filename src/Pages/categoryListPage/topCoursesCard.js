// import React, { useState } from 'react'
// import {Badge} from "@chakra-ui/react"
// import { Link} from 'react-router-dom'



// const TopCoursesCard = (props) => { 
//   const [showCartButton, setShowCartButton] = useState(false)
//   const { id, imageAlt, imageSrc, title, date, newPrice, oldPrice} = props
  
// 	return (
//     <div>
// 		<div className= "card-item"  onMouseEnter={() => setShowCartButton(true)}onMouseLeave={() => setShowCartButton(false)}>
     
//       <Link to = {`/courses/${id}`} className='link' style = {{textDecoration: 'none', color: 'black'}}>
//         {showCartButton && (
//           <div className='overlay'></div>
//         )}	
//         <div className='card-inner'>
//           <div className='card-top'>
//             <img alt ={imageAlt}  src = {imageSrc}/>
//           </div>
//           <div className='card-bottom'>
//             <div style={{marginTop: '5px',}} className='card-info'>
//               <span style = {deepText}>{title}</span><br/>
//               <span >{date}</span>
//               <p>
//                 <span style = {deepText}>₦{newPrice} </span>
//                 <span style = {{textDecoration: "line-through"}}>₦{oldPrice}</span>
//               </p>
//               <Badge className='best-selling' variant="solid" colorScheme="green" px={2}>
//               Best Selling
//               </Badge>
//             </div>
//           </div>
//         </div>	
//       </Link>
//       {showCartButton && (
// 				<div className='button'>
// 				  <button>Add To Cart</button>
// 				</div> )}
// 		</div>
//     </div>
// 	)
// }

// const deepText = {
// 	fontWeight : "700"
// }

// export default TopCoursesCard


