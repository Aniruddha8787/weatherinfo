import { Box, Input, Text, Image } from "@chakra-ui/react";
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
      height="70px"
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
        mt="10px"
        ml="10px"
        color="white"
      >
        <Text fontSize={42} color="#3B185F" as="span">
          Weather
        </Text>
        <Text as="span">info</Text>
      </Box>
      <Box p="10px" mt="10px" mr="90px" border="red solid 1px">
        <Input
          type="text"
          onChange={(e) => setData(e.target.value)}
          h="30px"
          w="350px"
          borderRadius="5px"
          borderStyle="hidden"
        />
        <Input type="submit" onClick={handleSubmit} ml="20px" />
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
