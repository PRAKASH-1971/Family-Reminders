import React from 'react'
import { Box, Flex, Image, Stack ,Text} from "@chakra-ui/react";
import { AddIcon} from '@chakra-ui/icons'
import Card from '../Components/Card';
import {Link as RLink} from "react-router-dom"
// import Bot from '../Components/Bot';


const Homepage = () => {
  // console.log(tab)
  return (
    <Box w="100%">
<Flex color={"black"} alignItems={"center"} w="130px" justifyContent={"space-between"} >
  <Text fontSize='3xl'>  <b>  TODAY</b> </Text>
  <AddIcon fontSize='xl' />
  </Flex>

  <Flex w="90%" m="auto" gap="20px" flexWrap={"wrap"}>

    <RLink to="/Dates">
  <Card ptext={"DATES"} IMAGE="https://c8.alamy.com/comp/2E6NM8D/calendar-icon-and-red-circle-mark-the-date-holiday-important-day-concepts-2E6NM8D.jpg"/> </RLink>

  <RLink to="/Home">
  <Card ptext={"HOME"} IMAGE="data:image/png;base64,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"/></RLink>

  <RLink to="/Kids">
  <Card ptext={"KIDS"} IMAGE="https://i.pinimg.com/originals/e6/84/49/e68449b851a8ffb8256a71daab209775.png"/>
  </RLink>

  <RLink to="/Health">
<Card ptext={"HEALTH"} IMAGE="https://st2.depositphotos.com/4362315/7819/v/950/depositphotos_78194060-stock-illustration-medical-logo-health-care-center.jpg"/>
</RLink>

<Text>Below features is on Progress</Text>


<RLink to="/Mobile">
<Card ptext={"MOBILE"} IMAGE="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3dxNUxFPV_RmYQsozpRh1Rvapf6l0i-1DDA&usqp=CAU"/>
</RLink>

<RLink to="/Vehicle">
  <Card ptext={"VEHICLE"} IMAGE="https://cdn5.vectorstock.com/i/1000x1000/68/44/car-logo-with-circle-hand-colorful-logo-vector-22266844.jpg"/>
  </RLink>

  <RLink to="/Trip">
  <Card ptext={"TRIP"} IMAGE="https://image.shutterstock.com/image-vector/family-vacation-logo-tshirt-design-260nw-2164586735.jpg"/>
  </RLink>

  {/* <Bot/> */}



  </Flex>


    </Box>
  )
}

export default Homepage