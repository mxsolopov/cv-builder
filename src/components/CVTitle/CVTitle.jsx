import React from 'react'

import './CVTitle.scss'
import Button from '../UI/Button'
import classNames from 'classnames'

const CVTitle = () => {
	const [isEdit, setIsEdit] = React.useState(false)
	const [name, setName] = React.useState('Название резюме')

	return (
		<div className='CVTitle'>
			{isEdit ? (
				<input
					className={classNames('h2')}
					value={name}
					onChange={e => setName(e.target.value)}
				/>
			) : (
				<h2 className='h2'>{name}</h2>
			)}

			<Button
				type='secondary'
				size='normal'
				icon={isEdit ? 'ph-check' : 'ph-pencil-simple'}
				textcontent={false}
				disabled={false}
				addClasses={['Button_onlyicon']}
				handler={() => setIsEdit(!isEdit)}
			/>
		</div>
	)
}

export default CVTitle
