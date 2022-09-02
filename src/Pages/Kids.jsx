import { AddIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Kidsidebar from '../Components/Kidsidebar'

const Kids = () => {
  return (
    <Flex w="100%">
        <Kidsidebar />
        <Flex  width={"75%"} m="auto" mt="20px" flexWrap={"wrap"}  gap="20px" >

        <Flex bg="rgb(247,247,247)"  width={"300px"} borderRadius="50px"   p="10px 0px" alignItems="center"  justifyContent={"space-around"}  >
            <Text fontSize='2xl' fontWeight={"600"} >Pay School Fees</Text>
        <AddIcon fontSize='xl' />
        </Flex>
        <Flex bg="rgb(247,247,247)"  width={"300px"} borderRadius="50px"   p="10px 0px" alignItems="center"  justifyContent={"space-around"}  >
            <Text fontSize='2xl' fontWeight={"600"} >Course Fees</Text>
        <AddIcon fontSize='xl' />
        </Flex>
        <Flex bg="rgb(247,247,247)"  width={"300px"} borderRadius="50px"   p="10px 0px" alignItems="center"  justifyContent={"space-around"}  >
            <Text fontSize='2xl' fontWeight={"600"} >Help Ticket</Text>
        <AddIcon fontSize='xl' />
        </Flex>



        </Flex>

    </Flex>
  )
}

export default Kids