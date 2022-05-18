import React from 'react'

import './Profile.scss'
import Input from '../UI/Input'
import BlockTitle from '../BlockTitle'
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
			</div>
			<div className='row'>
				<Input
					label='На какую должность претендуете'
					placeholder='Менеджер по продажам'
				/>
				<Input
					label='На какую должность претендуете'
					placeholder='Менеджер по продажам'
				/>
			</div>
		</div>
	)
}

export default Profile
