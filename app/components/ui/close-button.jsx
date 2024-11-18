function _nullishCoalesce(lhs, rhsFn) {
	if (lhs !== null) {
		return lhs
	}

	return rhsFn()
}

import {IconButton as ChakraIconButton} from '@chakra-ui/react'
import * as React from 'react'
import {X} from 'lucide-react'

export const CloseButton = React.forwardRef(function CloseButton(props, ref) {
	return (
		<ChakraIconButton variant='ghost' aria-label='Close' ref={ref} {...props}>
			{_nullishCoalesce(props.children, () => (
				<X />
			))}
		</ChakraIconButton>
	)
})
