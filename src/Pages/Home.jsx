import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { AddIcon} from '@chakra-ui/icons'
import Homesidebar from '../Components/Homesidebar'

const Home = () => {
  return (
    <Flex w="100%">        <Homesidebar />
        <Flex  width={"90%"} m="auto" mt="20px" flexWrap={"wrap"}  gap="20px" >
            
        <Flex bg="rgb(247,247,247)"  width={"300px"} borderRadius="50px"   p="20px 0px" alignItems="center"  justifyContent={"space-around"}  >
            <Text fontSize='3xl'> <b>Pay Bills</b></Text>
        <AddIcon fontSize='xl' />
        </Flex>
        <Flex bg="rgb(247,247,247)"  width={"300px"} borderRadius="50px"   p="20px 0px" alignItems="center"  justifyContent={"space-around"}  >
            <Text fontSize='3xl'> <b>Pay Rent</b></Text>
        <AddIcon fontSize='xl' />
        </Flex>
        <Flex bg="rgb(247,247,247)"  width={"300px"} borderRadius="50px"   p="20px 0px" alignItems="center"  justifyContent={"space-around"}  >
            <Text fontSize='3xl'> <b>Groceries</b></Text>
        <AddIcon fontSize='xl'/>
        </Flex>
        


        </Flex>
        </Flex>
  )
}

export default Home