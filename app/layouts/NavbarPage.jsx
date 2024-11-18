import {
	SignInButton,
	SignUpButton,
	SignedIn,
	SignedOut,
	UserButton,
} from '@clerk/remix'
import {
	HStack, VStack, Button,
} from '@chakra-ui/react'
import {LanguageSwitcher} from '../shared/LanguageSwitcher'
import {useTranslation} from 'react-i18next'

export const NavbarPage = ({setLang, children}) => {
	const {t} = useTranslation()
	return (
		<VStack w='100%'>
			<HStack w='100%' p={2} bg='bg.subtle' justifyContent='flex-end'>
				<LanguageSwitcher setLang={setLang} />
				<SignedIn>
					<div>
						<UserButton />
					</div>
				</SignedIn>
				<SignedOut>
					<div>
						<SignInButton>
							<Button size='xs' variant='subtle'>{t('signIn')}</Button>
						</SignInButton>
					</div>
					<div>
						<SignUpButton>
							<Button size='xs' colorPalette='purple'>{t('signUp')}</Button>
						</SignUpButton>
					</div>
				</SignedOut>
			</HStack>
			{children}
		</VStack>
	)
}
