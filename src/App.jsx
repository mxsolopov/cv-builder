import './App.scss'
import './assets/scss/main.scss'

import React from 'react'
import { useMediaQuery } from 'react-responsive'

import { Form, Preview } from './components'

const App = () => {
	const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1279px)' })

	return (
		<div className='wrapper'>
			<Form />
			{isDesktopOrLaptop && <Preview />}
		</div>
	)
}

export default App
