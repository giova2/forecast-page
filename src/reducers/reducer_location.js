import { SET_LOCATION } from "../actions/index";
export default function (
  state = {
    city: "Rosario",
    cityAlt: null,
    country: "Argentina",
    countryCode: "ar",
  },
  action
) {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        city: action.payload.city,
        cityAlt: action.payload.cityAlt,
        country: action.payload.country,
        countryCode: action.payload.countryCode.toLowerCase(),
      };
  }
  return state;
}
