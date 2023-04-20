import { HStack, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <HStack h="50px" w="100%" bg="teal" justifyContent="space-between" pr="20px">
        <Link to="/">
            <HStack ml="12px">
        <Image w="50px" h="50px" src="https://ci3.googleusercontent.com/mail-sig/AIorK4ysSUQGEDT5NRj1Jsc3cuHwPeV5_W2RLUgO62CZcFP_QasEDUFCHD_uiFya-d5PTL0j5HC3kyk"/>
        <Heading fontSize="30px"   color="white"> MTechZilla</Heading>
        </HStack>
        </Link>
        <br />
        <Link to="/timerapp">
        <Heading fontSize="30px"   color="white"> Timer-App</Heading>
        </Link>
      </HStack>
    </>
  );
};

export default Navbar;
