import * as React from "react"
import {
	ChakraProvider,
	VStack,
	theme,
	Container,
	Flex,
	CSSReset,
} from "@chakra-ui/react";
import { Header, Details, Cart } from '../../components';

export const App = () => (
	<ChakraProvider theme={theme}>
		<CSSReset />
		{/*<Header />*/}

		<Container maxWidth="container.xl" p={20}>
			<Flex h="100vh">
				<Details />
				<Cart />
			</Flex>
		</Container>
	</ChakraProvider>
)

export default App;