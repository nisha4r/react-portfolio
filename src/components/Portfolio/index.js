import React, {useRef} from 'react';
import { HStack, Center, CardBody, Badge, Button, SlideFade, Fade, ScaleFade } from '@chakra-ui/react';
import htmlImage from "../../assets/html_css.png";
import { Image } from '@chakra-ui/react'
import {useInViewport} from 'react-in-viewport'
import { SimpleGrid, GridItem, Heading, Divider, Box, Text, Container, Stack, Card } from '@chakra-ui/react';
function Portfolio({color}) {
    const ref = useRef(null);
     const {inViewport} = useInViewport(ref, {rootMargin: "-200px"},{disconnectOnLeave: false},{});
    return (
        <>
            
            
            <Container maxW={'3x1'}  bgGradient="linear(to-t, green.100, teal.500)">
                <Stack as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} pb={{ base: 18, md: 34 }}>
                    <Stack px={4} align={'center'} direction="row">
                        <HStack mx={5}>
                            <Heading color={'${color}.400'} fontWeight={800}>Project Work</Heading>
                        </HStack>
                        
                    </Stack>
                    <Divider orientation='horizontal' />
                    <Stack spacing={4} px={4}>
                       <Fade initialScale={0.5} in={inViewport > 0}  whileHover={{scale:0.8}} >
                            <Card overflow={'hidden'} direction={{base: "column"}} shadow={'md'} m={3} p={3} ref={ref}>
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
                            </Fade>
                    </Stack>
               
                </Stack>
            </Container>
        </>
    );
}

export default Portfolio;