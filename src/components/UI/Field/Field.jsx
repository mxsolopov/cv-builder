import classNames from 'classnames'
import React from 'react'
import { useDispatch } from 'react-redux'
import { editItem, editObjItem } from '../../../store/editedResumeSlice'

import './Field.scss'

const Field = ({ label, placeholder, singleItem, objArr, objItem, objId }) => {
	const dispatch = useDispatch()

	return (
		<div className='Field'>
			<div className={classNames('label', 'text-lg')}>{label}</div>
			<input
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

export default Field
