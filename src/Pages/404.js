import React from 'react';
import '../Components/Styles/Errors.css';
import NotFoundImg from '../Images/404.png';

const NotFound = props => (
	<div className='text-center'>
		<h1 className='Error_Text'>Error: 404 Page Not Found</h1>
		<img src={NotFoundImg} alt='404 NotFound' className='Error_Image' />
	</div>
);

export default NotFound;
