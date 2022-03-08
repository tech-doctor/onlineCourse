import React from 'react'
import '../../Styles/footer.scss'
import Language from '../language'

const  Footer = () => {
  return (
    <footer>
      <div className = "footer">
        <div className = "footer-1">
          <div className=' column left'>
            <p className ='heading'>FElearn</p>
            <p><a href='id'>Get app</a></p>
            <p><a href='id'>About-Us</a></p>
            <p><a href='id'>Contact-Us</a></p>
          </div>
          <div className=' column middle'>
            <p className ='heading'>Community</p>
            <p><a href='id'>Blog</a></p>
            <p><a href='id'>Centre</a> </p>
            <p><a href='id'>Service Status</a></p>
          </div>
          <div className=' column right'>
            <p className ='heading'>More</p>
            <p><a href='id'>Terms</a></p>
            <p><a href='id'>Private Policy</a></p>
            <p><a href='id'>Featured courses</a></p>
          </div> 
        </div>
        <hr/>
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
      </div>
    </footer>
  )
}

export default Footer;
