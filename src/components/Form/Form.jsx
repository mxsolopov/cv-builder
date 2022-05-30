import React from 'react'

import './Form.scss'

import { CVTitle, Profile, Summary } from '../'

const Form = () => {
	return (
		<div className='Form'>
			<div className='inner'>
				<CVTitle />
				<Profile />
				<Summary />
			</div>
		</div>
	)
}

export default Form
