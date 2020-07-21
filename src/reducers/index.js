import { combineReducers } from "redux";
import ReducerWeather from "./reducer_weather";
import ReducerLocation from "./reducer_location";

const rootReducer = combineReducers({
  weather: ReducerWeather,
  location: ReducerLocation,
});

export default rootReducer;
