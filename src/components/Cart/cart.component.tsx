import React from 'react';
import {
	VStack,
	HStack,
	Heading,
	Text,
	AspectRatio,
	Image,
	Divider,
} from "@chakra-ui/react";
import { IPropTypes } from './cart.types';

function Cart(props: IPropTypes): JSX.Element {
	return (
		<VStack
			h="full"
			w="full"
			p={10}
			spacing={10}
			alignItems="flex-start"
			bg="gray.50"
		>
			<VStack alignItems="flex-start" p={0}>
				<Heading size="2xl">Your cart</Heading>
				<Text>If price is too hard on your eyes, try changing the theme.</Text>
			</VStack>

			<HStack justifyContent="flex-start" w="full" spacing={6}>
				<AspectRatio ratio={1} w={24}>
					<Image src="http://purepng.com/public/uploads/large/purepng.com-sitting-catcatcatsanimalspetscute-cat-25152016380020k8o.png" alt="cat picture" />
				</AspectRatio>

				<HStack justifyContent="space-between" w="full">
					<VStack alignItems="flex-start">
						<Heading size="md">Penny board</Heading>
						<Text>PNYCOMP27541</Text>
					</VStack>

					<Heading size="s" justifySelf="flex-end">$119.00</Heading>s
				</HStack>
			</HStack>

			<VStack spacing={4} alignItems="stretch" w="full">
				<HStack justifyContent="space-between">
					<Text color="gray.600">Subtotal</Text>
					<Heading size="sm">$119.00</Heading>
				</HStack>
				<HStack justifyContent="space-between">
					<Text color="gray.600">Shipping</Text>
					<Heading size="sm">$19.99</Heading>
				</HStack>
				<HStack justifyContent="space-between">
					<Text color="gray.600">Taxes (estimated)</Text>
					<Heading size="sm">$23.00</Heading>
				</HStack>
			</VStack>

			<Divider />

			<HStack justifyContent="space-between" w="full">
				<Text color="gray.600">Total</Text>
				<Heading size="lg">$162.79</Heading>
			</HStack>
		</VStack>
	);
}

export default Cart;