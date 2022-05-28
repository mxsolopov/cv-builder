import classNames from 'classnames'
import React from 'react'
import { useDispatch } from 'react-redux'
import { editItem } from '../../../store/editedResumeSlice'

import './Field.scss'

const Field = ({ label, placeholder, item }) => {
	const dispatch = useDispatch()

	return (
		<div className='Field'>
			<div className={classNames('label', 'text-lg')}>{label}</div>
			<input
				className='text-md'
				placeholder={placeholder}
				onChange={e => {
					dispatch(editItem({ item: item, value: e.target.value }))
				}}
			/>
		</div>
	)
}

export default Field
