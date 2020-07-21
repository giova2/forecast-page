import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import getPosition from "./places";
import { fetchWeather } from "../actions/index";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    const { city, cityAlt } = this.props.location;
    this.state = { term: `${!city && !cityAlt ? "" : city ? city : cityAlt}` };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    getPosition();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      const { city, cityAlt } = this.props.location;
      this.setState({
        term: `${!city && !cityAlt ? "" : city ? city : cityAlt}`,
      });
    }
  }

  onInputChange(events) {
    this.setState({ term: events.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term, this.props.location.countryCode);
    this.setState({ term: "" });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="input-group">
            <input
              placeholder={this.props.lang["placeholderSearch"]}
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              className="form-control"
              value={this.state.term}
              onChange={this.onInputChange}
            />

            <div className="input-group-append input-group-button">
              <button type="submit" className="btn btn-outline-secondary">
                {this.props.lang["submit"]}
              </button>
            </div>
          </div>
        </form>
        <div className="text-center m-2">
          {`${
            this.props.location.country
              ? `${this.props.lang["country"]} ${this.props.location.country}`
              : ""
          }`}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

function mapStateToProps({ location }) {
  return { location };
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
