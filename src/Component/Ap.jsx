import React, { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import axios from "axios";

const API_KEY = "d4e579ab675b8ccb867f00a43babdb06";
const API_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

function WeatherApp() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("London");

  useEffect(() => {
    axios
      .get(`${API_URL}&q=${city}`)
      .then((res) => setWeatherData(res.data))
      .catch((err) => console.log(err));
  }, [city]);

  return (
    <Box maxW="sm" mx="auto" my={4} p={4}>
      <FormControl>
        <FormLabel>City</FormLabel>
        <Input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button mt={4} onClick={() => setWeatherData({})}>
          Get Weather
        </Button>
      </FormControl>
      {weatherData.main && (
        <Box mt={4}>
          <Text fontWeight="bold">Weather in {weatherData.name}</Text>
          <Text>Temperature: {weatherData.main.temp} °C</Text>
          <Text>Humidity: {weatherData.main.humidity} %</Text>
          <Text>Weather: {weatherData.weather[0].description}</Text>
        </Box>
      )}
    </Box>
  );
}

export default WeatherApp;
