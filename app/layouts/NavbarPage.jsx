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
import {ChartPieIcon} from 'lucide-react'
import {LanguageSwitcher} from '../shared/LanguageSwitcher'

export const NavbarPage = ({children}) => (
	<VStack w='100%'>
		<HStack w='100%' p={2} bg='bg.subtle' justifyContent='flex-end'>
			<LanguageSwitcher />
			<SignedIn>
				<div>
					<UserButton>
						<UserButton.MenuItems>
							<UserButton.Action
								label='Example Action'
								labelIcon={<ChartPieIcon />}
								onClick={() => console.info('Clicked icon.')}
							/>
						</UserButton.MenuItems>
					</UserButton>
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
