import React from 'react';
import "../../Styles/error.scss";
//import Header  from '../../Component/Header/desktopHeader/Header';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const PageNotFound = () => {

	const history = useHistory();

	return (
		<div className='page-error'>
				{/* <Header/> */}
			<div className='error-div'>
         <h1>404 Page Not Found</h1>
				 <button
				 onClick={() => history.goBack()}
				 >Back</button>
			</div>
		</div>
	);
};


export default PageNotFound;