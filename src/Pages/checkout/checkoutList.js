
const  CheckoutLIst = (props) => {
  const {title, imageSrc, imageAlt, newPrice, previousPrice} = props;
 
  return (
    <div className='details'>
      <div className='details_left'>
        <img alt= {imageAlt} src = {imageSrc}/>
        <div className='about'>
          <p>{title}</p>
        </div>
      </div>
      <div className='details_right'>
        <p style={{color:'#074942'}}>₦{newPrice}</p>
        <p style = {{textDecoration: 'line-through', color:'rgb(209, 95, 95)'}}>₦{previousPrice}</p>
      </div>
    </div>
  );
}

export default CheckoutLIst;