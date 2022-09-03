import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Homesidebar from '../Components/Homesidebar'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Home = () => {
    const [formdata, setFormdata] = useState("Electricity");
    const [tv, setTv] = useState("Wifi");
    const [tab, setTab] = useState("Bills");
    const [value, onChange] = useState(new Date());
    const mydate = (value.toLocaleString()).split(",")[0]

    const handleChange = (e) => {
        setFormdata(e.target.value)
    };
    console.log(tab)
    const handleChangetv = (e) => {
        setTv(e.target.value)
    };

    return (
        <Flex w="100%" >
            <Homesidebar setTab={setTab} />

            {tab === "Bills" &&
                <Flex direction={"column"} width={"fit-content"} m="auto" mt="20px" flexWrap={"wrap"} gap="20px" >
<Box w="60%" display={"flex"} direction="row" justifyContent={"space-between"}>
                        <Calendar onChange={onChange} value={value} />
    <Text fontSize={"2xl"} >Selected Date : <b> {mydate}</b></Text>
                    </Box>
                    <select name="selected" id="selecttag" onChange={handleChange} className="areaCode" style={{ "width": "300px", "height": "35px", "border": "2px solid black", "borderRadius": "10px" }}>
                        <option value={"Electricity"}><b>  Pay Electricity Bill   </b></option>
                        <option value={"Water"}><b>   Pay Water Bill   </b></option>
                        <option value={"Gas"}><b>   Pay Gas Bill </b></option>
                    </select>

                    {formdata === "Electricity" && <iframe style={{ "width": "1200px", "height": "80vh", "overflowY": "scroll" }} src="https://www.bestundertaking.net/" title="W3Schools Free Online Web Tutorials">
                    </iframe>}

                    {formdata === "Water" &&
                        <iframe style={{ "width": "1200px", "height": "80vh", "overflowY": "scroll" }} src="https://www.nmmc.gov.in/water-bill" title="W3Schools Free Online Web Tutorials">
                        </iframe>}
                    {formdata === "Gas" &&
                        <iframe style={{ "width": "1200px", "height": "80vh", "overflowY": "scroll" }} src="https://mngl.in/pay-bill" title="W3Schools Free Online Web Tutorials">
                        </iframe>}
                </Flex>
            }
            {tab === "Entertainment" &&
                <Flex direction={"column"} width={"fit-content"} m="auto" mt="20px" flexWrap={"wrap"} gap="20px" >
<Box w="60%" display={"flex"} direction="row" justifyContent={"space-between"}>
                        <Calendar onChange={onChange} value={value} />
    <Text fontSize={"2xl"} >Selected Date : <b> {mydate}</b></Text>
                    </Box>
                    <select name="selected" id="selecttag" onChange={handleChangetv} className="areaCode" style={{ "width": "300px", "height": "35px", "border": "2px solid black", "borderRadius": "10px" }}>
                        <option value={"Wifi"}><b>   Pay Wifi Bill </b></option>
                        <option value={"d2h"}><b>  Pay Dish Bill   </b></option>
                        <option value={"Cabel"}><b>   Pay Cabel TV Bill   </b></option>
                    </select>

                    {tv=== "Wifi" && <iframe style={{ "width": "1200px", "height": "80vh", "overflowY": "scroll" }} src="https://www.billavenue.com/upcomingBillers/Accept-Vasai-Cable-Payments-on-Bharat-Bill-Payment-System-of-BillAvenue.jsp" title="W3Schools Free Online Web Tutorials">
                    </iframe>}

                    {tv=== "d2h" &&
                        <iframe style={{ "width": "1200px", "height": "80vh", "overflowY": "scroll" }} src="https://getbillsmart.com/dish-bill-pay/" title="W3Schools Free Online Web Tutorials">
                        </iframe>}
                    {tv=== "Cabel" &&
                        <iframe style={{ "width": "1200px", "height": "80vh", "overflowY": "scroll" }} src="https://mycabletv.tv/" title="W3Schools Free Online Web Tutorials">
                        </iframe>}
                </Flex>
            }
            {tab === "Rent" &&
                <Flex direction={"column"} width={"fit-content"} m="auto" mt="20px" flexWrap={"wrap"} gap="20px" >
                    <Box w="60%" display={"flex"} direction="row" justifyContent={"space-between"}>
                        <Calendar onChange={onChange} value={value} />
    <Text fontSize={"2xl"} >Selected Date : <b> {mydate}</b></Text>
                    </Box>
                 <iframe style={{ "width": "1200px", "height": "100vh", "overflowY": "scroll" }} src="https://www.nobroker.in/pay-property-rent-online?gclid=Cj0KCQjw08aYBhDlARIsAA_gb0e3nWx6kHd7Oz_KOMPZPa-97nf3JP6afQT1i9TVH0yKwbgRUNT63LQaAl7qEALw_wcB" title="W3Schools Free Online Web Tutorials">
                    </iframe>
                </Flex>
            }
            {tab === "Tax" &&
                <Flex direction={"column"} width={"fit-content"} m="auto" mt="20px" flexWrap={"wrap"} gap="20px" >
                 <iframe style={{ "width": "1200px", "height": "100vh", "overflowY": "scroll" }} src="https://onlineservices.tin.egov-nsdl.com/etaxnew/tdsnontds.jsp" title="W3Schools Free Online Web Tutorials">
                    </iframe>
                </Flex>
            }
            {tab === "Groceries" &&
                <Flex direction={"column"} width={"fit-content"} m="auto" mt="20px" flexWrap={"wrap"} gap="20px" >
                 <iframe style={{ "width": "1200px", "height": "100vh", "overflowY": "scroll" }} src="https://meghdootmarketing.com/" title="W3Schools Free Online Web Tutorials">
                    </iframe>
                </Flex>
            }
            

        </Flex>
    )
}

export default Home