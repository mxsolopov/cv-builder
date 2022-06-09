import React from 'react'

import './Form.scss'

import { CVTitle, Profile, Summary, Works, Education } from '../'

const Form = () => {
	return (
		<div className='Form'>
			<div className='inner'>
				<CVTitle />
				<Profile />
				<Summary />
				<Works />
				<Education />
			</div>
		</div>
	)
}

export default Form
