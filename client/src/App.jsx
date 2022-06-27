import './assets/scss/main.scss'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import React from 'react'

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<AppRoutes isAuthenticated={false} />
			</BrowserRouter>
		</div>
	)
}

export default App
