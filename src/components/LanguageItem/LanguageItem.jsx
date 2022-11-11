import React from 'react'
import { useDispatch } from 'react-redux'
import { removeObjItem } from '../../store/resumeDataSlice'
import './LanguageItem.scss'
import { Button, Field, Slider } from '..'
import classNames from 'classnames'
import { useSelector } from 'react-redux'

const LanguageItem = ({ id, languagesCounter, setLanguagesCounter }) => {
	const collapsed = languagesCounter.find(item => item.id === id).collapsed
	const language = useSelector(
		state => state.resumeData.resumeData
	).languages.find(language => language.id === id)
	const dispatch = useDispatch()
	const skillLabels = [
		'Начинающий',
		'Базовый',
		'Продвинутый',
		'Профессионал',
		'Эксперт',
	]

	return (
		<div className='LanguageItem'>
			<div className='header'>
				<div className='title-wrapper'>
					<div className={classNames('title', 'text-lg', 'medium-text')}>
						{language.name !== '' ? language.name : 'Без названия'}
					</div>
					<div className={classNames('source', 'text-sm')}>
						{language.level !== '' ? skillLabels[language.level] : ''}
					</div>
				</div>
				<div className='action-buttons'>
					<Button
						type='secondary'
						size='normal'
						icon='ph-trash-simple'
						textcontent={false}
						disabled={false}
						addClasses={['Button_onlyicon', 'remove-btn']}
						handler={() => {
							dispatch(removeObjItem({ id: id, objArr: 'languages' }))
							setLanguagesCounter([
								...languagesCounter.filter(item => item.id !== id),
							])
						}}
					/>
					<Button
						type='secondary'
						size='normal'
						icon={collapsed ? 'ph-caret-up' : 'ph-caret-down'}
						textcontent={false}
						disabled={false}
						addClasses={['Button_onlyicon']}
						handler={() =>
							setLanguagesCounter(
								languagesCounter.map(language =>
									language.id === id
										? { ...language, collapsed: !collapsed }
										: { ...language, collapsed: true }
								)
							)
						}
					/>
				</div>
			</div>
			<div className={classNames('fields', collapsed ? 'fields-none' : '')}>
				<div className={classNames('row-15', 'row-column-wrap')}>
					<Field
						label='Иностранный язык'
						placeholder='Название языка'
						objArr='languages'
						objItem='name'
						objId={id}
					/>
					<Slider objArr='languages' objItem='level' objId={id} />
				</div>
			</div>
		</div>
	)
}

export default LanguageItem
