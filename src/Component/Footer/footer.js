import React from 'react'
import '../../Styles/footer.scss'
import Language from '../language'

const  Footer = () => {
  return (
    <footer className = "footer">
    <div className = "footer-1">
      <table>
					<thead>
						<tr>
							<th>FElearn</th>
							<th>Community</th> 
							<th>More</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Get app</td>
							<td>Blog</td> 
							<td>Terms</td>
						</tr>
            <tr>
							<td>About-Us</td>
							<td>Centre</td> 
							<td>Private Policy</td>
						</tr>
            <tr>
							<td>Contact-Us</td>
							<td>Service status</td> 
							<td>Featured courses</td>
						</tr>
					</tbody>
				</table>
      </div>
      <div className = "footer-2">
        <div className = "footer-2-flex">
          <p>LOGO</p>
          <p>All rights reserved ©2021</p> 
        </div>
				<div style = {{margin: '50px 30px '}}>
					<span>Developed by <a href = 'https://olukaisaac.netlify.app/'>Techie-Doctor</a></span> 
					<span style = {{float: 'right', marginRight: '100px'}}>
					<Language/>
					</span>
				</div>
        
      </div> 
    </footer>
  )
}

export default Footer;
