import React from 'react'
import { useDispatch } from 'react-redux'
import { addObjItem } from '../../store/editedResumeSlice'
import { nanoid } from 'nanoid'
import './Recommendations.scss'
import { BlockTitle, Button, RecommendationItem } from '..'
// import classNames from 'classnames'

const Recommendations = () => {
	const [recommendationsCounter, setRecommendationsCounter] = React.useState([])

	const dispatch = useDispatch()
	const id = nanoid()

	return (
		<div className='Recommendations'>
			<BlockTitle content='Рекомендации' />
			{recommendationsCounter.map((_, i) => {
				return (
					<RecommendationItem
						key={i}
						id={recommendationsCounter[i].id}
						recommendationsCounter={recommendationsCounter}
						setRecommendationsCounter={setRecommendationsCounter}
					/>
				)
			})}
			<Button
				type='text'
				size='normal'
				icon='ph-caret-down'
				textcontent='Добавить рекомендацию'
				disabled={false}
				addClasses={[]}
				handler={() => {
					setRecommendationsCounter([
						...recommendationsCounter.map(recommendation => {
							return { id: recommendation.id, collapsed: true }
						}),
						{ id: id, collapsed: false },
					])
					dispatch(
						addObjItem({
							item: 'recommendations',
							obj: {
								id: id,
								name: '',
								organisation: '',
								phone: '',
								email: '',
							},
						})
					)
				}}
			/>
		</div>
	)
}

export default Recommendations
