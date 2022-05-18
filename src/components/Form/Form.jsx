import React from 'react'

import './Form.scss'

import { CVTitle, Profile } from '../../components'

const Form = () => {
	return (
		<div className='Form'>
			<div className='Form_inner'>
				<CVTitle />
				<Profile />
			</div>
		</div>
	)
}

export default Form
