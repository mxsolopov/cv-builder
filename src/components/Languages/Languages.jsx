import React from 'react'
import { useDispatch } from 'react-redux'
import { addObjItem } from '../../store/editedResumeSlice'
import { nanoid } from 'nanoid'
import './Languages.scss'
import { BlockTitle, Button, LanguageItem } from '..'
// import classNames from 'classnames'

const Languages = () => {
	const [languagesCounter, setLanguagesCounter] = React.useState([])

	const dispatch = useDispatch()
	const id = nanoid()

	return (
		<div className='Languages'>
			<BlockTitle content='Иностранные языки' />
			{languagesCounter.map((_, i) => {
				return (
					<LanguageItem
						key={i}
						id={languagesCounter[i].id}
						languagesCounter={languagesCounter}
						setLanguagesCounter={setLanguagesCounter}
					/>
				)
			})}
			<Button
				type='text'
				size='normal'
				icon='ph-caret-down'
				textcontent='Добавить язык'
				disabled={false}
				addClasses={[]}
				handler={() => {
					setLanguagesCounter([
						...languagesCounter.map(language => {
							return { id: language.id, collapsed: true }
						}),
						{ id: id, collapsed: false },
					])
					dispatch(
						addObjItem({
							item: 'languages',
							obj: {
								id: id,
								name: '',
								level: '',
							},
						})
					)
				}}
			/>
		</div>
	)
}

export default Languages
