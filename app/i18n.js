import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

const resources = {
	enUS: {
		translation: {
			indexRoute: 'Index Route',
		},
	},
	plPL: {
		translation: {
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
