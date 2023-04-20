import { Box, Button, Heading, HStack, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    return () => {
      clearInterval(ref.current);
    };
  }, []);

  const handleStart = () => {
    ref.current = setInterval(() => {
      //   console.log(time);
      setTime((time) => {
        if (time == 15 * 60) {
          handlePauseResume();
          handleNewStart();
          return 15 * 60;
        } else {
          return time + 1;
        }
      });
      // }
    }, 10);
  };

  const handleNewStart = () => {
    ref.current = setInterval(() => {
      console.log(time);
      setStartTime((time) => {
        if (time == 2 * 60) {
          handlePauseResume();
          handleReset();
          handleStart();
          return 0;
        } else {
          return time + 1;
        }
      });
    }, 10);
  };

  const handlePauseResume = () => {
    clearInterval(ref.current);
  };

  const handleReset = () => {
    setTime(0);
    clearInterval(ref.current);
  };

  return (
    <>
      <Box m="auto" mt="50px" textAlign="center">
        <Heading>Timer App</Heading>

        <Text color="red" display={startTime ? "block" : "none"}>
          {" "}
          {("0" + Math.floor((startTime / 60) % 60)).slice(-2)}:
          {("0" + Math.floor(startTime % 60)).slice(-2)}
        </Text>

        <br />
        <Text fontSize="25px">
          {" "}
          {("0" + Math.floor((time / 60) % 60)).slice(-2)}:
          {("0" + Math.floor(time % 60)).slice(-2)}
        </Text>
        <br />
        <HStack m="auto" w="30%" justifyContent="space-around">
          <Button colorScheme="orange" onClick={handleStart}>
            Start
          </Button>
          <Button colorScheme="orange" onClick={handlePauseResume}>
            Pause
          </Button>
          <Button colorScheme="orange" onClick={handleReset}>
            Reset
          </Button>
        </HStack>
      </Box>
    </>
  );
};

export default Timer;
