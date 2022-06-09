import classNames from 'classnames'
import React from 'react'
import { useDispatch } from 'react-redux'
import { editItem, editObjItem } from '../../../store/editedResumeSlice'

import './Slider.scss'

const Slider = ({ label, placeholder, singleItem, objArr, objItem, objId }) => {
	const dispatch = useDispatch()

	return (
		<div className='Slider'>
			{/* <div className={classNames('label', 'text-lg')}>{label}</div>
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
			/> */}
			<div className={classNames('label', 'text-md')}>Начинающий</div>
			<input type='range' />
		</div>
	)
}

export default Slider
