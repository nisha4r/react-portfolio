

'use client'
import React from 'react';
import { FaGithub, FaGithubAlt, FaLinkedinIn, FaStackOverflow } from "react-icons/fa";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'




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
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('teal.200', 'teal.700')}>
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
    
  )
}

