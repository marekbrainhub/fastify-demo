import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react'
import {ChakraProvider, defaultSystem} from '@chakra-ui/react'
import {rootAuthLoader} from '@clerk/remix/ssr.server'
import {NavbarPage} from './layouts/NavbarPage'
import {ClerkApp as withClerk} from '@clerk/remix'
import './i18n'

export const links = () => [
	{rel: 'preconnect', href: 'https://fonts.googleapis.com'},
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
	},
]

export const loader = args => rootAuthLoader(args)

export function Layout({children}) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<Meta />
				<Links />
			</head>
			<body>
				<ChakraProvider value={defaultSystem}>
					{children}
				</ChakraProvider>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

function App() {
	return (
		<NavbarPage>
			<Outlet />
		</NavbarPage>
	)
}

export default withClerk(App)
