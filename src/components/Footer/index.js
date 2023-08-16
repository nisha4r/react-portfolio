// import React from 'react';
// import { FaStackOverflow } from "react-icons/fa";
// import { VscGithub } from "react-icons/vsc";
// import { AiOutlineLinkedin } from "react-icons/ai";

// function footer() {
//     return (
//         <footer>
//             <h3>Created by Nishanthi ©</h3>
//             <p>
//                 <ul>
//                     <a href='https://github.com/nisha4r'><li className="icon-style"><VscGithub /></li></a>
//                     <a href='https://www.linkedin.com/in/nishanthig/'> <li className="icon-style"><AiOutlineLinkedin /></li></a>
//                     <a href='https://stackoverflow.com/users/22355021/nishanthi-g'> <li className="icon-style"><FaStackOverflow /></li></a>
//                 </ul>
//             </p>
//         </footer>
//     );
// }
// export default footer;

'use client'
import React from 'react';
import { FaGithub, FaGithubAlt, FaLinkedinIn, FaStackOverflow } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { ReactNode } from 'react'

const Logo = (props) => {
  return (
    <svg height={32} viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg" {...props}>
     
     
    </svg>
  )
}

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <Logo />
        
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2022 Created By Nishanthi</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'GitHub '} href={'https://github.com/nisha4r'}>
              <FaGithub/>
            </SocialButton>
            <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/nishanthig/'}>
              <FaLinkedinIn />
            </SocialButton>
            <SocialButton label={'Stackoverflow'} href={'https://stackoverflow.com/users/22355021/nishanthi-g'}>
              <FaStackOverflow />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

