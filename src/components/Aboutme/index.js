import React from 'react';
import ProfilePic from '../../assets/nisha.jpeg';
import { Image, Container, Box, Divider, Heading, Spacer} from '@chakra-ui/react'
function Aboutme() {
    return (
        <Container bgGradient="linear(to-t, green.100, teal.500)">
           
              <Box className='p-3'>

              
                    <div class=''>
                        <div class=''>
                            <Spacer/>
                            <Box size={'sm'} align="center">
                            <Image rounded={'full'}                                
                                size='160px'
                                src={ProfilePic} alt='Nishanthi Govindasamy'
                            />
                           
                            </ Box>
                        </div>
                    </div>
                    
                    <Divider borderColor={'red.600'}/>
                    <Heading id="aboutme-text" >About Me</Heading>
                    <p>I am a proactive and motivated Fullstack Developer with a keen interest in combining the art of design with the science of programming. My journey into the world of web development started with a fascination for crafting engaging user experiences and evolved into a holistic skill set that spans both client and server-side technologies. Proficient in languages such as HTML, CSS, JavaScript, and frameworks like React, I thrive in creating intuitive and visually appealing front-end interfaces that seamlessly interact with users.</p>

                    <p>On the backend, I am skilled in server management, database design, and API development. My proficiency extends to technologies like Node.js and Express, enabling me to build robust and scalable server systems. I have experience working with both SQL and NoSQL databases, adapting solutions to the specific needs of the project.</p>

                    <p>My passion for problem-solving drives me to tackle challenges with creativity and efficiency. Through various personal and collaborative projects, I have developed a strong ability to translate concepts into practical, functional, and elegant solutions. I am a firm believer in clean code practices, ensuring maintainability and readability in all my projects.</p>

                    <p>As an intern, I am eager to contribute to a team-oriented environment, learn from experienced professionals, and enhance my skills through real-world application. I am excited to be part of innovative projects that push boundaries and solve meaningful problems. With a growth mindset and a commitment to staying updated with the latest industry trends, I am confident in my ability to adapt and excel in the fast-paced world of Fullstack Development.</p>
              
                </Box>
        </Container>
    );
}

export default Aboutme;