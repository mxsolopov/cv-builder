import classNames from 'classnames'
import React from 'react'

import './Select.scss'

const Select = ({ label, placeholder, value, values, handler }) => {
	return (
		<div className='Select'>
			{label ? (
				<div className={classNames('label', 'text-lg')}>{label}</div>
			) : (
				<></>
			)}
			<select className='text-md' value={value} onChange={handler}>
				<option defaultValue hidden>
					{placeholder}
				</option>
				{values.map((value, i) => (
					<option key={i} value={value.value}>
						{value.label}
					</option>
				))}
			</select>
		</div>
	)
}

export default Select
