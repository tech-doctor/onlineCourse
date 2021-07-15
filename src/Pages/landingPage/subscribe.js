import React from 'react'

const  Subscribe = () =>{
	return (
		<div style = {{textAlign : 'center'}}>
      <span style = {{fontSize: '16px', fontWeight: '700'}}>New to FE<small>learn?</small></span><br/>
      <small>Get latest update on new courses</small><br/><br/>
      <input type = 'email' placeholder = "Enter your email address.."/><button>Subscribe</button>
		</div>
	)
}

export default Subscribe


