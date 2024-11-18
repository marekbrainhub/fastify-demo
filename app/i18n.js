import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

const resources = {
	en: {
		translation: {
			indexRoute: 'Index Route',
		},
	},
	pl: {
		translation: {
			indexRoute: 'Ścieżka indeksowa',
		},
	},
}

i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: 'en',
		interpolation: {
			escapeValue: false,
		},
	})

export default i18n
