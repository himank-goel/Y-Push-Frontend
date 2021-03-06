import React, { Component } from "react";
import Landing from "./Landing";
import Notifcation from "./Notification";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageDisplay: "Landing",
      ip: "",
      list: []
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handlePageChange(confirmation, ip, list) {
    if (confirmation === true) {
      const myIp = ip.split("//")[1].split("/")[0];
      this.setState({
        pageDisplay: "Notifcation",
        ip: myIp,
        list
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
          <Notifcation handleLogOut={this.handleLogOut}  ip={this.state.ip} list={this.state.list} />
        )}
      </div>
    );
  }
}

export default App;
