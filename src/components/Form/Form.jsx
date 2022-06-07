import React from 'react'

import './Form.scss'

import { CVTitle, Profile, Summary, Works } from '../'

const Form = () => {
	return (
		<div className='Form'>
			<div className='inner'>
				<CVTitle />
				<Profile />
				<Summary />
				<Works />
			</div>
		</div>
	)
}

export default Form
