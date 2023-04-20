import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { AppContext } from "../Context/AuthContext";
// import { UserAuth } from "../Context/AuthContext";

const Login = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [submitbtn, setSubmitbtn] = useState(false);

  const context=useContext(AppContext)

const {isAuth,HandleAuth}=context
  const navigate = useNavigate();

  const handlesubmit = () => {
    if (!value.email || !value.password) {
      alert("Please Fill all the details");
      return;
    }
    // console.log(value);
    setSubmitbtn(true);

    signInWithEmailAndPassword(auth, value.email, value.password)
      .then((res) => {
        setSubmitbtn(false);
        console.log(res);
       HandleAuth()
       
        alert("Login successfully");
        navigate("/timerapp");
      })
      .catch((err) => {
        setSubmitbtn(false);
        alert("Something went wrong");
        console.log("error:", err.message);
      });
  };
  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  return (
    <>
      <Box w={{sm:"70%",md:"70%",lg:"70%"}} h={{sm:"25px",md:"35px",lg:"50px"}}m="auto" mt="30px">
        <Heading fontSize={{sm:"30px",md:"35px",lg:"40px"}} color="brown">Welcome to MTechZilla</Heading>
      </Box>
      <br />
      <Box
        boxShadow="5px 5px 2px 1px"
        w={{sm:"70%",md:"70%",lg:"70%"}} 
        h="480px"
        m="auto"
        borderRadius="20px"
        bg="blue.50"
      >
        <br />
        <Heading fontSize={{md:"35px",lg:"40px"}} color="black">User Log-In</Heading>
        <br />
        <br />
        <Box w="60%" m="auto">
          <FormControl isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              bgColor="white"
              onChange={(e) =>
                setValue((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Enter Email Address"
            />
          </FormControl>
          <br />
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              bgColor="white"
              onChange={(e) =>
                setValue((prev) => ({ ...prev, password: e.target.value }))
              }
              placeholder="Enter Password"
            />
          </FormControl>
          <br />
          <Button
            onClick={handlesubmit}
            disabled={submitbtn}
            bgColor="teal"
            color="white"
            w="180px"
            fontSize="20px">
            Log-In
          </Button>
        </Box>
        <br />

        <Heading fontSize={{sm:"10px",md:"15px",lg:"20px"}}>
          Need an Account ?
          <Link to="/signup">
            <span style={{ color: "red" }}> SignUp</span>
          </Link>
        </Heading>
        <br />
      </Box>
    </>
  );
};

export default Login;
