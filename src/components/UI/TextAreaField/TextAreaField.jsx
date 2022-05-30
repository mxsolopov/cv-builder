import classNames from 'classnames'
import React from 'react'
import { useDispatch } from 'react-redux'
import { editItem } from '../../../store/editedResumeSlice'

import './TextAreaField.scss'

const TextAreaField = ({ label, placeholder, item, rows }) => {
	const dispatch = useDispatch()

	return (
		<div className='TextAreaField'>
			<div className={classNames('label', 'text-lg')}>{label}</div>
			<textarea
				rows={rows}
				className='text-md'
				placeholder={placeholder}
				onChange={e => {
					dispatch(editItem({ item: item, value: e.target.value }))
				}}
			/>
		</div>
	)
}

export default TextAreaField
