import { Link } from 'react-router-dom';
import { CardItem } from '../../Component/styles/course';


const  MyCourseCard = (props) => {
	const {id, title, imageSrc, imageAlt, newPrice, oldPrice, date} = props;
  const textAbstract = TextAbstract(title, 30);
  
  return(
  <CardItem> 
  <Link to = {`/courses/${id}/watch`} className='link' style = {{textDecoration: 'none', color: 'black'}}>		 
    <div className='card-inner'>
      <div className='card-top'>
        <img style={{backgroundColor:'gray'}} loading='lazy' width = "320px" height = '100%' alt ={imageAlt}  src = {imageSrc}/>  
      </div>
      <div className='card-bottom'>
        <div style={{marginTop: '5px',}} className='card-info'>
          <p className='title'>{textAbstract}</p>
          <p className='date' >{date}</p>
          <div className='best-selling'>
           PURCHASED
          </div>
          <p className='price'>
          <span className='new_price'>₦{newPrice} </span>
          <span className='old_price' style = {{textDecoration: "line-through"}}>₦{oldPrice}</span>
          </p> 
        </div>
      </div>
    </div>	
  </Link>
</CardItem>
  )
}

function TextAbstract(text, length) {
  if (text == null) {
    return "";
  }
  if (text.length <= length) {
      return text;
  }
  text = text.substring(0, length);
  return text + " ...";
}

export default MyCourseCard;