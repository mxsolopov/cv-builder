import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import StartPage from './pages/StartPage'
import Edit from './pages/Edit'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Dashboard from './pages/Dashboard'

const AppRoutes = ({ isAuthenticated }) => {
	if (isAuthenticated) {
		return (
			<Routes>
				<Route path='/' element={<StartPage />} />
				<Route path='/edit/:id' element={<Edit />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='*' element={<Navigate to='/dashboard' />} />
			</Routes>
		)
	}

	return (
		<Routes>
			<Route path='/' element={<StartPage />} />
			<Route path='/login' element={<Login />} />
			<Route path='/registration' element={<Registration />} />
			<Route path='*' element={<Navigate to='/' />} />
		</Routes>
	)
}

export default AppRoutes
