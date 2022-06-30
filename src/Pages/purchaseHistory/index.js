import React from 'react';
import Header from '../../Component/Header/desktopHeader/Header';
import Footer from '../../Component/Footer';
import Subscribe from '../../Component/subscribe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faShoppingCart}  from '@fortawesome/free-solid-svg-icons';
import { Spinner} from "@chakra-ui/react";
import '../../Styles/history.scss';
import { useSelector } from 'react-redux';
import Layout from '../../Component/Layout';


const  PurchaseHistory = ()  => {
  const purchasedItem = useSelector(state => state.rootReducer.databaseSlice.purchasedItem);

    const category = (data) => {
      switch(data.snippet.playlistId){
        case 'PLEu7Y7_blvLXlM820Uy30N8ay-eoZVyIK': 
          return('HTML');
        case 'PLEu7Y7_blvLVwibRK9szNWmTios4OsLF2':
          return( 'CSS' );
        case 'PLEu7Y7_blvLVNfrsztZmfWEw57lWyuUfI':
          return( 'Javascript' );
        case 'PLEu7Y7_blvLVVwb0lGCk9J1E4mJcDO808':
          return( 'JQuery' );
        default:
          return( 'Random' );
      }
    }


	return (
		<div className = "purchaseHistory">
			<Layout>
			<div className = "center_div">
        {/* <div style = {{textAlign: 'center'}} >
          <Spinner  size="xl"/>
        </div> */}
				<div className = "title">
          <p>Purchase History</p>
				</div>
				<div className ="body">
        <table>
					<thead>
						<tr>
							<th>Course</th>
              <th>Category</th>
							<th>Date</th> 
							<th>Price</th>
              <th>Best selling</th>
						</tr>
					</thead>
					<tbody>
            {purchasedItem.map ((data, i) => (
						<tr key={data.id}>
							<td style={{display:'flex'}}><img src='/Assets/cart.png' className='cart_png' style = {{width: '20px', height: '20px'}} alt = 'cart' />
              <span style={{marginLeft:'10px'}}>
                {data.snippet.title}
              </span></td>
							<td>{category(data)}</td> 
							{/* <td>{data.purchasedTime}</td> */}
              <td>Date</td>
              <td>₦{new Date(data.snippet.publishedAt).getDate() + '0'}.00</td>
						  <td>
                <span style={{...bestSellingStyles,backgroundColor:'#DDEFDA'}}>
                True
                </span>
                <span style={{...bestSellingStyles,backgroundColor:'#F8DFDF'}}>
                false
                </span>
                </td>
            </tr>))}
					</tbody>
				</table>
				</div>
			</div>
      </Layout>
		</div>
	)
}

const bestSellingStyles = {
  fontWeight:'500', 
  padding:'1px 18px', 
  borderRadius: '50px', 
  fontSize: '12px', 
  textAlign:'center'
}

export default PurchaseHistory
