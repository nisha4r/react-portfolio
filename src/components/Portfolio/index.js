import React from 'react';
import { HStack, Center, CardBody } from '@chakra-ui/react';
import htmlImage from "../../assets/html_css.png";
import { Image } from '@chakra-ui/react'
import { SimpleGrid, GridItem, Heading, Divider, Box, Text, Container, Stack } from '@chakra-ui/react';
function Portfolio() {
    return (
        <>
            <Box w="100%" h="auto" bgGradient="linear(to-t, green.200, teal.500)" >
                <SimpleGrid columns={2} spacingX='20px' spacingY='20px' justifyContent={"center"}
                    alignContent={"center"}
                    display={"flex"}
                    flexWrap={"wrap"}>
                    <GridItem colSpan={2}>
                        <Heading>Work</Heading>

                    </GridItem>
                    <GridItem colSpan={2} w={'full'}> <Divider /></GridItem>
                    <GridItem colSpan={2} width={'full'}>  <Center><Heading>HTML CSS Javascript</Heading></Center></GridItem>
                    <GridItem>

                        <HStack>
                            <Center>
                                <Box boxSize='lg'>
                                    <Image src={htmlImage} alt='HTML CSS' />
                                </Box>

                                <Text>HTML provides the basic structure of sites, which is enhanced and modified by other technologies like CSS and JavaScript. CSS is used to control presentation, formatting, and layout. JavaScript is used to control the behavior of different elements.</Text>
                            </Center>
                        </HStack>

                    </GridItem>

                </SimpleGrid>
            </Box>
            <Container maxW={'3'}>
                <Stack as={Box} textAlign={'center'} spacing={{ base: 8, md: 15 }} pb={{ base: 18, md: 34 }}>
                    <Stack px={4} align={'center'} direction="row">
                        <HStack mx={5}>
                            <Text color={'gray.600'} fontWeight={800}>Project Work</Text>
                        </HStack>
                        
                    </Stack>
                    <Divider orientation='horizontal' />
                    <Stack>
                        <Fade>
                            <Card>
                                <Image></Image>
                                <Stack>
                                    <CardBody>
                                        <Heading> HTML & CSS</Heading>
                                        <Text>Description</Text>
                                    </CardBody>
                                </Stack>
                            </Card>
                        </Fade>
                    </Stack>
               
                </Stack>
            </Container>
        </>
    );
}

export default Portfolio;