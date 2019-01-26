import React, { Component } from "react";

class Notification extends Component {
  render() {
    return (
      <div className="outer--main">
        <div className="inner">
          <div className="navbar">
            <div className="logo">Y-Push</div>
            <div className="logout">Log Out</div>
          </div>
        </div>
        <style jsx="true">
          {`
            .navbar {
              background: #131124;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
            }
            .logo,
            .logout {
              font-weight: 900;
              font-size: 50px;
              color: #f1cc5e;
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
              font-size: 25px;
              margin-right: 40px;
              padding-bottom: 0;
              margin-bottom: 10px;
              transition: all 0.4s ease-in;
              border-bottom: 1px solid transparent;
            }
            .logout:hover {
              border-color: #fff;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Notification;
