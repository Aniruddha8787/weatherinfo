import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Search from "./Search";
import im from "../assets/we.jpg";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import WeatherForecast from "./WeatherForecast";

const Body = () => {
  const data = useSelector((state) => state.wheatherData);
  

  let date, time;
  if (data) {
    // const sunset = data.sys.sunset;
    let unix = data.dt;
    // sunr = data.sys.sunrise;
    date = new Date(unix * 1000).toDateString();
    time = new Date(unix * 1000).toLocaleTimeString();
    // SR = new Date(sunrise * 1000).toLocaleTimeString();
    // SS = new Date(sunset * 1000).toLocaleTimeString();
  }
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
            <Tabs variant="solid-rounded" colorScheme="twitter">
              <TabList m="auto" justifyContent="center">
                <Tab p="12px 25px" borderRadius="12px">
                  Current Stats
                </Tab>
                <Tab p="12px 25px" borderRadius="12px">
                  5 days Forecast
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Box
                    m="auto"
                    w="70%"
                    h="300px"
                    border="solid red 1px"
                    bgColor="#86A3B8"
                    display={"flex"}
                  >
                    <Box w="300px">
                      <Box>
                        <Text
                          border="solid red 1px"
                          fontSize={"50px"}
                          fontWeight="bold"
                          p="10px"
                        >
                          {data.name}
                        </Text>
                      </Box>
                      <Box>
                        <Text as="span">current forecast : </Text>
                        <Text as="span" fontSize={"25px"} fontWeight="bold">
                          {data.weather[0].main}
                        </Text>
                      </Box>
                      <Box>
                        <Text as="span">weather forecast for today is </Text>
                        <Text as="span">{data.weather[0].description}</Text>
                      </Box>
                      <Box>
                        <Text as="span">Cloudiness : </Text>
                        <Text as="span">{data.clouds.all}%</Text>
                      </Box>
                      <Box>
                        <Text as="span">Date : </Text>
                        <Text as="span">{date}</Text>
                      </Box>
                      <Box>
                        <Text as="span">Time : </Text>
                        <Text as="span">{time}</Text>
                      </Box>
                    </Box>
                    <Box w="300px">
                      <Box fontSize={"25px"} fontWeight="bold">
                        Todays Temperature
                      </Box>
                      <Box>
                        <Text as="span">Avrage Temp. : </Text>
                        <Text as="span">{data.main.temp}°C</Text>
                      </Box>
                      <Box>
                        <Text as="span">Minimum Temp. : </Text>
                        <Text as="span">{data.main.temp_min}°C</Text>
                      </Box>
                      <Box>
                        <Text as="span">Maximun Temp. : </Text>
                        <Text as="span">{data.main.temp_max}°C</Text>
                      </Box>
                      <Box>
                        <Text as="span">Humidity : </Text>
                        <Text as="span">{data.main.humidity} %</Text>
                      </Box>
                      <Box>
                        <Text as="span">SunRise : </Text>
                        <Text as="span">{} </Text>
                      </Box>
                      <Box>
                        <Text as="span">SunSet : </Text>
                        <Text as="span">{} </Text>
                      </Box>
                    </Box>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <WeatherForecast/>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Body;
