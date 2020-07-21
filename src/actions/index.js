import axios from "axios";

export const SET_LOCATION = "SET_LOCATION";
export const FETCH_WEATHER = "FETCH_WEATHER";
export const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${process.env.REACT_APP_API_KEY}`;

export const fetchWeather = (city, countryCode) => async (dispatch) => {
  const url = `${ROOT_URL}&q=${city},${countryCode ? countryCode : "ar"}`;
  const response = await axios.get(url);

  dispatch({
    type: FETCH_WEATHER,
    payload: response,
  });
};

export const setLocation = (data) => {
  return {
    type: SET_LOCATION,
    payload: data,
  };
};
