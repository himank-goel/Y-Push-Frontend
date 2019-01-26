import React, { Component } from "react";
import {ReactComponent as Illustration} from "./media/illustration.svg";

class Landing extends Component {
  render() {
    return (
      <div className="outer">
        <div className="main">
          <div className="left--main">
            <div className="left--inner">
                <div className="top--text">
                    <span className="logo">Y-Push</span>
                    <span className="caption">Revolution in Push Notifications</span>
                    <div className="points">
                        <span>Seamless Integration</span>
                        <span>●</span>
                        <span>Fast and Secure</span>
                        <span>●</span>
                        <span>Free of Cost</span>
                    </div>
                </div>
                <div className="illustration-box">
                    <Illustration className="illustration"/>
                </div>
            </div>
          </div>
          <div className="right--main">Right</div>
        </div>
        <style jsx>
        {`
            .main {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }
            .left--main {
                width: 100%;
                padding: 3%;
                background: linear-gradient(135deg, #1C183A 0%, #131124 33%);
                font-family: 'Hind Siliguri', sans-serif;
            } 
            .right--main {
                width: 100%;
                padding: 3%;
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
        `}
        </style>
      </div>
    );
  }
}

export default Landing;
