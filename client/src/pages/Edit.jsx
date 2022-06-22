import React from 'react'

import { useMediaQuery } from 'react-responsive'

import { Form, Preview, Button } from '../components'

const Edit = () => {
	const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1279px)' })

	return (
		<div className='wrapper'>
			<Form />
			{isDesktopOrLaptop && <Preview />}
			{isTabletOrMobile && (
				<Button
					type='primary'
					size='large'
					icon='ph-file-pdf'
					textcontent={false}
					disabled={false}
					addClasses={['Button_onlyicon', 'mobile-preview-button']}
					// handler={() => {}}
				/>
			)}
		</div>
	)
}
export default Edit
