import React from 'react';
import { Text } from '@chakra-ui/react';
import { IPropTypes } from './header.types';

function Header(props: IPropTypes): JSX.Element {
	return (
		<Text>Header component!</Text>
	);
}

export default Header;