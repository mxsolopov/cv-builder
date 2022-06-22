import React from 'react'
import classNames from 'classnames'

import './Checkbox.scss'

const Checkbox = ({ label, checked, setChecked, customClass }) => {
	return (
		<div className={classNames('Checkbox', customClass)}>
			{/* <input
				id={id}
				type='checkbox'
				checked={checked}
				onChange={() => setChecked(!checked)}
			/>
			<label className={classNames('text-md', 'label')} htmlFor={id}>
				{label}
			</label> */}
			<label className={classNames('text-md', 'label')}>
				<input
					type='checkbox'
					onChange={() => {
						setChecked(!checked)
					}}
				/>
				<span
					className={`checkbox ${checked ? 'checkbox-active' : ''}`}
					// This element is purely decorative so
					// we hide it for screen readers
					aria-hidden='true'
				/>
				{label}
			</label>
		</div>
	)
}

export default Checkbox
