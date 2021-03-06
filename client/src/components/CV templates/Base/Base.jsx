import React from 'react'
import { useSelector } from 'react-redux'

import './Base.scss'
// import classNames from 'classnames'

const Base = () => {
	const editedResume = useSelector(state => state.editedResume.editedResume)

	const addZero = num => {
		if (num < 10) {
			return 0 + num
		} else {
			return num
		}
	}

	return (
		<div className='Base'>
			<div className='side'>
				<div className='base-avatar'></div>
				<div className='base-name'>
					{editedResume.name + ' ' + editedResume.surname}
				</div>
				<div className='base-birth'>
					{addZero(editedResume.birth.day)}
					{editedResume.birth.month ? '-' : ''}
					{!isNaN(editedResume.birth.month)
						? addZero(String(+editedResume.birth.month + 1))
						: ''}
					{editedResume.birth.year ? '-' : ''}
					{editedResume.birth.year}
				</div>
				<div className='base-job'>
					<div className='label'>
						{editedResume.job !== '' ? 'Вакансия' : ''}
					</div>
					<div className='descr'>{editedResume.job}</div>
				</div>
				<div className='base-contacts'>
					{editedResume.email !== '' || editedResume.phone !== '' ? (
						<div className='base-title'>Контакты</div>
					) : (
						<></>
					)}
					{editedResume.email !== '' ? (
						<div className='contact-item'>
							<div className='label'>Email</div>
							<div className='descr'>{editedResume.email}</div>
						</div>
					) : (
						<></>
					)}
					{editedResume.phone !== '' ? (
						<div className='contact-item'>
							<div className='label'>Телефон</div>
							<div className='descr'>{editedResume.phone}</div>
						</div>
					) : (
						<></>
					)}
					{editedResume.country !== '' && editedResume.city ? (
						<div className='contact-item'>
							<div className='label'>Локация</div>
							<div className='descr'>
								{editedResume.country + ', ' + editedResume.city}
							</div>
						</div>
					) : (
						<></>
					)}
				</div>
			</div>
			<div className='main'>
				<div className='base-summary'>
					{editedResume.summary !== '' ? (
						<>
							<div className='base-title'>Характеристика</div>
							<p className='base-text'>{editedResume.summary}</p>
						</>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	)
}

export default Base
