import React from 'react';
import NavBar from '../NavBar'
import { ScaleFade, Container, Stack, Box, Heading, Text} from '@chakra-ui/react'

function Header(props) {
    const { selecTab, handleTabChange } = props;
    return (<div>
        <section>
            <header>
                <div>
                <ScaleFade initialScale={0.1} in={true}> <h1>Nishanthi's Portfolio</h1></ScaleFade>
                </div>
                <div>
                    <NavBar selecTab={selecTab}
                        handleTabChange={handleTabChange}></NavBar>
                </div>
            </header>
        </section>
        <Container>
            <Stack pb={{base:18, md: 34}} spacing={{base: 8, md: 16}} as={Box} textAlign={"center"}>
                <Heading lineHeight={'100%'} fontWeight={500}>
                    Hi, My name is Nishanthi<br/>
                    <br/>
                    <Text as={'span'} color={'teal.500'}>
                        I'm Software Engineer
                    </Text>
                
                </Heading>
                <Text as={"span"} color={'gray.500'}>Welcome to my portfolio showcasing my journey as a passionate and dedicated Fullstack Developer. With a strong foundation in both front-end and back-end technologies, I have honed my skills through hands-on projects and a commitment to continuous learning. As an aspiring intern, I am excited to contribute my expertise to a dynamic team, collaborate on innovative projects, and further expand my capabilities in the realm of web development.</Text>
            </Stack>
        </Container>
    </div>);

}

export default Header;