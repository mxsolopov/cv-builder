import React from 'react'

import './Form.scss'

import { CVTitle, Profile, Summary, Works, Education, Links, Skills } from '../'

const Form = () => {
	return (
		<div className='Form'>
			<div className='inner'>
				<CVTitle />
				<Profile />
				<Summary />
				<Works />
				<Education />
				<Links />
				<Skills />
			</div>
		</div>
	)
}

export default Form
