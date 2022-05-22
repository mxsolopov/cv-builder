import React from 'react'
import Select from '../UI/Select'

import './BirthDate.scss'
// import classNames from 'classnames'

const BirthDate = () => {
	const [date, setDate] = React.useState({
		day: undefined,
		month: undefined,
		year: undefined,
	})
	const now = new Date()
	const range = (N, start) => Array.from({ length: N }, (v, k) => k + start)
	const years = range(83, now.getFullYear() - 100)
	const months = range(12, 0)
	const days = range(31, 1)
	const monthsLabels = [
		'января',
		'февраля',
		'марта',
		'апреля',
		'мая',
		'июня',
		'июля',
		'августа',
		'сентября',
		'октября',
		'ноября',
		'декабря',
	]

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

	React.useEffect(() => {
		console.log(true)
	}, [date])

	return (
		<div className='BirthDate'>
			<div className='row'>
				<Select
					label='Дата рождения'
					placeholder='День'
					values={generateSelectData(days, days)}
					value={date.day}
					handler={e => setDate({ ...date, day: e.target.value })}
				/>
				<Select
					placeholder='Месяц'
					values={generateSelectData(months, monthsLabels)}
					value={date.month}
					handler={e => setDate({ ...date, month: e.target.value })}
				/>
				<Select
					placeholder='Год'
					values={generateSelectData(years, years)}
					value={date.year}
					handler={e => setDate({ ...date, year: e.target.value })}
				/>
			</div>
		</div>
	)
}

export default BirthDate
