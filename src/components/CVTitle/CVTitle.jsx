import React from 'react'

import './CVTitle.scss'
import Button from '../UI/Button'

const CVTitle = () => {
	return (
		<div className='CVTitle'>
			<h2 className='h2'>Название резюме</h2>
			<Button
				type='secondary'
				size='normal'
				icon='ph-pencil-simple'
				textcontent={false}
				disabled={false}
				addClasses={['Button_onlyicon']}
			/>
		</div>
	)
}

export default CVTitle
