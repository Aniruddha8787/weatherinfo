import { Box, Input, Text, Image, InputGroup, Button, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { getForcast, getWheather } from "../Redux/action";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState("Pune");
  let str = data.toLowerCase();
  str = str.charAt(0).toUpperCase() + str.slice(1);
  const handleSubmit = () => {
    dispatch(getWheather(str));
    dispatch(getForcast(str));
  };

  return (
    <Box
      w="90%"
      height="90px"
      bgColor="#98BEDC"
      m="auto"
      borderRadius="14px"
      display="flex"
      justifyContent="space-between"
      p="15px"
      mt="50px"
    >
      <Box
        fontSize={40}
        fontWeight="bold"
        fontFamily="sans-serif"
        ml="10px"
        color="white"
      >
        <Text
          fontSize={42}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          as="span"
        >
          W
        </Text>
        <Text fontSize={42} color="#3B185F" as="span">
          eather
        </Text>
        <Text as="span">info</Text>
      </Box>
      <Box p="10px" mr="90px" >
        <InputGroup size="md">
          <Input
            w="400px"
            onChange={(e)=>setData(e.target.value)}
            pr="4.5rem"
            type={ "text" }
            placeholder="Search for city..."
            bgColor="white"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleSubmit}>
              {"Search"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
      <Box>
        <Image
          w="100%"
          h="100%"
          src="https://cdn.dribbble.com/users/2277649/screenshots/8498294/weather_dribbble_size.gif.gif"
        ></Image>
      </Box>
    </Box>
  );
};

export default Search;
