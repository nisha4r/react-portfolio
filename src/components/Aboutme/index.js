import React from 'react';
import ProfilePic from '../../assets/nisha.jpeg';
import { Image, Container } from '@chakra-ui/react'
function Aboutme() {
    return (
        <Container bgGradient={[
            'linear(to-tr, teal.300, cyan.400)',
            'linear(to-t, cyan.200, teal.500)',
            'linear(to-b, green.100, cyan.300)',
        ]}>
            <section id="aboutme" className='m-3'>
                <h1 id="aboutme-text" className='section-title'>About Me</h1>

                <div className='flex-row'>
                    <div class=''>
                        <div class=''>
                            <Image src={ProfilePic} alt='Profile Picture' />
                        </div>
                    </div>
                    <p>Hello, I'm Nishanthi, 33 year old living at Herriman, Utah. I am a Web Developer learning Web development from Coding Bootcamp at UofU 2023 Feb Batch. I'm fueled with a passion for understanding requirements and the ability convert requirements into Web products. I am a "forever student," eager to build on my academic foundations in Web development and IT.</p>

                    <p>I hunger for knowledge and am determined to learn and create the best solution for web development.</p>

                    <p>I believe mindfulness in the workplace is crucial to success—a tenet. I live out my self-interests in yoga, meditation, gardening, and painting. I'm currently working as a homemaker and am always interested in challenges. Reach out to nisha.4r@gmail.com to connect!</p>
                </div>
            </section>
        </Container>
    );
}

export default Aboutme;