import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input
} from "@chakra-ui/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Signup = () => {
  const [value,setValue]=useState({
    name:"",
    email:"",
    password:"",
  });

  const[submitbtn,setSubmitbtn]=useState(false)
  const navigate=useNavigate()
  const handlesubmit=()=>{
    if(!value.name ||!value.email || !value.password)
    {
      alert("Please Fill all the details")
      return;
    }
    // console.log(value);
    setSubmitbtn(true)

    createUserWithEmailAndPassword(auth,value.email,value.password)

    .then((res)=>{
      setSubmitbtn(false)
      console.log(res)
      alert("Signup successfully")
      navigate("/")
    })
   .catch((err)=>{
    setSubmitbtn(false)
    console.log("error:",err.message)})
  }
  return (
    <div>
      <Box
        boxShadow="5px 5px 4px 4px"
      
        w={{sm:"70%",md:"70%",lg:"70%"}} h={{sm:"320px",md:"550px",lg:"530px"}}
        m="auto"
        mt="50px"
        borderRadius="20px"
        bg="blue.50"
      >
        <br />

        <Heading color="maroon">SignUp Please</Heading>
        <br />
        <br />
        <Box w="60%" m="auto">
        <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input bgColor="white"  onChange={(e)=>setValue((prev)=>({...prev,name:e.target.value}))} placeholder="Enter Username" />
          </FormControl>
          <br />
          <FormControl isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input bgColor="white" type="email"  onChange={(e)=>setValue((prev)=>({...prev,email:e.target.value}))} placeholder="Enter Email Address" />
          </FormControl>
          <br />
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input bgColor="white" type="password"  onChange={(e)=>setValue((prev)=>({...prev,password:e.target.value}))} placeholder="Enter Password" />
          </FormControl>
          <br />        
          <br />
          <Button onClick={handlesubmit} disabled={submitbtn} bgColor="teal" color="white" w="180px" fontSize="20px">
            SignUp
          </Button>
        </Box>
        
        <br />
        <Heading fontSize={{sm:"10px",md:"15px",lg:"20px"}}>Already have an Acocount ? <Link to="/"> <span style={{"color":"red"}}> LogIn</span> </Link></Heading>
      </Box>
    </div>
  )
}

export default Signup