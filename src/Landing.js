import React, { Component } from "react";
import { ReactComponent as Illustration } from "./media/illustration.svg";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  async handleSignIn() {
    let ipAddr;
    const data = {
      username: this.state.username,
      password: this.state.password
    };
    let response = fetch("https://ypush.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });
    response.then(data => {
      if (data.status === 200) {
        data.json().then(stream => {
          ipAddr = stream.IP;
          fetch(ipAddr)
            .then(response => {
              return response.json();
            })
            .then(myJson => {
              this.props.handlePageChange(true, ipAddr, myJson);
            });
        });
      } else {
        alert("Invalid username or password");
      }
    });
    // if (response.status === 200) {
    // 	console.log(response);
    //   this.props.handlePageChange(true);
    // } else {
    // 	alert("Invalid username or password");
    // }
  }

  render() {
    return (
      <div className="outer">
        <div className="main">
          <div className="left--main">
            <div className="left--inner">
              <div className="top--text">
                <span className="logo">Y-Push</span>
                <span className="caption">
                  Revolution in Push Notifications
                </span>
                <div className="points">
                  <span>Seamless Integration</span>
                  <span>●</span>
                  <span>Fast and Secure</span>
                  <span>●</span>
                  <span>Free of Cost</span>
                </div>
              </div>
              <div className="illustration-box">
                <Illustration className="illustration" />
              </div>
            </div>
          </div>
          <div className="right--main">
            <div className="right-content">
              <div className="header--right">
                <span className="hello">Hello!</span>
                <span className="welcome-text">
                  Welcome to Y-Push! Sign in with your admin credentials to get
                  access to high speed push notification over your router.
                </span>
              </div>
              <div className="login-form">
                <div className="username">
                  <span className="label">Username</span>
                  <input
                    type="text"
                    onChange={this.handleUsername}
                    className="username-input"
                  />
                </div>
                <div className="password">
                  <span className="label">Password</span>
                  <input
                    type="password"
                    onChange={this.handlePassword}
                    className="password-input"
                  />
                </div>
                <div className="btn-wrapper">
                  <button className="login" onClick={this.handleSignIn}>
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx="true">
          {`
            .main {
              display: flex;
              flex-direction: row;
              justify-content: space-around;
            }
            .left--main {
              width: 100%;
              padding: 3%;
              background: linear-gradient(135deg, #1c183a 0%, #131124 33%);
              font-family: "Hind Siliguri", sans-serif;
            }
            .right--main {
              width: 100%;
              padding: 3%;
              font-family: "Hind Siliguri", sans-serif;
              display: flex;
              align-items: center;
            }
            .right-content {
              margin-top: -215px;
            }
            .top--text {
              font-weight: 900;
              font-size: 50px;
              line-height: 55px;
              display: flex;
              flex-direction: column;
            }
            .logo {
              color: #fec933;
              margin-bottom: 10px;
            }
            .caption {
              color: #fff;
            }
            .points {
              display: flex;
              font-size: 20px;
              font-weight: 400;
              line-height: 25px;
              color: #f1cc5e;
              margin-top: 5px;
              justify-content: space-between;
              padding-right: 240px;
              font-variant: all-small-caps;
            }
            .illustration-box {
              display: flex;
              justify-content: space-around;
            }
            .illustration {
              width: 70%;
              height: 70%;
              margin-top: 101px;
            }
            .header--right {
              display: flex;
              flex-direction: column;
            }
            .hello {
              font-weight: 900;
              font-size: 50px;
              color: #131124;
            }
            .welcome-text {
              font-weight: 400;
              color: #9e9e9e;
            }
            .username,
            .password {
              margin-top: 30px;
              display: flex;
              flex-direction: column;
              max-width: 40%;
            }
            .password {
              margin-top: 15px;
            }
            .label {
              color: #7d7d7d;
            }
            .username-input,
            .password-input {
              height: 25px;
              margin-top: 7px;
              border-radius: 5px;
              box-shadow: none;
              border: solid 1px #9e9e9e;
              padding: 10px;
              transition: all 0.5s;
            }
            .username-input:focus {
              outline: none;
              border: solid 1px #000;
            }
            .password-input:focus {
              outline: none;
              border: solid 1px #000;
            }
            .btn-wrapper {
              margin-top: 20px;
              display: flex;
              justify-content: flex-start;
              max-width: 40%;
            }
            .login {
              border: none;
              box-shadow: none;
              width: 40%;
              height: 40px;
              border-radius: 5px;
              background: #131124;
              color: #fff;
              font-weight: 600;
              transition: all 0.2s ease-in;
              cursor: pointer;
            }
            .login:hover {
              background: #fff;
              color: #131124;
              border-style: inset;
              border-color: #131124;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Landing;
