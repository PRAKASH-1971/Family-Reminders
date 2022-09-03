import { Box, Button, Flex, Image, Text, Wrap } from '@chakra-ui/react'
import React, { useState } from 'react'
import Kidsidebar from '../Components/Kidsidebar'
import TimePicker from 'react-time-picker';


const Kids = () => {
    const [value, onChange] = useState('10:00');
    const mytime = (value.toLocaleString()).split(",")[0]
    const [tab, setTab] = useState("School Timings");
    const coursese = ["English","Hindi","Kannnada / Sanskrit", "Social Science", "Science", "Mathematics"]
    const [course, setCourse] = useState(coursese);


    console.log(tab)


const onchanged=(e)=>{
setCourse(e.target.value)
}

const handleSubmit=()=>{
    console.log(course)
}

  return (
    <Flex w="100%">
        <Kidsidebar setTab={setTab}/>
        {tab === "School Timings" && 
<Box m="20px" h="fit-content" w="350px" justifyContent={"flex-start"} textAlign={"left"}>
            <Text fontWeight={600}> <b>  School Start Time : </b> 8 AM  </Text>
        <Box display={"flex"}  w="250px" mt="20px" h="fit-content" justifyContent={"space-between"} >
            <Text fontWeight={600}> <b>  Select School End Time : </b> </Text>
            <TimePicker onChange={onChange} value={value}  />
        </Box>
        </Box>
        }
        {tab === "Holidays" && <Image w="60%" h="1200px" src="https://dahisar.universalhigh.edu.in/wp-content/uploads/2018/03/UHD-HB-18-05.jpg"  />
        }


       { tab === "Courses" && 
        <Flex direction={"column"} flexWrap={"Wrap"} w="700px" h="250px">
        {coursese?.map((itm)=>(
            <Box bg="rgb(238,242,236)" m="10px" w="40%" p="10px" h="fit-content">{itm}</Box> 
            ))
        }
        </Flex>
       }

       { tab === "Kid Progress" && 
       <Image w="40%" h="800px" src="https://5.imimg.com/data5/SELLER/Default/2020/10/FF/TT/PB/38003507/generating-report-card-mark-statement-for-schools-colleges-500x500.jpg"  />
       }
       { tab === "Evaluations" && 
       <Image w="40%" h="600px" src="http://www.gmhsmaulicolonychd.com/wp-content/uploads/2017/09/1.png"  />
       }


        



    </Flex>
  )
}

export default Kids