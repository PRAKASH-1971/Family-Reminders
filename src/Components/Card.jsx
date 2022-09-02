import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  
  
  export default function Card({ptext,IMAGE}) {
    return (
      <Center >
        <Box
          role={'group'}
          p={6}
          maxW={'250px'}
          w={'full'}
          h="fit-content"
          bg={"rgb(247,247,247)"}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
            <Image
              rounded={'lg'}
              height={200}
              width={282}
              objectFit={'cover'}
              src={IMAGE}
            />
          <Stack align={'center'}>
            <Heading color={"black"} fontSize={'2xl'} fontFamily={'body'} fontWeight={500} mt="20px" >
              {ptext}
            </Heading>
          </Stack>
        </Box>
      </Center>
    );
  }