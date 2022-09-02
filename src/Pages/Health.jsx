import { AddIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Healthsidebar from '../Components/Healthsidebar'

const Health = () => {
  return (
<Flex w="100%">         <Healthsidebar  />
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

export default Health