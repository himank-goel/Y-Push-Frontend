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
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handlePageChange(confirmation) {
    if (confirmation === true) {
      this.setState({
        pageDisplay: "Notifcation"
      });
    }
  }

  handleLogOut(confirmation) {
    if (confirmation === true) {
      this.setState({
        pageDisplay: "Landing"
      });
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.pageDisplay === "Landing" ? (
          <Landing handlePageChange={this.handlePageChange} />
        ) : (
          <Notifcation handleLogOut={this.handleLogOut} />
        )}
      </div>
    );
  }
}

export default App;
