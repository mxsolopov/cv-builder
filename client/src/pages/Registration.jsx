import React from 'react'
import classNames from 'classnames'
import { Button } from '../components'
import logo from '../assets/img/logo.svg'
import './Registration.scss'

const Registration = () => {
	return (
		<div className='Registration'>
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
						/>
					</div>
					<div>
						<label
							htmlFor='r-password'
							className={classNames('label', 'text-lg')}
						>
							Повторите пароль
						</label>
						<input
							className='text-md'
							type='password'
							name='r-password'
							id='r-password'
							placeholder='Введите пароль'
						/>
					</div>
					<Button
						type='primary'
						size='large'
						icon={false}
						textcontent='Зарегистрироваться'
						disabled={false}
						addClasses={['reg-btn']}
						handler={() => {}}
					/>
					<Button
						type='secondary'
						size='large'
						icon={false}
						textcontent='Войти'
						disabled={false}
						addClasses={['reg-btn']}
						handler={() => {}}
					/>
				</div>
			</div>
		</div>
	)
}

export default Registration
