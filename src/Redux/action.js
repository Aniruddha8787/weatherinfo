import {
  GET_WHEATHER_DATA_REQUEST,
  GET_WHEATHER_DATA_SUCCESS,
  GET_WHEATHER_DATA_FAILURE,
  GET_FORCAST_DATA_REQUEST,
  GET_FORCAST_DATA_SUCCESS,
  GET_FORCAST_DATA_FAILURE,
} from "./actionType";
import axios from "axios";

const getWheather = (value) => (dispatch) => {
  dispatch({ type: GET_WHEATHER_DATA_REQUEST });

  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${process.env.REACT_APP_API}&units=metric`
    )
    .then((res) => {
      return dispatch({
        type: GET_WHEATHER_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_WHEATHER_DATA_FAILURE });
      console.log(err);
      alert(err.response.data.message);
    });
};


const getForcast = (value) => (dispatch) => {
  dispatch({ type: GET_FORCAST_DATA_REQUEST });

  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast/?q=${value}&cnt=5&appid=${process.env.REACT_APP_API}&units=metric`
    )
    .then((res) => {
      return dispatch({
        type: GET_FORCAST_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_FORCAST_DATA_FAILURE });
      console.log(err);
    });
};










const getWheatherLoc = (payload) => (dispatch) => {
  dispatch({ type: GET_WHEATHER_DATA_REQUEST });
  let lat = payload.lat;
  const lon = payload.lon;

  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API}&units=metric`
    )
    .then((res) => {
      return dispatch({
        type: GET_WHEATHER_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_WHEATHER_DATA_FAILURE });
      console.log(err);
      alert(err.response.data.message);
    });
};

const getForcastLoc = (payload) => (dispatch) => {
  dispatch({ type: GET_FORCAST_DATA_REQUEST });
let lat = payload.lat;
const lon = payload.lon;
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&cnt=5&appid=${process.env.REACT_APP_API}&units=metric`
    )
    .then((res) => {
      return dispatch({
        type: GET_FORCAST_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_FORCAST_DATA_FAILURE });
      console.log(err);
    });
};
export { getWheather, getForcast, getWheatherLoc, getForcastLoc };
