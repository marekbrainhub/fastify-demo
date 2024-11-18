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

export const NavbarPage = ({setLang, children}) => (
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
						<Button size='xs' variant='subtle'>Sign In</Button>
					</SignInButton>
				</div>
				<div>
					<SignUpButton>
						<Button size='xs' colorPalette='purple'>Sign Up</Button>
					</SignUpButton>
				</div>
			</SignedOut>
		</HStack>
		{children}
	</VStack>
)
