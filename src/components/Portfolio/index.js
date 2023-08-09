import React from 'react';
import { Stack, HStack, VStack, Center } from '@chakra-ui/react';
import htmlImage from "../../assets/html_css.png";
import { Image } from '@chakra-ui/react'
import { SimpleGrid, GridItem, Heading, Divider, Box, Text } from '@chakra-ui/react';
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
        </> 
    );
}

export default Portfolio;