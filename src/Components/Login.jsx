import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
// import { UserAuth } from "../Context/AuthContext";

const Login = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [submitbtn, setSubmitbtn] = useState(false);
//   const {googleSignIn , user} = UserAuth();
  const navigate = useNavigate();


// //   for google login

//   if(user?.displayName!=="")
//   {
//       navigate('/')
//   }
//   const handleGoogleSignIn = async () => {
//     try {
//         await googleSignIn();

//     } catch (error) {
//         console.log(error)
//     }
// }


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
        alert("Login successfully");
        navigate("/timerapp");
      })
      .catch((err) => {
        setSubmitbtn(false);
        alert("Something went wrong");
        console.log("error:", err.message);
      });
  };
  return (
    <>
     <Box w="70%" h="50px" m="auto" mt="30px" >
        <Heading color="brown">Welcome to MTechZilla</Heading>   
      </Box>
      <br />
      <Box
       boxShadow="5px 5px 2px 1px"
        w="70%"
        h="440px"
        m="auto"
        borderRadius="20px"
        bg="blue.50"
      >
        <br />
        <Heading color="black">User Log-In</Heading>
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
            fontSize="20px"
          >
            Log-In
          </Button>
        </Box>
        <br />
        <Heading fontSize="20px">
          Need an Account ?{" "}
          <Link to="/signup">
            {" "}
            <span style={{ color: "red" }}> SignUp</span>{" "}
          </Link>
        </Heading>
<br />
          {/* continue with google */}

          {/* <Button onClick={handleGoogleSignIn} m="auto" w="40%" bg="teal.300" justifyContent="space-between" border="1px solid black" >
                    <Box mt="4px" ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt='google' width="20px" /></Box>
                    <Box fontWeight="bold" color="black" >Continue with google</Box>
                    <Box><p>  </p></Box>
                </Button> */}
      </Box>
    </>
  );
};

export default Login;
