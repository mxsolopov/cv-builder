import React from 'react'
import { useDispatch } from 'react-redux'
import { removeObjItem } from '../../store/editedResumeSlice'
import './CourseItem.scss'
import { Button, Field, DateRange } from '..'
import classNames from 'classnames'
import { useSelector } from 'react-redux'

const CourseItem = ({ id, coursesCounter, setCoursesCounter }) => {
	const collapsed = coursesCounter.find(item => item.id === id).collapsed
	const course = useSelector(
		state => state.editedResume.editedResume
	).courses.find(course => course.id === id)
	const dispatch = useDispatch()
	const [currentCourse, setCurrentCourse] = React.useState(false)

	console.log(course)

	const addZero = num => {
		if (num < 10) {
			return '0' + num
		} else {
			return num
		}
	}

	return (
		<div className='CourseItem'>
			<div className='header'>
				<div className='title-wrapper'>
					<div className={classNames('title', 'text-lg', 'medium-text')}>
						{course.name !== '' ? course.name : 'Без названия'}
					</div>
					<div className={classNames('range-label', 'text-sm')}>
						{course.period.startMonth &&
						course.period.startYear &&
						course.period.endMonth &&
						course.period.endYear
							? course.period.endMonth === 'current' ||
							  course.period.endYear === 'current'
								? addZero(+course.period.startMonth + 1) +
								  '/' +
								  course.period.startYear +
								  ' - н.в.'
								: addZero(+course.period.startMonth + 1) +
								  '/' +
								  course.period.startYear +
								  ' - ' +
								  addZero(+course.period.endMonth + 1) +
								  '/' +
								  course.period.endYear
							: ''}
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
							dispatch(removeObjItem({ id: id, objArr: 'courses' }))
							setCoursesCounter([
								...coursesCounter.filter(item => item.id !== id),
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
							setCoursesCounter(
								coursesCounter.map(course =>
									course.id === id
										? { ...course, collapsed: !collapsed }
										: { ...course, collapsed: true }
								)
							)
						}
					/>
				</div>
			</div>
			<div className={classNames('fields', collapsed ? 'fields-none' : '')}>
				<div className='row-15'>
					<Field
						label='Курс'
						placeholder='Название курса'
						objArr='courses'
						objItem='name'
						objId={id}
					/>
					<Field
						label='Организация'
						placeholder='Организатор курса'
						objArr='courses'
						objItem='organisation'
						objId={id}
					/>
				</div>
				<DateRange
					id={id}
					item='courses'
					checkboxLabel='Обучаюсь по настоящее время'
					currentItem={currentCourse}
					setCurrentItem={setCurrentCourse}
				/>
			</div>
		</div>
	)
}

export default CourseItem
