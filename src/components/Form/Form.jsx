import React from 'react'

import './Form.scss'

import { CVTitle, Profile } from '../'

const Form = () => {
	return (
		<div className='Form'>
			<div className='inner'>
				<CVTitle />
				<Profile />
			</div>
		</div>
	)
}

export default Form
