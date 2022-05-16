import React from 'react'

import './Form.scss'

import { Button } from '../../components'

const Form = () => {
	return (
		<div className='Form'>
			<div className='Form_inner'>
				<h1 className='h1'>Заголовок</h1>
				<Button
					type='primary'
					size='normal'
					icon='ph-caret-circle-right'
					textcontent='Кнопка'
					// addClasses={['Button_onlyicon']}
					disabled={false}
				/>
			</div>
		</div>
	)
}

export default Form
