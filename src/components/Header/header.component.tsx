import React from 'react';
import { HStack, Box } from '@chakra-ui/react';

import { ColorModeSwitcher } from '../ColorModeSwitcher/ColorModeSwitcher'
import { Logo } from "../Logo/Logo";

import { IPropTypes } from './header.types';

function Header(props: IPropTypes): JSX.Element {
	return (
		<HStack
			w="full"
			h="80px"
			justify="flex-end"
			align="center"
			bg="gray.500"
			p={4}
		>
			<ColorModeSwitcher />
		</HStack>
	);
}

export default Header;