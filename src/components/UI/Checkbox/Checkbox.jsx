import React from 'react'
import classNames from 'classnames'
import { nanoid } from 'nanoid'

import './Checkbox.scss'

const Checkbox = ({ label, checked, setChecked, customClass }) => {
	const id = nanoid()

	return (
		<div className={classNames('Checkbox', customClass)}>
			<input
				id={id}
				type='checkbox'
				checked={checked}
				onChange={() => setChecked(!checked)}
			/>
			<label className={classNames('text-md', 'label')} htmlFor={id}>
				{label}
			</label>
		</div>
	)
}

export default Checkbox
