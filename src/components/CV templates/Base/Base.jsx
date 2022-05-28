import React from 'react'
import { useSelector } from 'react-redux'

import './Base.scss'
// import classNames from 'classnames'

const Base = () => {
	const editedResume = useSelector(state => state.editedResume.editedResume)

	return (
		<div className='Base'>
			<div className='side'></div>
			<div className='main'></div>
			{/* <div>{editedResume.job}</div>
			<div>{editedResume.name}</div>
			<div>{editedResume.surname}</div>
			<div>
				{editedResume.birth.day}
				{editedResume.birth.month ? '-' : ''}
				{editedResume.birth.month}
				{editedResume.birth.year ? '-' : ''}
				{editedResume.birth.year}
			</div>
			<div>{editedResume.email}</div>
			<div>{editedResume.phone}</div>
			<div>{editedResume.country}</div>
			<div>{editedResume.city}</div> */}
		</div>
	)
}

export default Base
