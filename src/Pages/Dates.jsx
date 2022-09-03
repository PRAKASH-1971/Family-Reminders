import { Box, Image, Flex, Text, Button, Stack } from '@chakra-ui/react'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Datessidebar from "../Components/datessidebar"
import 'react-calendar/dist/Calendar.css';
import { useEffect } from 'react';

const Dates = () => {
    const [value, onChange] = useState(new Date());
    const [chan, setChan] = useState("");
    const [formdata, setFormdata] = useState();
    
    var dateArr = []
    var dateArr = JSON.parse(localStorage.getItem("dateitems")) || []
    const mydate = (value.toLocaleString()).split(",")[0]
    const handleChange = (e) => {
        const inputName = e.target.name;
        // checkbox
        if (e.target.type === 'checkbox') {
            console.log(e.target.checked);
            setFormdata({ ...formdata, [inputName]: e.target.checked });
        } else {
            setFormdata({ ...formdata, [inputName]: e.target.value, "date": mydate });
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dateArr.push(formdata);
        localStorage.setItem("dateitems", JSON.stringify(dateArr));
        console.log(dateArr)
        window.location.reload();
        // localStorage.clear()
    }
    
    const [menu, setMenu] = useState(dateArr)
    console.log(chan);
    
    useEffect(()=>{
        if(chan === "Kids events"){
            const list = dateArr?.filter((item) => item?.selected === "KID_EVENT")
            setMenu([...list])  
        }
        if(chan === "Holidays"){
            const list = dateArr?.filter((item) => item?.selected === "HOLIDAY")
            setMenu([...list])  
        }
        if(chan === "Family Dates"){
            const list = dateArr?.filter((item) => item?.selected === "FAMILY")
            setMenu([...list])  
        }
        if(chan === "Birthdays"){
            const list = dateArr?.filter((item) => item?.selected === "BIRTHDAYS")
            setMenu([...list])  
        }
        if(chan === "Upcoming"){
            const list = dateArr?.filter((item) => item?.selected === "UPCOMING")
            setMenu([...list])  
        }

    },[chan])
    
    console.log("menu",menu)

    return (
        <Flex w="100%" direction={["column", "row", "row"]} >
            <Datessidebar setChan={setChan} />

            <Stack direction={"column"} w="100%">

                <Flex w="80%" mt="25px" h="fit-content" alignItems={"center"} justifyContent="flex-start" p="20px">
                    <Box w="40%">
                        <Calendar onChange={onChange} value={value} />
                    </Box>
                    <Stack direction={"column"} h="200px" w="27%" textAlign="start" justifyContent={"space-between"} >
                        <div className="addHouseContainer" onSubmit={handleSubmit}>
                            <form>
                                <input type="text" style={{ "border": "1px solid black", "width": "300px", "padding": "5px 10px", "borderRadius": "10px", "margin": "10px 0px" }} placeholder='ENTER TITLE' className="title" value={formdata?.title} name="title" required onChange={handleChange} />
                                <br />
                                <input style={{ "border": "1px solid black", "width": "300px", "padding": "5px 10px", "borderRadius": "10px", "marginBottom": "10px" }} value={formdata?.desc} placeholder='ENTER DESCRIPTION' name="desc" type="text" className="desc" required onChange={handleChange} />
                                <br />
                                <input style={{ "border": "1px solid black", "width": "300px", "padding": "5px 10px", "borderRadius": "10px", "marginBottom": "10px" }} value={mydate} placeholder='ENTER DESCRIPTION' name="desc" type="text" className="desc" required onChange={handleChange} />
                                <select name="selected" id="selecttag" onChange={handleChange} className="areaCode">
                                    <option value={formdata?.Category}>Category</option>
                                    <option value={formdata?.HOLIDAY} >HOLIDAY</option>
                                    <option value={formdata?.FAMILY}>FAMILY</option>
                                    <option value={formdata?.KID}>UPCOMING</option>
                                    <option value={formdata?.BIRTHDAY}>BIRTHDAYS</option>
                                    <option value={formdata?.KID_EVENT}>KID_EVENT</option>
                                </select>
                                <Button colorScheme='teal' size='md' type="submit" className="submitBtn" >SUBMIT</Button>
                            </form>
                        </div>
                    </Stack>
                </Flex>


                <Flex w="80%" h="fit-content" flexWrap={"wrap"} gap="20px" p="20px" >
                    {/* <Button onClick={sorting}></Button> */}
                    {menu?.map(item => (
                        <Box width={"300px"} h="fit-content" bg="rgb(238,242,236)" textAlign={"left"} p="10px" >
                            <Text> <b> {item.date} </b></Text>
                            <Text>Category: <b> {item.selected} </b></Text>
                            <Text>Title   : <b> {item.title} </b></Text>
                            <Text>Desc    : <b>  {item.desc}</b> </Text>
                        </Box>

                    ))}


                </Flex>

            </Stack>

        </Flex>
    )
}

export default Dates