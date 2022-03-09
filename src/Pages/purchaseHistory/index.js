import React from 'react';
import Header from '../../Component/Header/desktopHeader/Header';
import Footer from '../../Component/Footer';
import Subscribe from '../landingPage/subscribe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faShoppingCart}  from '@fortawesome/free-solid-svg-icons';
import { Spinner} from "@chakra-ui/react";
import '../../Styles/history.scss';
import { useSelector } from 'react-redux';


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
			<div>
        <Header/>
			</div>
			<hr/>
			<div className = "center-div">
      <div style = {{textAlign: 'center'}} >
          <Spinner  size="xl"/>
        </div>
				<div className = "title">
          <h1>Purchase History</h1>
				</div>
				<div className ="body">
        <table>
					<thead>
						<tr>
							<th>Course</th>
              <th>Category</th>
							<th>Date</th> 
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
            {purchasedItem.map ((data, i) => (
						<tr key={data.id}>
							<td><FontAwesomeIcon icon={faShoppingCart} />{data.snippet.title}</td>
							<td>{category(data)}</td> 
							<td>{data.purchasedTime}</td>
              <td>₦{new Date(data.snippet.publishedAt).getDate() + '0'}</td>
						</tr>))}
					</tbody>
				</table>
				</div>
			</div>
      <div style = {{marginTop: '20px'}}>
        <Subscribe/>
      </div>
			<hr/>
			<div>
				<Footer/>
			</div>
		</div>
	)
}

export default PurchaseHistory
