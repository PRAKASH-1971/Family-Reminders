import { Box, Image,Flex,Text } from '@chakra-ui/react'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Datessidebar from "../Components/datessidebar"
import 'react-calendar/dist/Calendar.css';

const Dates = () => {
    
  const [bag, setBag] = useState("");
  const [value, onChange] = useState(new Date());


const onclicked = (value)=>{
    console.log(value)
    // setBag(value)
}

  return (
    <Flex w="100%">
        <Datessidebar />
    <Box w="fit-content" m="20px auto">
   <Calendar onChange={onChange}  value={value}  
   onClickDay={onclicked(value)}    /> 

    </Box>
    </Flex>
  )
}

export default Dates