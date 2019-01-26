import React, { Component } from "react";
import { ReactComponent as Illustration } from "./media/illustration.svg";

class Landing extends Component {
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
                <input type="text" className="username-input" />
              </div>
              <div className="password">
                <span className="label">Password</span>
                <input type="password" className="password-input" />
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
            }
            .top--text {
              font-weight: 900;
              font-size: 50px;
              line-height: 55px;
              display: flex;
              flex-direction: column;
            }
            .logo {
              color: #383ea2;
              opacity: 0.2;
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
            .username, .password {
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
            .username-input, .password-input {
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
          `}
        </style>
      </div>
    );
  }
}

export default Landing;
