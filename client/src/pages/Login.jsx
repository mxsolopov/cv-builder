import React from 'react'
import classNames from 'classnames'
import { Button } from '../components'
import logo from '../assets/img/logo.svg'
import './Login.scss'

const Login = () => {
	const [form, setForm] = React.useState({ email: '', password: '' })

	const changeHandler = e => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	return (
		<div className='Login'>
			<div className='form-box'>
				<div className='logo-wrapper'>
					<img src={logo} alt='logo' className='logo' />
				</div>
				<div className='form-inner'>
					<div>
						<label htmlFor='email' className={classNames('label', 'text-lg')}>
							Email
						</label>
						<input
							className='text-md'
							type='email'
							name='email'
							id='email'
							placeholder='Введите email'
							onChange={e => {
								changeHandler(e)
							}}
						/>
					</div>
					<div>
						<label
							htmlFor='password'
							className={classNames('label', 'text-lg')}
						>
							Пароль
						</label>
						<input
							className='text-md'
							type='password'
							name='password'
							id='password'
							placeholder='Введите пароль'
							onChange={e => {
								changeHandler(e)
							}}
						/>
					</div>
					<Button
						type='primary'
						size='large'
						icon={false}
						textcontent='Войти'
						disabled={false}
						addClasses={['login-btn']}
						handler={() => {}}
					/>
					<Button
						type='secondary'
						size='large'
						icon={false}
						textcontent='Регистрация'
						disabled={false}
						addClasses={['login-btn']}
						handler={() => {}}
					/>
				</div>
			</div>
		</div>
	)
}

export default Login
