import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  GridItem,
  theme,
  Container,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  HStack,
  AspectRatio,
  Image,
  CSSReset,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { Header } from './components';

export const App = () => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <ColorModeSwitcher />

    <Header />

    <Container maxWidth="container.xl" p={20}>
      <Flex h="100vh" p={10}>
        <VStack
          h="full"
          w="full"
          p={10}
          alignItems="flex-start"
        >
          <VStack alignItems="flex-start" p={0}>
            <Heading>Your details</Heading>
            <Text>If you already have an account, click here to log in.</Text>
          </VStack>

          <Grid column={2} columnGap={3} rowGap={6}>
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

        <VStack
          h="full"
          w="full"
          p={10}
          alignItems="flex-start"
          bg="gray.50"
        >
          <VStack alignItems="flex-start" p={0}>
            <Heading>Your details</Heading>
            <Text>If you already have an account, click here to log in.</Text>
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
        </VStack>
      </Flex>
    </Container>


    
  </ChakraProvider>
)
