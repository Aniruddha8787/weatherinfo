import { Box, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import Search from './Search'
import im from "../assets/we.jpg";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const Body = () => {
  const data = useSelector((state) => state.wheatherData);
  
  console.log("ok", data);
  
  return (
    <Box>
      <Search />
      <Box m="auto" my="30px" w="90%" color="white">
        {Object.keys(data).length === 0 && (
          <Box
            border="solid red 1px"
            display="flex"
            justifyContent="space-around"
          >
            <Box w="500px" h="400px" alignItems="center">
              <Text
                mt="90px"
                fontSize={50}
                fontWeight={700}
                color="red.500"
                border="solid red 1px"
              >
                Please Enter your city name
              </Text>
            </Box>
            <Box w="500px" h="400px">
              <Image w="100%" h="100%" src={im}></Image>
            </Box>
          </Box>
        )}
        {Object.keys(data).length > 0 && (
          <Box border="solid red 1px" w="100%">
            <Tabs variant="solid-rounded" colorScheme="green">
              <TabList  m="auto"  justifyContent="center">
                <Tab p="20px">Tab 1</Tab>
                <Tab>Tab 2</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>one!</p>
                  <Box
                    w="500px"
                    h="300px"
                    border="solid red 1px"
                    bgColor="#86A3B8"
                  >
                    <VStack>
                      <Box>
                        <Text as="span">{data.name}</Text>
                        <Text as="span">{data.weather[0].main}</Text>
                        <Text>{data.weather[0].description}</Text>
                      </Box>
                      <Box>
                        <Text as="span">{data.main.temp}</Text>
                        <Text as="span">{data.main.temp_min}</Text>
                        <Text as="span">{data.main.temp_max}</Text>
                      </Box>
                    </VStack>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Body