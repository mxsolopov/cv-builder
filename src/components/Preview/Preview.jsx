import React from 'react'

import './Preview.scss'
import Button from '../UI/Button'
import classNames from 'classnames'

const Preview = () => {
	console.log(this)

	return (
		<div className='Preview'>
			<div className='header'>
				<Button
					type='secondary'
					size='large'
					icon={false}
					textcontent='Шаблоны'
					disabled={false}
					addClasses={[]}
					handler={() => {}}
				/>
				<div className='action-buttons'>
					<Button
						type='primary'
						size='large'
						icon={false}
						textcontent='Скачать PDF'
						disabled={false}
						addClasses={[]}
						handler={() => {}}
					/>
					<Button
						type='secondary'
						size='large'
						icon='ph-link'
						textcontent={false}
						disabled={false}
						addClasses={['Button_onlyicon']}
						handler={() => {}}
					/>
				</div>
			</div>
			<div className='document-wrapper'>
				<div className='document'></div>
				<div className='navigation'>
					<Button
						type='text'
						size='normal'
						icon='ph-caret-left'
						textcontent={false}
						disabled={true}
						addClasses={['Button_onlyicon', 'white-text', 'navigation-button']}
						handler={() => {}}
					/>
					<span className={classNames('text-lg', 'medium-text')}>1 / 1</span>
					<Button
						type='text'
						size='normal'
						icon='ph-caret-right'
						textcontent={false}
						disabled={true}
						addClasses={['Button_onlyicon', 'white-text', 'navigation-button']}
						handler={() => {}}
					/>
				</div>
			</div>
			<div className='progress-wrapper'>
				<div className='progress'>
					<div className='fill-line' style={{ width: '30%' }}></div>
				</div>
				<span className={classNames('progress-text', 'text-sm')}>
					40% резюме заполнено
				</span>
			</div>
		</div>
	)
}

export default Preview
