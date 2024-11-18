import {useLoaderData} from '@remix-run/react'
import {useTranslation} from 'react-i18next'

export const loader = async ({request}) => {
	const cookie = request.headers.get('Cookie')
	const response = await fetch('http://localhost:3000/auth/me', {headers: {cookie}})
	const user = await response.json()
	return user
}

const Index = () => {
	const {t} = useTranslation()
	const data = useLoaderData()
	return (
		<div>
			<h1>{t('indexRoute')}</h1>
			<pre>{JSON.stringify(data?.user?.emailAddresses?.[0]?.emailAddress, null, 2)}</pre>
		</div>
	)
}

export default Index
