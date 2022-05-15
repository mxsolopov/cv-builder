import React from 'react'
import classNames from 'classnames'

import './Button.scss'

const Button = ({
	type,
	size,
	icon = false,
	textcontent = false,
	disabled = false,
	addClasses = [],
}) => {
	const typeClass = `Button_${type}`
	const sizeClass = `Button_${size}`

	let btnClass = classNames('Button', typeClass, sizeClass, ...addClasses)

	return (
		<button className={btnClass} disabled={disabled}>
			{textcontent ? (
				<div className='Button_textcontent'>{textcontent}</div>
			) : (
				<></>
			)}
			{icon ? <i className={classNames('Button_icon', icon)}></i> : <></>}
		</button>
	)
}

export default Button
