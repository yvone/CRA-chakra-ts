import * as React from "react"
import {
	VStack,
	Container,
	Flex,
} from "@chakra-ui/react";
import { Details, Cart } from '../../components';

export const App = () => (
	<Container maxWidth="container.xl" p={20}>
		<Flex h="100vh">
			<Details />
			<Cart />
		</Flex>
	</Container>
)

export default App;