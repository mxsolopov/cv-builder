import classNames from 'classnames'
import React from 'react'
import { useDispatch } from 'react-redux'
import { editItem, editObjItem } from '../../../store/editedResumeSlice'

import './TextAreaField.scss'

const TextAreaField = ({
	label,
	placeholder,
	rows,
	singleItem,
	objArr,
	objItem,
	objId,
}) => {
	const dispatch = useDispatch()

	return (
		<div className='TextAreaField'>
			<div className={classNames('label', 'text-lg')}>{label}</div>
			<textarea
				rows={rows}
				className='text-md'
				placeholder={placeholder}
				onChange={e => {
					singleItem
						? dispatch(editItem({ item: singleItem, value: e.target.value }))
						: dispatch(
								editObjItem({
									objArr: objArr,
									id: objId,
									item: objItem,
									value: e.target.value,
								})
						  )
				}}
			/>
		</div>
	)
}

export default TextAreaField
