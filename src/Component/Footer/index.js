import React from 'react';
import Language from '../language';
import Logo from '../Logo';
import '../../Styles/footer.scss';

const  Footer = () => {
  return (
    <footer>
      <div className = "footer-1">
        <div className = "first">
          <div className='left'>
            <div className='logo' style={{marginLeft: '-10px'}}>
              <Logo
               src={'/Assets/footerLogo.png'}
               color={'white'}
              />
            </div>
            <div style={{display:'flex', alignItems: 'center', justifyContent: 'space-between'}} className='socials'>
              <a href = 'id' title='Instagram'><img src='/Assets/Instagram.png' alt='instagram'/></a>
              <a href = 'id' title='Facebook'><img src='/Assets/Facebook.png' alt='facebook'/></a>
              <a href = 'id' title='Twitter'><img src='/Assets/Twitter.png' alt='twitter'/></a>
            </div>
            <div>
              <Language/>
            </div>
          </div>
          <div className='right'>
            <div className=' column column_left'>
              <p className ='heading'>FElearn</p>
              <p><a href='id'>Get app</a></p>
              <p><a href='id'>About-Us</a></p>
              <p><a href='id'>Contact-Us</a></p>
              <p><a href='id'>FAQ</a></p>
            </div>
            <div className=' column column_middle'>
              <p className ='heading'>Community</p>
              <p><a href='id'>Blog</a></p>
              <p><a href='id'>Centre</a> </p>
              <p><a href='id'>Service Status</a></p>
            </div>
            <div className=' column column_right'>
              <p className ='heading'>More</p>
              <p><a href='id'>Terms</a></p>
              <p><a href='id'>Private Policy</a></p>
              <p><a href='id'>Featured courses</a></p>
            </div> 
          </div> 
        </div>
        <div className='second'>
          copyright © 2022. All rights reserved.
        </div>
      </div>
      <div className = "footer-2">
        <div>
          <span>Designed by <a href = 'id'>Paul Uti</a> &amp; Developed by <a href = 'https://olukaisaac.netlify.app/'>Techie-Doctor</a></span> 
        </div> 
      </div> 
    </footer>
  )
}

export default Footer;
