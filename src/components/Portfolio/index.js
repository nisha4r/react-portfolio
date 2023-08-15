import React from 'react';
import { HStack, Center, CardBody, Badge, Button } from '@chakra-ui/react';
import htmlImage from "../../assets/html_css.png";
import { Image } from '@chakra-ui/react'
import { SimpleGrid, GridItem, Heading, Divider, Box, Text, Container, Stack, Card, Fade } from '@chakra-ui/react';
function Portfolio({color}) {
    return (
        <>
            {/* <Box w="100%" h="auto" bgGradient="linear(to-t, green.200, teal.500)" >
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
            </Box> */}
            
            <Container maxW={'3x1'}  bgGradient="linear(to-t, green.100, teal.500)">
                <Stack as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} pb={{ base: 18, md: 34 }}>
                    <Stack px={4} align={'center'} direction="row">
                        <HStack mx={5}>
                            <Text color={'${color}.400'} fontWeight={800}>Project Work</Text>
                        </HStack>
                        
                    </Stack>
                    <Divider orientation='horizontal' />
                    <Stack spacing={4} px={4}>
                       
                            <Card overflow={'hidden'} direction={{base: "column"}}>
                                <Image objectFit={'cover'} src={htmlImage} alt='HTML CSS'></Image>
                                <Stack>
                                    <CardBody align="left">
                                        <Heading> HTML & CSS</Heading>
                                        <Text>Description</Text>
                                        <HStack py={2}>
                                            <Button>Link</Button>
                                        </HStack>
                                        <HStack spacing={2} pt={4}>
                                            <Badge>Badge</Badge>
                                        </HStack>
                                    </CardBody>
                                </Stack>
                            </Card>
                       
                    </Stack>
               
                </Stack>
            </Container>
        </>
    );
}

export default Portfolio;