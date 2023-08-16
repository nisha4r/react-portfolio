import React, { useRef } from 'react';
import { HStack, Center, CardBody, Badge, Button, SlideFade, Fade, ScaleFade } from '@chakra-ui/react';
import homeroom from "../../assets/homeroom.png";
import foodImage from "../../assets/food.avif";
import byeByeFresh from "../../assets/bbfreshlogo.png";
import { Image } from '@chakra-ui/react'
import { useInViewport } from 'react-in-viewport'
import { SimpleGrid, GridItem, Heading, Divider, Box, Text, Container, Stack, Card } from '@chakra-ui/react';
function Portfolio({ color }) {
    const ref = useRef(null);

    return (
        <>


            <Container maxW={'3x1'} bgGradient="linear(to-t, green.100, teal.500)" p={5}>
                <Center>
                    <Stack as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} pb={{ base: 18, md: 34 }}>
                        <Stack px={4} align={'center'} direction="row">
                            <HStack mx={5}>
                                <Heading color={'${color}.400'} fontWeight={800}>Project Work</Heading>
                            </HStack>

                        </Stack>
                        <Divider orientation='horizontal' />
                        <Stack spacing={4} px={4}>

                            <Card flexShrink={0} borderRadius='15px' overflow={'hidden'} direction={{ base: "column" }} shadow={'md'} m={3} p={3} width={{ base: 600, md: 800 }} bg={'gray.400'} ref={ref}>
                                <Image objectFit={'cover'} src={foodImage} alt='HTML CSS' width={{ base: 600, md: 800 }} height={'400px'}></Image>
                                <Stack>
                                    <CardBody align="left">
                                        <Heading> Project 1 - Food Lette</Heading>
                                        <Text>Most of us have been in a similar situation, that horrible time of day when you have to figure out what to eat, and make a decision. No one likes doing it, and so we have come together to try and solve this problem. Java Chips Food Generator is here to help you. This Food Generator takes out all of the complication and helps make your life easier. When you put in your address information, it will ask you three simple questions. Cuisine preference, minimum rating, and acceptiable distance. Based off of that information the generator will create a random order for you and deliver it to you. So you get to try new foods and not have to make a decision.</Text>
                                        <HStack py={2}>
                                            <a href="https://github.com/carlystahelidavis/java-chips">  <Button>Link</Button> </a>
                                        </HStack>
                                        <HStack spacing={2} pt={4}>
                                            <Badge ml='1' fontSize='0.8em' colorScheme='green'>PROJECT</Badge>
                                        </HStack>
                                    </CardBody>
                                </Stack>
                            </Card>

                        </Stack>
                        <Stack spacing={4} px={4}>

                            <Card borderRadius='15px' overflow={'hidden'} direction={{ base: "column" }} shadow={'md'} m={3} p={3} width={{ base: 600, md: 800 }} bg={'gray.400'} ref={ref}>
                                <Image objectFit={'cover'} src={byeByeFresh} alt='HTML CSS' width={{ base: 600, md: 800 }} height={'400px'}></Image>
                                <Stack>
                                    <CardBody align="left">
                                        <Heading> Project 2 - Bye Bye Fresh</Heading>
                                        <Text>Bye Bye Fresh is a website we created where people that have loved Hello Fresh in the past are able to access recipes and see nutritional value. Not only can you access previous recipes but if you do not see a website you have previous loved you can also add it to our database. By creating a login for out site you will be able to save recipes to your account. The whole purpose of this site is for users to be able to choose recipes they would like to cook which will then give a drop down of ingredients in each recipe chosen. From there you can choose the ingredients you do not have in your pantry and we will supply the caloric breakdown of those items.</Text>
                                        <HStack py={2}>
                                            <a href="https://github.com/JanicaJensen/refactored-octo-succotash"> <Button>Link</Button></a>
                                        </HStack>
                                        <HStack spacing={2} pt={4}>
                                            <Badge ml='1' fontSize='0.8em' colorScheme='green'>PROJECT</Badge>
                                        </HStack>
                                    </CardBody>
                                </Stack>
                            </Card>

                        </Stack>
                        <Stack spacing={4} px={4}>

                            <Card borderRadius='15px' overflow={'hidden'} direction={{ base: "column" }} shadow={'md'} m={3} p={3} width={{ base: 600, md: 800 }} bg={'gray.400'} ref={ref}>
                                <Image objectFit={'cover'} src={homeroom} alt='HTML CSS' width={{ base: 600, md: 800 }} height={'400px'}></Image>
                                <Stack>
                                    <CardBody align="left">
                                        <Heading> Project 3 - Homeroom</Heading>
                                        <Text>This website will provide teachers with an easier way to keep track of kids during free periods. They can also see if students are requested by another teacher, comment why they need to be in a certain classroom, and mark if they are still in my class or on the way via a toggle button.</Text>
                                        <HStack py={2}>
                                            <a href="https://github.com/AWinterCoding/Project_Home_Room"><Button>Link</Button></a>
                                        </HStack>
                                        <HStack spacing={2} pt={4}>
                                            <Badge ml='1' fontSize='0.8em' colorScheme='green'>PROJECT</Badge>
                                        </HStack>
                                    </CardBody>
                                </Stack>
                            </Card>

                        </Stack>


                    </Stack>
                </Center>
            </Container>
        </>
    );
}

export default Portfolio;