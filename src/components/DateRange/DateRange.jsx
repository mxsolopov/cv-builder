import React from 'react'
import { Select, Checkbox } from '..'
import { editObjItem } from '../../store/editedResumeSlice'
import { useDispatch } from 'react-redux'

import './DateRange.scss'
import classNames from 'classnames'
// import classNames from 'classnames'

const DateRange = ({
	id,
	item,
	checkboxLabel,
	currentItem,
	setCurrentItem,
}) => {
	const dispatch = useDispatch()

	const generateSelectData = (values, labels) => {
		const arr = []
		if (values.length === labels.length) {
			for (let i = 0; i < values.length; i++) {
				const obj = { value: values[i], label: labels[i] }
				arr.push(obj)
			}
		}
		return arr
	}

	const [date, setDate] = React.useState({
		startMonth: undefined,
		startYear: undefined,
		endMonth: undefined,
		endYear: undefined,
	})

	const now = new Date()
	const range = (N, start) => Array.from({ length: N }, (v, k) => k + start)
	const years = range(84, now.getFullYear() - 83)
	const months = range(12, 0)
	const monthsLabels = [
		'январь',
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь',
	]

	React.useEffect(() => {
		if (currentItem) {
			setDate({ ...date, endMonth: 'current', endYear: 'current' })
		}
		dispatch(
			editObjItem({
				objArr: item,
				id: id,
				item: 'period',
				value: date,
			})
		)
	}, [id, date, dispatch, item, currentItem])

	return (
		<div className='DateRange'>
			<div
				className={classNames('row-15', 'row-column-wrap', 'date-range-inner')}
			>
				<div className={classNames('row-15', 'start-time-wrap')}>
					<Select
						label='Период работы'
						placeholder='Месяц'
						values={generateSelectData(months, monthsLabels)}
						value={date.startMonth}
						handler={e => setDate({ ...date, startMonth: e.target.value })}
					/>
					<Select
						placeholder='Год'
						values={generateSelectData(years, years)}
						value={date.startYear}
						handler={e => setDate({ ...date, startYear: e.target.value })}
					/>
				</div>
				<div className='end-time-wrap'>
					<Checkbox
						label={checkboxLabel}
						checked={currentItem}
						setChecked={setCurrentItem}
						customClass='current-item'
					/>
					<div className='row-15'>
						<Select
							placeholder='Месяц'
							values={generateSelectData(months, monthsLabels)}
							value={date.endMonth}
							handler={e => setDate({ ...date, endMonth: e.target.value })}
							disabled={currentItem ? true : false}
						/>
						<Select
							placeholder='Год'
							values={generateSelectData(years, years)}
							value={date.endYear}
							handler={e => setDate({ ...date, endYear: e.target.value })}
							disabled={currentItem ? true : false}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DateRange
