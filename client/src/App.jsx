import './assets/scss/main.scss'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Edit from './pages/Edit'

import React from 'react'

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Landing />} />
					<Route path='/edit' element={<Edit />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
