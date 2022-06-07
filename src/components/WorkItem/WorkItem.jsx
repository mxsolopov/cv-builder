import React from 'react'
import { useDispatch } from 'react-redux'
import { removeObjItem } from '../../store/editedResumeSlice'
import './WorkItem.scss'
import { Button, Field } from '..'
import classNames from 'classnames'
import { useSelector } from 'react-redux'

const WorkItem = ({ id, worksCounter, setWorksCounter }) => {
	const collapsed = worksCounter.find(item => item.id === id).collapsed
	const job = useSelector(state => state.editedResume.editedResume).jobs.find(
		job => job.id === id
	).organisation
	const dispatch = useDispatch()

	return (
		<div className='WorkItem'>
			<div className='header'>
				<div className={classNames('title', 'text-lg', 'medium-text')}>
					{job !== '' ? job : 'Без названия'}
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
							dispatch(removeObjItem({ id: id, objArr: 'jobs' }))
							setWorksCounter([...worksCounter.filter(item => item.id !== id)])
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
							setWorksCounter(
								worksCounter.map(work =>
									work.id === id
										? { ...work, collapsed: !collapsed }
										: { ...work, collapsed: true }
								)
							)
						}
					/>
				</div>
			</div>
			<div className={classNames('fields', collapsed ? 'fields-none' : '')}>
				<div className='row-15'>
					<Field
						label='Организация'
						placeholder='Название компании'
						objArr='jobs'
						objItem='organisation'
						objId={id}
					/>
					<Field
						label='Должность'
						placeholder='Менеджер'
						objArr='jobs'
						objItem='post'
						objId={id}
					/>
				</div>
				<div className='row-15'>
					<Field
						label='Сайт организации'
						placeholder='sitename.com'
						objArr='jobs'
						objItem='site'
						objId={id}
					/>
					<Field
						label='Город'
						placeholder='Москва'
						objArr='jobs'
						objItem='city'
						objId={id}
					/>
				</div>
			</div>
		</div>
	)
}

export default WorkItem
