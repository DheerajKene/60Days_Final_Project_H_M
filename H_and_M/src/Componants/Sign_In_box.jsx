import React from 'react'
import { useRef } from 'react'
import { Image } from '@chakra-ui/react'
import RegisterBox from './RegisterBox'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
  } from '@chakra-ui/react'

const Sign_In_box = () => {
 
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Button onClick={onOpen} bg='white' fontSize='12px'>
      <Image
            boxSize='22px'
            objectFit='cover'
            src='data:image/png;base64,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'
            alt='Dan Abramo'
  />
        Sign In</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign in</ModalHeader>
          <p style={{fontSize:'12px', fontFamily:'Candara', marginLeft:'25px', textWrap:'auto'}}>Become a member-don't miss out on deals, offers,discounts and bonus vouchers.</p>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input ref={initialRef} placeholder='Email' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Passward</FormLabel>
              <Input placeholder='Passward' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant='outline' bg='black' textColor='white' fontFamily='Candara' mr={3}>
              Sign in
            </Button>
            <RegisterBox/> 
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
  

export default Sign_In_box