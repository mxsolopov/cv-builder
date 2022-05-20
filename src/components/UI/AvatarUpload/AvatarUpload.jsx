import React from 'react'
import classNames from 'classnames'
import thumbnail from '../../../assets/img/user-thumbnail.png'
import InfoIcon from '../InfoIcon'
import Button from '../Button'

import './AvatarUpload.scss'

const AvatarUpload = ({ label, placeholder }) => {
	const [currentAvatar, setCurrentAvatar] = React.useState(null)
	const [preview, setPreview] = React.useState(null)

	React.useEffect(() => {
		const avatarURL = currentAvatar && URL.createObjectURL(currentAvatar)
		setPreview(avatarURL)

		return () => URL.revokeObjectURL(currentAvatar)
	}, [currentAvatar])

	return (
		<div className='AvatarUpload'>
			<label
				htmlFor='avatar-input'
				className='preview'
				style={{
					background: `url(${preview ? preview : thumbnail}) 0% 0% / cover`,
					border: 'none',
				}}
			></label>
			<label
				htmlFor='avatar-input'
				className={classNames('upload-button', 'text-md')}
			>
				{!preview ? 'Загрузить фото' : 'Заменить фото'}
			</label>
			{preview ? (
				<Button
					type='primary'
					size='normal'
					icon={'ph-trash-simple'}
					textcontent={false}
					disabled={false}
					addClasses={['Button_onlyicon', 'delete-button']}
					handler={() => {
						setCurrentAvatar(null)
						setPreview(null)
					}}
				/>
			) : (
				<></>
			)}
			<input
				type='file'
				id='avatar-input'
				onChange={e => setCurrentAvatar(e.target.files[0])}
			/>
			{!preview ? <InfoIcon text='Загрузите фото в соотношении 1:1' /> : <></>}
		</div>
	)
}

export default AvatarUpload
