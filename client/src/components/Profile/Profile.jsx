import React from 'react'

import './Profile.scss'
import { Field, AvatarUpload, BlockTitle, BirthDate, Button } from '../'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import { clearItem } from '../../store/editedResumeSlice'

const Profile = () => {
	const [address, setAddress] = React.useState(false)
	const dispatch = useDispatch()

	return (
		<div className='Profile'>
			<BlockTitle content='Персональная информация' />
			<div className={classNames('row-30', 'row-column-wrap')}>
				<Field
					label='Искомая должность'
					placeholder='Менеджер по продажам'
					singleItem='job'
				/>
				<AvatarUpload />
			</div>
			<div className={classNames('row-30', 'row-column-wrap')}>
				<Field label='Фамилия' placeholder='Иванов' singleItem='surname' />
				<Field label='Имя' placeholder='Иван' singleItem='name' />
			</div>
			<BirthDate />
			<div className={classNames('row-30', 'row-column-wrap')}>
				<Field
					label='E-mail'
					placeholder='login@example.com'
					singleItem='email'
				/>
				<Field
					label='Телефон'
					placeholder='+7(XXX)XXX-XX-XX'
					singleItem='phone'
				/>
			</div>
			{address ? (
				<div className={classNames('row-30', 'row-column-wrap')}>
					<Field label='Страна' placeholder='Россия' singleItem='country' />
					<Field label='Город' placeholder='Москва' singleItem='city' />
				</div>
			) : (
				<></>
			)}
			<Button
				type='text'
				size='normal'
				icon={!address ? 'ph-caret-down' : 'ph-caret-up'}
				textcontent={
					!address ? 'Добавить место проживания' : 'Убрать место проживания'
				}
				disabled={false}
				addClasses={[]}
				handler={() => {
					setAddress(!address)
					if (address) {
						dispatch(clearItem({ item: 'country' }))
						dispatch(clearItem({ item: 'city' }))
					}
				}}
			/>
		</div>
	)
}

export default Profile
