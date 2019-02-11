import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitide: null,
      longitude: null,
      errorMessage: ""
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          latitide: position.coords.latitude,
          longitude: position.coords.longitude
        }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  // componentDidUpdate() {
  //   console.log(
  //     "Component was updated and now shows error or response accordingly"
  //   );
  // }

  render() {
    if (this.state.errorMessage) {
      return (
        <div>
          <h2>Encountered an error: {this.state.errorMessage}</h2>
        </div>
      );
    }
    if (!this.state.errorMessage && !this.state.latitide) {
      return <h1>Loading....</h1>;
    }
    // <h4 style={{ textAlign: "center" }}>
    //        Coords: {this.state.latitide}, {this.state.longitude}
    //      </h4>
    return (
      <div>
        <SeasonDisplay lat={this.state.latitide} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
