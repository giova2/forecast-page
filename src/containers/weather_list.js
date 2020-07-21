import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const { lon, lat } = cityData.city.coord;
    const temps = cityData.list.map((weather) => weather.main.temp - 273.15);
    const pressures = cityData.list.map((weather) => weather.main.pressure);
    const humidities = cityData.list.map((weather) => weather.main.humidity);
    return (
      <tr key={name}>
        <td>
          <GoogleMap lat={lat} lon={lon} />
        </td>
        <td>
          <Chart data={temps} color="orange" units="C" />
        </td>
        <td>
          <Chart data={pressures} color="cian" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="blue" units="%" />
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>{this.props.lang.city}</th>
            <th>{this.props.lang.temperature} (C)</th>
            <th>{this.props.lang.pressure} (hPa)</th>
            <th>{this.props.lang.humidity} (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map((cityData) => {
            return this.renderWeather(cityData);
          })}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
