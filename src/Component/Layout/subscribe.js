import React from 'react';
import '../../Styles/subscribe.scss';

const  Subscribe = () =>{
	return (
		<div className='subscribe'>
      <div className='left'>
        <p className='heading'>New to FElearn</p>
        <p className='detail'>Get latest update on new courses</p>
      </div>
      <form className='subscribe_form right'>
        <input 
        className='subcribe input' 
        type = 'email' 
        placeholder = "Enter your email address.."
        required
        />
        <button type='submit'
        className='subcribe_button'>Subscribe</button>
      </form>
		</div>
	)
}

export default Subscribe


