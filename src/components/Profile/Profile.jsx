import React from 'react'

import './Profile.scss'
import Input from '../UI/Input'
import AvatarUpload from '../UI/AvatarUpload'
import BlockTitle from '../BlockTitle'
import BirthDate from '../BirthDate'
// import classNames from 'classnames'

const Profile = () => {
	return (
		<div className='Profile'>
			<BlockTitle content='Персональная информация' />
			<div className='row'>
				<Input
					label='На какую должность претендуете'
					placeholder='Менеджер по продажам'
				/>
				<AvatarUpload />
			</div>
			<div className='row'>
				<Input label='Фамилия' placeholder='Иванов' />
				<Input label='Имя' placeholder='Иван' />
			</div>
			<BirthDate />
		</div>
	)
}

export default Profile
