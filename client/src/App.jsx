import './assets/scss/main.scss'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import StartPage from './pages/StartPage'
import Edit from './pages/Edit'
import Login from './pages/Login'

import React from 'react'

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<StartPage />} />
					<Route path='/edit' element={<Edit />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
