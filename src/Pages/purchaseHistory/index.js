import React from 'react'
import Header from '../../Component/Header/desktopHeader/Header'
import Footer from '../../Component/Footer'
import Subscribe from '../landingPage/subscribe'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faShoppingCart}  from '@fortawesome/free-solid-svg-icons'
import { Spinner} from "@chakra-ui/react"
import '../../Styles/history.scss'

const  purchaseHistory = ()  => {

  const history = [
		{
			Course: 'Javascript course',
			Category: 'Random',
			Date:  'Nov 2 2021',
			Price: '400'
		},
		{
			Course: 'HTML course',
			Category: 'HTML',
			Date:  'Nov 5 2021',
			Price: '300'
		}
	]



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
            {history.map ((data, i) => (
						<tr key={i}>
							<td><FontAwesomeIcon icon={faShoppingCart} />Title of course</td>
							<td>{data.Course}</td> 
							<td>{data.Date}</td>
              <td>₦{data.Price}</td>
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

export default purchaseHistory
