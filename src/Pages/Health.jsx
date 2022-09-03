import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Healthsidebar from '../Components/Healthsidebar'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Health = () => {
    var dateArr = []

    const [formdata, setFormdata] = useState();
    const [value, onChange] = useState(new Date());
    const mydate = (value.toLocaleString()).split(",")[0]



    const handleChange = (e) => {
        const inputName = e.target.name;
        // checkbox
        if (e.target.type === 'checkbox') {
            console.log(e.target.checked);
            setFormdata({ ...formdata, [inputName]: e.target.checked });
        } else {
            setFormdata({ ...formdata, [inputName]: e.target.value , "date": mydate });
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dateArr.push(formdata);
        // window.location.reload();
        console.log(dateArr)
        // localStorage.clear()
    }




  return (
<Flex w="100%">         <Healthsidebar  />
<Flex  width={"90%"} m="auto" mt="20px" flexWrap={"wrap"}  gap="20px" >

<Box w="40%">
                        <Calendar onChange={onChange} value={value} />
                    </Box>
<div className="addHouseContainer" onSubmit={handleSubmit}>
    <Text fontWeight={600} fontSize="3xl">Enter Last Checkup Details</Text>
                            <form>
                                <input type="text" style={{ "border": "1px solid black", "width": "300px", "padding": "5px 10px", "borderRadius": "10px", "margin": "10px 0px" }} placeholder='ENTER TITLE' className="title" value={formdata?.title} name="title" required onChange={handleChange} />
                                <br />
                                <input style={{ "border": "1px solid black", "width": "300px", "padding": "5px 10px", "borderRadius": "10px", "marginBottom": "10px" }} type="file" id="img" name="img" accept="image/*" value={formdata?.img} placeholder='ENTER DESCRIPTION' className="desc" required onChange={handleChange} />
     <br />
     <input style={{ "border": "1px solid black", "width": "300px", "padding": "5px 10px", "borderRadius": "10px", "marginBottom": "10px" }} value={mydate} placeholder='ENTER PRESCRIPTION' name="desc" type="text" className="desc" required onChange={handleChange} />
     <br />
                                <Button colorScheme='teal' size='md' type="submit" className="submitBtn" >SUBMIT</Button>
                            </form>
                        </div>

<Flex w="80%" h="fit-content" flexWrap={"wrap"} gap="20px" p="20px" >
                    {/* <Button onClick={sorting}></Button> */}
                    {dateArr?.map(item => (
                        <Box width={"300px"} h="fit-content" bg="rgb(238,242,236)" textAlign={"left"} p="10px" >
                            <Text> <b> {item.date} </b></Text>
                            <Text>Category: <b> {item.title} </b></Text>
                        </Box>

                    ))}


                </Flex>


</Flex>
</Flex>
  )
}

export default Health