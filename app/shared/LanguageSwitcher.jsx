import {createListCollection} from '@chakra-ui/react'
import {
	SelectContent,
	SelectItem,
	SelectRoot,
	SelectTrigger,
	SelectValueText,
} from '../components/ui/select'
import {useTranslation} from 'react-i18next'

const languages = createListCollection({
	items: [
		{label: 'English', value: 'en'},
		{label: 'polski', value: 'pl'},
	],
})

export const LanguageSwitcher = () => {
	const {i18n} = useTranslation()

	const handleSelect = ({value: [lang]}) => {
		i18n.changeLanguage(lang)
	}

	return (
		<SelectRoot
			w={32}
			size='xs'
			collection={languages}
			onValueChange={handleSelect}
			defaultValue={['en']}
		>
			<SelectTrigger>
				<SelectValueText placeholder='Language...' />
			</SelectTrigger>
			<SelectContent>
				{languages.items.map(item => (
					<SelectItem item={item} key={item.value}>{item.label}</SelectItem>
				))}
			</SelectContent>
		</SelectRoot>
	)
}