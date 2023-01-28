import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Search from "./Search";
import im from "../assets/we.jpg";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import WeatherForecast from "./WeatherForecast";
import HumidityChart from "./HumidityChart";
import PressureChart from "./PressureChart";
import CloudinessChart from "./CloudinessChart";
import bg from "../assets/bg.jpeg";

const Body = () => {
  const data = useSelector((state) => state.wheatherData);

  let date, time, sunset, sunrise;
  if (data && data.sys) {
    date = new Date(data.dt * 1000).toDateString();
    time = new Date(data.dt * 1000).toLocaleTimeString();
    sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
  }
  return (
    <Box
      bgImage={bg}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      m="0px"
      w="100%"
    >
      <Search />
      <Box m="auto" mt="30px" w="90%" color="white">
        {Object.keys(data).length === 0 && (
          <Box
            display="flex"
            justifyContent="space-around"
            minH={"600px"}
            mt="50px"
          >
            <Box w="500px" alignItems="center">
              <Text mt="90px" fontSize={50} fontWeight={700} color="red.500">
                Enter City Name
              </Text>
              <Text fontSize={50} fontWeight={700}>
                OR
              </Text>
              <Text  fontSize={50} fontWeight={700} color="red.500">
                Give Location Access
              </Text>
            </Box>
            <Box w="500px" h="400px">
              <Image w="100%" h="100%" src={im}></Image>
            </Box>
          </Box>
        )}
        {Object.keys(data).length > 0 && (
          <Box w="100%" minHeight={"500px"}>
            <Tabs variant="solid-rounded" colorScheme="twitter">
              <TabList m="auto" justifyContent="center" color="white">
                <Tab p="12px 25px" borderRadius="12px" color={"white"}>
                  Current Stats
                </Tab>
                <Tab p="12px 25px" borderRadius="12px" color={"white"}>
                  Forecast
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Box
                    fontSize={"17px"}
                    fontWeight={500}
                    m="auto"
                    w="75%"
                    h="350px"
                    display={"flex"}
                    p="15px"
                    borderRadius={"15px"}
                    // boxShadow={"10px 10px 10px rgba(30,30,30,0.5)"}
                    boxShadow="dark-lg"
                    backdropFilter={"blur(10px)"}
                  >
                    <Box w="38%" p="5px" textAlign={"left"}>
                      <Box mt="15px">
                        <Text
                          fontSize={"50px"}
                          fontWeight="bold"
                          p="10px"
                          as={"span"}
                        >
                          {data.name},
                        </Text>
                        <Text as={"span"}>{data.sys.country}</Text>
                      </Box>
                      <Box mt="15px">
                        <Text as="span" fontSize={"15px"}>
                          current forecast :{" "}
                        </Text>
                        <Text as="span" fontSize={"25px"} fontWeight="bold">
                          {data.weather[0].main}
                        </Text>
                      </Box>
                      <Box mt="15px">
                        <Text as="span" fontSize={"15px"}>
                          weather forecast for today is{" "}
                        </Text>
                        <Text as="span">{data.weather[0].description}</Text>
                      </Box>
                      <Box mt="15px">
                        <Text as="span" fontSize={"15px"}>
                          Cloudiness :{" "}
                        </Text>
                        <Text as="span">{data.clouds.all}%</Text>
                      </Box>
                    </Box>
                    <Box w="30%" p="5px" textAlign={"left"}>
                      <Box mt="15px">
                        <Text as="span" fontSize={"15px"}>
                          Avrage Temp. :{" "}
                        </Text>
                        <Text as="span">{data.main.temp}°C</Text>
                      </Box>
                      <Box mt="15px">
                        <Text as="span" fontSize={"15px"}>
                          Minimum Temp. :{" "}
                        </Text>
                        <Text as="span">{data.main.temp_min}°C</Text>
                      </Box>
                      <Box mt="15px">
                        <Text as="span" fontSize={"15px"}>
                          Maximun Temp. :{" "}
                        </Text>
                        <Text as="span">{data.main.temp_max}°C</Text>
                      </Box>
                      <Box mt="15px">
                        <Text as="span" fontSize={"15px"}>
                          Humidity :{" "}
                        </Text>
                        <Text as="span">{data.main.humidity} %</Text>
                      </Box>
                      <Box mt="15px">
                        <Text as="span" fontSize={"15px"}>
                          Atm Pressure :{" "}
                        </Text>
                        <Text as="span">{data.main.pressure} hPa</Text>
                      </Box>
                    </Box>
                    <Box w="30%" p="5px" textAlign={"left"}>
                      <Box mt="15px">
                        <Text as="span" fontSize={"15px"}>
                          Date :{" "}
                        </Text>
                        <Text as="span">{date}</Text>
                      </Box>
                      <Box mt="15px">
                        <Text as="span" fontSize={"15px"}>
                          Time :{" "}
                        </Text>
                        <Text as="span">{time}</Text>
                      </Box>
                      <Box mt="15px">
                        <Text as="span" fontSize={"15px"}>
                          SunRise :{" "}
                        </Text>
                        <Text as="span">{sunrise} </Text>
                      </Box>
                      <Box mt="15px">
                        <Text as="span" fontSize={"15px"}>
                          SunSet :{" "}
                        </Text>
                        <Text as="span">{sunset} </Text>
                      </Box>
                    </Box>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box
                    p="15px"
                    borderRadius={"15px"}
                    boxShadow="dark-lg"
                    backdropFilter={"blur(15px)"}
                  >
                    <Tabs variant="solid-rounded" colorScheme="green">
                      <TabList>
                        <Tab color={"white"}>Temperature °C</Tab>
                        <Tab color={"white"}>Humidity %</Tab>
                        <Tab color={"white"}>Pressure hPa</Tab>
                        <Tab color={"white"}>Cloudiness %</Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel>
                          <WeatherForecast />
                        </TabPanel>
                        <TabPanel>
                          <HumidityChart />
                        </TabPanel>
                        <TabPanel>
                          <PressureChart />
                        </TabPanel>
                        <TabPanel>
                          <CloudinessChart />
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </Box>
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
