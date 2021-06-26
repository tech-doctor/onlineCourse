import React from 'react'
import Header from '../../Component/Header/desktopHeader/Header'
import Footer from '../../Component/Footer/footer'
import Subscribe from '../landingPage/subscribe'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faSearch, faShoppingCart, faUserCircle}  from '@fortawesome/free-solid-svg-icons'
import { Spinner, Stack,Skeleton} from "@chakra-ui/react"
import '../../Styles/history.scss'

const  purchaseHistory = ()  => {
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
						<tr>
							<td><FontAwesomeIcon icon={faShoppingCart} /> Javascript course</td>
							<td>Random</td> 
							<td>Nov 2 2021</td>
              <td>$400</td>
						</tr>
            <tr>
              <td> <FontAwesomeIcon icon={faShoppingCart} /> HTML courses</td>
							<td>HTML</td> 
							<td>Nov 5 2021</td>
              <td>$300</td>
						</tr>
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

export default purchaseHistory
