import classNames from 'classnames'
import React from 'react'

import './Input.scss'

const Input = ({ label, placeholder }) => {
	return (
		<div className='Input'>
			<div className={classNames('label', 'text-lg')}>{label}</div>
			<input className='text-md' placeholder={placeholder} />
		</div>
	)
}

export default Input
