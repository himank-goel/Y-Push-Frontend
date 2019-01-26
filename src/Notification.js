import React, { Component } from "react";
import { ReactComponent as ProfilePic } from "./media/admin.svg";

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifText: "",
      ip: props.ip
    };
    this.handleNotifChange = this.handleNotifChange.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleNotifChange(event) {
    this.setState({
      notifText: event.target.value
    });
  }

  handleLogOut() {
    this.props.handleLogOut(true);
  }
  render() {
    return (
      <div className="outer--main">
        <div className="inner">
          <div className="navbar">
            <div className="logo">Y-Push</div>
            <div className="logout" onClick={this.handleLogOut}>
              Log Out
            </div>
          </div>
          <div className="profile">
            <div className="profile-details">
              <div className="p-pic-container">
                <ProfilePic className="profile-pic" />
              </div>
              <span className="name">John Doe</span>
              <div className="network-details">
                <span>My network IP : </span>
                <span className="ip">{this.state.ip}</span>
              </div>
            </div>
          </div>
          <div className="textarea">
            <textarea
              rows="15"
              cols="100"
              className="text-field"
              placeholder="Write your notification"
              onChange={this.handleNotifChange}
            />
            <button className="send">Send</button>
          </div>
        </div>
        <style jsx="true">
          {`
            .inner {
              background: #131124;
              height: 100vh;
            }
            .navbar {
              background: #131124;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              min-height: 55px;
            }
            .logo,
            .logout {
              font-weight: 900;
              font-size: 40px;
              color: #ffc92a;
              opacity: 1;
              padding: 10px;
              padding-left: 30px;
            }
            .logout {
              cursor: pointer;
              padding-left: 0;
              padding-right: 0;
              font-weight: 200;
              color: #fff;
              font-size: 20px;
              margin-right: 40px;
              padding-bottom: 0;
              margin-bottom: 10px;
              transition: all 0.4s ease-in;
              border-bottom: 1px solid transparent;
            }
            .logout:hover {
              border-color: #fff;
            }
            .profile {
              min-height: 80px;
              background: #f7f7f7;
              display: flex;
              flex-direction: row;
              justify-content: space-around;
            }
            .profile-details {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .p-pic-container {
              display: flex;
              flex-direction: row;
              justify-content: space-around;
            }
            .profile-pic {
              width: 40%;
              height: 40%;
              border-radius: 100px;
              background: #ffbf0045;
              margin-top: -50px;
            }
            .name {
              margin-top: 25px;
              font-weight: 600;
              font-size: 25px;
            }
            .network-details {
              font-weight: 300;
              margin-top: 15px;
              margin-bottom: 10px;
            }
            .ip {
              font-style: italic;
              font-weight: 400;
            }
            .textarea {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .text-field {
              border: none;
              margin-top: 30px;
              border-radius: 4px;
              padding: 10px;
            }
            .send {
              margin-top: 10px;
              border: none;
              box-shadow: none;
              width: 8%;
              height: 40px;
              border-radius: 5px;
              background: #fec933;
              color: #131124;
              font-weight: 600;
              transition: all 0.2s ease-in;
              cursor: pointer;
            }
            .send:hover {
              background: transparent;
              color: #fec933;
              border-style: inset;
              border-color: #fec933;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Notification;
