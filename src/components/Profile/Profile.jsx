import React from 'react'

import './Profile.scss'
import Input from '../UI/Input'
import AvatarUpload from '../UI/AvatarUpload'
import BlockTitle from '../BlockTitle'
import BirthDate from '../BirthDate'
import Button from '../UI/Button'
import classNames from 'classnames'

const Profile = () => {
	const [address, setAddress] = React.useState(false)

	return (
		<div className='Profile'>
			<BlockTitle content='Персональная информация' />
			<div className={classNames('row', 'row-column-wrap')}>
				<Input
					label='На какую должность претендуете'
					placeholder='Менеджер по продажам'
				/>
				<AvatarUpload />
			</div>
			<div className={classNames('row', 'row-column-wrap')}>
				<Input label='Фамилия' placeholder='Иванов' />
				<Input label='Имя' placeholder='Иван' />
			</div>
			<BirthDate />
			<div className={classNames('row', 'row-column-wrap')}>
				<Input label='E-mail' placeholder='login@example.com' />
				<Input label='Телефон' placeholder='+7(XXX)XXX-XX-XX' />
			</div>
			{address ? (
				<div className={classNames('row', 'row-column-wrap')}>
					<Input label='Страна' placeholder='Россия' />
					<Input label='Город' placeholder='Москва' />
				</div>
			) : (
				<></>
			)}
			<Button
				type='text'
				size='normal'
				icon={!address ? 'ph-caret-down' : 'ph-caret-up'}
				textcontent={
					!address ? 'Добавить место проживания' : 'Скрыть место проживания'
				}
				disabled={false}
				addClasses={[]}
				handler={() => setAddress(!address)}
			/>
		</div>
	)
}

export default Profile
