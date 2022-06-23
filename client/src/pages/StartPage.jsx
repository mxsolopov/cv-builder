import React from 'react'
import logo from '../assets/img/logo.svg'
import cvimg from '../assets/img/cvimg.svg'
import './StartPage.scss'
import { Button } from '../components'

const StartPage = () => {
	return (
		<div className='StartPage'>
			<header className='header'>
				<div className='logo-wrapper'>
					<img src={logo} alt='logo' className='logo' />
				</div>
				<div className='buttons'>
					<Button
						type='primary'
						size='large'
						icon={false}
						textcontent='Войти'
						disabled={false}
						addClasses={[]}
						handler={() => {}}
					/>
					<Button
						type='secondary'
						size='large'
						icon={false}
						textcontent='Регистрация'
						disabled={false}
						addClasses={[]}
						handler={() => {}}
					/>
				</div>
			</header>
			<div className='cta'>
				<div className='cta-title'>
					<h1 className='title'>
						Создайте резюме
						<br /> для поиска работы <span>абсолютно бесплатно</span>
					</h1>
					<Button
						type='primary'
						size='large'
						icon={false}
						textcontent='Создать первое резюме'
						disabled={false}
						addClasses={[]}
						handler={() => {}}
					/>
				</div>
				<div className='img-wrapper'>
					<img src={cvimg} alt='cvimg' className='img' />
				</div>
			</div>
			<div className='features'>
				<div className='features-inner'>
					<div className='feature-item'>
						<div className='icon-box'>
							<i className='ph-pencil-simple-line'></i>
						</div>
						<div className='feature-text'>Редактирование онлайн</div>
					</div>
					<div className='feature-item'>
						<div className='icon-box'>
							<i className='ph-files'></i>
						</div>
						<div className='feature-text'>Уникальные шаблоны</div>
					</div>
					<div className='feature-item'>
						<div className='icon-box'>
							<i className='ph-file-pdf'></i>
						</div>
						<div className='feature-text'>Экспорт в формате PDF</div>
					</div>
					<div className='feature-item'>
						<div className='icon-box'>
							<i className='ph-lock-simple-open'></i>
						</div>
						<div className='feature-text'>Отсутствие ограничений</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default StartPage
