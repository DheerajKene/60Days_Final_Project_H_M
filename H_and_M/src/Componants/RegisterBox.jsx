import React from 'react'
import { useRef } from 'react'
import { Image } from '@chakra-ui/react'
import { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
 
  } from '@chakra-ui/react'
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
    Select,
  } from '@chakra-ui/react'
import Sign_In_box from './Sign_In_box'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const RegisterBox = () => {

    const Data = []
    const[email, setEmail] = useState('');
    const[passward, setPassward] = useState("");
    const[Dob, setDob] = useState("");
    const[FirstName, setFirstName] = useState("");
    const[Lastname, setLasteName] = useState("")
    const[gender, setGender] = useState("")
    const[PostalCode, setPostalCode] = useState("");

    const{register, DataArr} = useContext(AuthContext);

    const UserData = {
      email,
      passward,
      Dob,
      FirstName,
      Lastname,
      gender,
      PostalCode,
    }


    function saveData(key, arr){
      localStorage.setItem(key, JSON.stringify(arr));
    }
    // Data.push(UserData);

    function RegData(){
      Data.push(UserData);
      saveData("Data", Data);
      alert("Registration Successful");
      
    }

    

 
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button onClick={onOpen} variant='outline' colorScheme='black' fontFamily='Candara'>
          Become a member</Button>
      
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontFamily='Candara' fontSize='25px' fontWeight='1000'>Become an H&M member</ModalHeader>
            
            <ModalCloseButton />
            <ModalBody pb={6}>
            <p style={{fontSize:'12px', fontFamily:'Candara', marginLeft:'25px', textWrap:'auto'}}>Become a member-don't miss out on deals, offers,discounts and bonus vouchers.</p>
              <FormControl>
                <FormLabel fontFamily='Candara' fontSize='15px' fontWeight='1000'>Email</FormLabel>
                <Input value={email} onChange={(e)=>{setEmail(e.target.value)}} ref={initialRef} placeholder='Email' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel fontFamily='Candara' fontSize='15px' fontWeight='1000'>Create a passward</FormLabel>
                <Input value={passward } onChange={(e)=>{setPassward(e.target.value)}} placeholder='Passward' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel fontFamily='Candara' fontSize='15px' fontWeight='1000'>Date of Birth</FormLabel>
                <Input value={Dob} onChange={(e)=>{setDob(e.target.value)}} fontFamily='Candara' type='date' placeholder='Passward' />
              </FormControl>
              <p style={{fontSize:'12px', fontFamily:'Candara', marginLeft:'25px', textWrap:'auto'}}>H&M want to give you a special treat on your birthday</p>
            </ModalBody>

{/* Accordion Some additional information to get more benifits.. */}
            <Accordion defaultIndex={[1]} allowMultiple width='90%' margin='auto' allowToggle>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as='span' flex='1' textAlign='left' fontSize='Candara' fontWeight='15px'>
                    <h3 style={{fontFamily:'Candara', fontSize:'15px'}}>Add more & Get more</h3>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                
                </h2>
                <AccordionPanel pb={4}>

{/*Additional Information Panal*/}
                <h3 style={{fontFamily:'Candara', fontSize:'15px'}}>Did you know that if you add some more information below you will earn more points and get a more personalized experience? How great is that?</h3>

                <ModalBody border='1px dotted gray' pb={6}>
            
                    <FormControl>
                        <FormLabel fontFamily='Candara' fontSize='15px' fontWeight='1000'>First Name</FormLabel>
                        <Input value={FirstName} onChange={(e)=>{setFirstName(e.target.value)}} ref={initialRef}  />
                    </FormControl>
        
                    <FormControl mt={4}>
                        <FormLabel fontFamily='Candara' fontSize='15px' fontWeight='1000'>Last Name</FormLabel>
                        <Input value={Lastname} onChange={(e)=>{setLasteName(e.target.value)}}/>
                    </FormControl>

                    <FormControl mt={4}>
                    <FormLabel fontFamily='Candara' fontSize='15px' fontWeight='1000'>Select Gender</FormLabel>
                        <Select value={gender} onChange={(e)=>{setGender(e.target.value)}} fontFamily='Candara' fontSize='15px' placeholder='Select option'>
                            <option value='Male' style={{fontFamily:'Candara', fontSize:'15px'}}>Male</option>
                            <option value='Female'>Female</option>
                        </Select>
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel fontFamily='Candara' fontSize='15px' fontWeight='1000'>Postal Code</FormLabel>
                        <Input value={PostalCode} onChange={(e)=>{setPostalCode(e.target.value)}}/>
                    </FormControl>
                    </ModalBody>

                </AccordionPanel>
            </AccordionItem>
            </Accordion>
  
            <ModalFooter>
              <Button onClick={RegData} variant='outline' bg='black' textColor='white' fontFamily='Candara' mr={1}>
                Become a member
              </Button>
              <Button variant='outline' colorScheme='black' fontFamily='Candara' onClick={()=>{window.location.href = <Sign_In_box/>}}>Sign in
              
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        
      </>
    )
      }

export default RegisterBox