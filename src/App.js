import React, { Component } from "react";
import Landing from "./Landing";
import Notifcation from "./Notification";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageDisplay: "Landing"
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(confirmation) {
    if (confirmation === true) {
      this.setState({
        pageDisplay: "Notifcation"
      });
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.pageDisplay !== "Landing" ? (
          <Landing handlePageChange={this.handlePageChange} />
        ) : (
          <Notifcation />
        )}
      </div>
    );
  }
}

export default App;
