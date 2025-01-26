import React, { useState, useRef, useEffect } from "react";
import SignIn from "./components/signIn";
import art_img1 from "./assets/loginBG.jpg";
import artiumhiveLogo from "./assets/applogo.png";
import { Footer } from "./Footer";
const App = () => {
 const targetRef = useRef(null);

  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <>
      <div id="parent-login">
        <div id="first-child">
          <div style={{ width: "60%" }}>
            <img id="logo-img" src={artiumhiveLogo} alt="logo" />
          </div>
          <div style={{ width: "60%" }}>
            <div style={{ width: "60%%" }}>
              <input
                placeholder="Email"
                style={{
                  height: "3em",
                  background: "rgb(255 255 255 / 0%)",
                  border: "0.9px solid rgb(195, 195, 195)",
                  color: "#615e5e",
                  fontWeight: "900",
                  fontFamily: "circular",
                  letterSpacing: " .3px",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  width: "100%",
                }}
              />
            </div>
            <div style={{ width: "60%%" }}>
              <input
                placeholder="Password"
                style={{
                  height: "3em",
                  background: "rgb(255 255 255 / 0%)",
                  border: "0.9px solid rgb(195, 195, 195)",
                  color: "#615e5e",
                  fontWeight: "900",
                  fontFamily: "circular",
                  letterSpacing: " .3px",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  width: "100%",
                }}
                aria-describedby="passwordError"
              />
            </div>
            <div>
              <button
                style={{
                  width: "100%",
                  padding: "18px",
                  fontFamily: "circular",
                  backgroundColor: "rgb(125 121 121)",
                }}
              >
                Log In
              </button>
            </div>
          </div>
        </div>

        <div id="second-child">
          <div id="right-child-2-parent">
            <div id="right-child-2">
              <div>
                <h1 style={{ fontFamily: "'Phonk Contrast DEMO'" }}>
                  We Welcome you to ARTIUM HIVE
                </h1>
              </div>

              <div>
                <h3 style={{ fontFamily: "circular" }}>We are invite only</h3>
              </div>

              <div>
                <h2
                  style={{
                    fontFamily: "circular",
                    fontSize: "17px",
                  }}
                >
                  Follow below steps to be a member at ARTIUM HIVE
                </h2>
                <div>
                  <ul>
                    <li style={{ fontFamily: "circular", fontSize: "14px" }}>
                      Send your best art collection at
                      artiumhiveofficial@gmail.com
                    </li>
                    <li style={{ fontFamily: "circular", fontSize: "14px" }}>
                      Wait for our team to review your collection
                    </li>
                    <li style={{ fontFamily: "circular", fontSize: "14px" }}>
                      If success, we'll guide you for further steps.
                    </li>
                  </ul>
                </div>
              </div>

              <div style={{ fontFamily: "'Phonk Contrast DEMO'" }}>
                Lastly thank you for your interest in art
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={targetRef}
        style={{ width: "100%", transition: "4s ease" }}
      ></div>
      <Footer />

        div className="footer">
      <div className="footer-child1">
        <div className="footer-child1-2">MAYA INCOPRATION</div>
        <div className="footer-child1-1">
          HNO. 303 GANESH GALAXY CITY BUILDISNG AYODHYA BYPASS ROAD BHOPAL
          462041Dist.-BHOPAL
        </div>
      </div>

      <div className="footer-child2">Artium Hive, all rights reserved</div>
    </div>
};

export default App;
