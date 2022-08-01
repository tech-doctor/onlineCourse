import React from 'react';
import { Link } from 'react-router-dom';
import { LogoStyle , ImgStyle } from '../styles';


const Logo = ({src, color}) => {
  return (
    <div className='logo'>
      <Link style = {{textDecoration: 'none', color: 'black'}}  to = "/">
        <LogoStyle style={{color}}>
          <ImgStyle  src = {src} alt = 'logo'/>
          <h3>FElearn</h3>
        </LogoStyle>
      </Link>
    </div>
  );
};


export default React.memo(Logo);