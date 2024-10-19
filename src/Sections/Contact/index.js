import { 
Container,
  Heading, 
  VStack, 
  Flex,
  SimpleGrid, 
  GridItem, 
  FormControl, 
  FormLabel,
  Input,
  Textarea,
  Button,
  } from "@chakra-ui/react";
const Contact = () => {
    return(
      <Container py={2} centerContent maxHeight="container.xl" p={0}>
        <VStack py={4}><Heading size='md'>Reach out to us here</Heading></VStack>
        <Flex height='100vh' py={20}>
          <VStack 
          w='full'
          h='full'
          p={10}
          spacing={10}
          bg="gray.50"
          >
            <SimpleGrid column={2}  columnGap={50} w="full">
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input size='sm'></Input>
                </FormControl>
              </GridItem>

              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input size='sm'></Input>
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <Textarea></Textarea>
              </GridItem>

              <GridItem colSpan={2}>
                <Button variant='outline' w='full'>Submit</Button>
              </GridItem>
            </SimpleGrid>
          </VStack>
        </Flex>
      </Container>
    )
};

export default Contact;