import React from 'react';
import {
  Text,
  VStack,
  Grid,
  GridItem,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { IPropTypes } from './details.types';

function Details(props: IPropTypes): JSX.Element {
	return (
		<VStack
			h="full"
			w="full"
			p={10}
			spacing={10}
			alignItems="flex-start"
		>
			<VStack alignItems="flex-start" p={0}>
				<Heading size="2xl">Your details</Heading>
				<Text>If you already have an account, click here to log in.</Text>
			</VStack>

			<Grid column={2} columnGap={3} rowGap={6} w="full">
				<GridItem colSpan={1}>
					<FormControl>
						<FormLabel>First name</FormLabel>
						<Input placeholder="John" />
					</FormControl>
				</GridItem>

				<GridItem colSpan={1}>
					<FormControl>
						<FormLabel>Last name</FormLabel>
						<Input placeholder="Doe" />
					</FormControl>
				</GridItem>

				<GridItem colSpan={2}>
					<FormControl>
						<FormLabel>Address</FormLabel>
						<Input placeholder="Blvd. Broken Dreams 21" />
					</FormControl>
				</GridItem>

				<GridItem colSpan={1}>
					<FormControl>
						<FormLabel>City</FormLabel>
						<Input placeholder="San Francisco" />
					</FormControl>
				</GridItem>

				<GridItem colSpan={1}>
					<FormControl>
						<FormLabel>Country</FormLabel>
						<Select>
							<option value="mx">Mexico</option>
							<option value="usa">United States of America</option>
							<option value="ca">Canada</option>
					    </Select>
					</FormControl>
				</GridItem>

				<GridItem colSpan={2}>
					<Checkbox defaultChecked>
					    Ship to the billing address.
					</Checkbox>
				</GridItem>

				<GridItem colSpan={2}>
					<Button w="full">Place Order</Button>
				</GridItem>
			</Grid>
		</VStack>
	);
}

export default Details;