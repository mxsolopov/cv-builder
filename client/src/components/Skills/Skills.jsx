import React from 'react'
import { useDispatch } from 'react-redux'
import { addObjItem } from '../../store/editedResumeSlice'
import { nanoid } from 'nanoid'
import './Skills.scss'
import { BlockTitle, Button, SkillItem } from '..'
// import classNames from 'classnames'

const Skills = () => {
	const [skillsCounter, setSkillsCounter] = React.useState([])

	const dispatch = useDispatch()
	const id = nanoid()

	return (
		<div className='Skills'>
			<BlockTitle content='Навыки и умения' />
			<p className='text-md'>
				Заполните, как минимум, 5 основных навыков, которыми вы владете.
				Убедитесь, что эти навыки соотвествуют требованиям к искомой вакансии.
			</p>
			{skillsCounter.map((_, i) => {
				return (
					<SkillItem
						key={i}
						id={skillsCounter[i].id}
						skillsCounter={skillsCounter}
						setSkillsCounter={setSkillsCounter}
					/>
				)
			})}
			<Button
				type='text'
				size='normal'
				icon='ph-caret-down'
				textcontent='Добавить навык'
				disabled={false}
				addClasses={[]}
				handler={() => {
					setSkillsCounter([
						...skillsCounter.map(skill => {
							return { id: skill.id, collapsed: true }
						}),
						{ id: id, collapsed: false },
					])
					dispatch(
						addObjItem({
							item: 'skills',
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

export default Skills
