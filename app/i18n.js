import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

const resources = {
	enUS: {
		translation: {
			signIn: 'Sign In',
			signUp: 'Sign Up',
			indexRoute: 'Index Route',
		},
	},
	plPL: {
		translation: {
			signIn: 'Logowanie',
			signUp: 'Rejestracja',
			indexRoute: 'Ścieżka indeksowa',
		},
	},
}

i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: 'enUS',
		interpolation: {
			escapeValue: false,
		},
	})

export default i18n
