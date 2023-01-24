import {
  GET_WHEATHER_DATA_REQUEST,
  GET_WHEATHER_DATA_SUCCESS,
  GET_WHEATHER_DATA_FAILURE,
  GET_FORCAST_DATA_REQUEST,
  GET_FORCAST_DATA_SUCCESS,
  GET_FORCAST_DATA_FAILURE,
} from "./actionType";

const initialState = {
  forcast: [],
  wheatherData: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_WHEATHER_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_WHEATHER_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        wheatherData: payload,
      };
    }

    case GET_WHEATHER_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GET_FORCAST_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_FORCAST_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        forcast: payload,
      };
    }

    case GET_FORCAST_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default:
      return state;
  }
};

export { reducer };
