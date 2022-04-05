import * as React from "react"
import {
	VStack,
	Container,
	Flex,
} from "@chakra-ui/react";
import { Details, Cart } from '../../components';

export const App = () => (
	<Container maxWidth="container.xl" p={[0, 5, 20]}>
		<Flex h="100vh" direction={{ base: "column", md: "row" }} >
			<Details />
			<Cart />
		</Flex>
	</Container>
)

export default App;