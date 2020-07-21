import React, { Component } from "react";
import SearchBar from "../containers/search_bar";
import WeatherList from "../containers/weather_list";

import Language from "../lang";

const language = Language();

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar lang={language} />
        <WeatherList lang={language} />
      </div>
    );
  }
}
