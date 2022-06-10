import classNames from 'classnames'
import React from 'react'
import { useDispatch } from 'react-redux'
import { editObjItem } from '../../../store/editedResumeSlice'

import './Slider.scss'

const Slider = ({ objArr, objItem, objId }) => {
	const dispatch = useDispatch()

	const [value, setValue] = React.useState('0')
	const skillLabels = [
		'Новичок',
		'Начинающий',
		'Базовый',
		'Продвинутый',
		'Профессионал',
		'Эксперт',
	]

	return (
		<div className='Slider'>
			<div className={classNames('label', 'text-md')}>{skillLabels[value]}</div>
			<input
				type='range'
				min='0'
				max='5'
				step='1'
				value={value}
				onChange={e => {
					dispatch(
						editObjItem({
							objArr: objArr,
							id: objId,
							item: objItem,
							value: skillLabels[e.target.value],
						})
					)
					setValue(e.target.value)
				}}
				style={{ backgroundSize: `${20 * value}%` }}
			/>
		</div>
	)
}

export default Slider
