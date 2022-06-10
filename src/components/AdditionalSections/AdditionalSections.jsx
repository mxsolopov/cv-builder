import React from 'react'

import './AdditionalSections.scss'
import { Button, BlockTitle, Courses } from '..'
import { useDispatch } from 'react-redux'
import { clearArrItem } from '../../store/editedResumeSlice'
// import classNames from 'classnames'

const AdditionalSections = () => {
	const dispatch = useDispatch()

	const [sections, setSections] = React.useState({
		courses: false,
		recommendations: false,
		languages: false,
		hobbies: false,
	})

	return (
		<>
			<>
				{sections.courses ? <Courses /> : <></>}
				{sections.recommendations ? 'Рекомендации' : <></>}
				{sections.languages ? 'Иностранные языки' : <></>}
				{sections.hobbies ? 'Хобби' : <></>}
			</>
			<div className='AdditionalSections'>
				<BlockTitle content='Дополнительные секции' />
				<div className='buttons-wrap'>
					<Button
						type='secondary'
						size='normal'
						icon={!sections.courses ? 'ph-plus' : 'ph-minus'}
						textcontent='Обучающие курсы'
						disabled={false}
						addClasses={[]}
						handler={() => {
							setSections({ ...sections, courses: !sections.courses })
							if (sections.courses) {
								dispatch(clearArrItem({ item: 'courses' }))
							}
						}}
					/>
					<Button
						type='secondary'
						size='normal'
						icon={!sections.recommendations ? 'ph-plus' : 'ph-minus'}
						textcontent='Рекомендации'
						disabled={false}
						addClasses={[]}
						handler={() =>
							setSections({
								...sections,
								recommendations: !sections.recommendations,
							})
						}
					/>
					<Button
						type='secondary'
						size='normal'
						icon={!sections.languages ? 'ph-plus' : 'ph-minus'}
						textcontent='Иностранные языки'
						disabled={false}
						addClasses={[]}
						handler={() =>
							setSections({ ...sections, languages: !sections.languages })
						}
					/>
					<Button
						type='secondary'
						size='normal'
						icon={!sections.hobbies ? 'ph-plus' : 'ph-minus'}
						textcontent='Хобби'
						disabled={false}
						addClasses={[]}
						handler={() =>
							setSections({ ...sections, hobbies: !sections.hobbies })
						}
					/>
				</div>
			</div>
		</>
	)
}

export default AdditionalSections
