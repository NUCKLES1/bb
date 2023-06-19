import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  return (
    <div className="Navbar">
      <div className="nav">
        <h2>ToyosiOseni</h2>
        <p onClick={() => setShow(true)}>NEW MUSIC</p>
        <FaBars onClick={() => setShow1(true)} className="FaBars" />
      </div>
      {show ? (
        <div className="popup">
          <FaTimes className="x" onClick={() => setShow(false)} />
          <div className="popupDiv">
            <div className="section1">
              <img src="pop-image.png" alt="" />
              <h2>Join The Waiting List</h2>
              <p>Be first to know when there is a new release.</p>
              <div className="popupForm">
                <input type="text" placeholder="Your Email Address" />
                <button>Subscribe</button>
              </div>
            </div>

            <div className="section2">
              <div className="list">
                <div className="listFlex">
                  <img src="mini.png" alt="" />
                  <div>
                    <h4>I Love Grace</h4>
                    <p>Toyosi Oseni</p>
                  </div>
                </div>
                <p>Out Now</p>
              </div>
              <div className="list">
                <div className="listFlex">
                  <img src="mini.png" alt="" />
                  <div>
                    <h4>I Love Grace</h4>
                    <p>Toyosi Oseni</p>
                  </div>
                </div>
                <p>Coming Soon...</p>
              </div>
              <div className="list">
                <div className="listFlex">
                  <img src="mini.png" alt="" />
                  <div>
                    <h4>I Love Grace</h4>
                    <p>Toyosi Oseni</p>
                  </div>
                </div>
                <p>Coming Soon...</p>
              </div>
              <div className="list">
                <div className="listFlex">
                  <img src="mini.png" alt="" />
                  <div>
                    <h4>I Love Grace</h4>
                    <p>Toyosi Oseni</p>
                  </div>
                </div>
                <p>Coming Soon...</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {show1 ? (
        <div className="menu-div">
          <div className="nav">
            <h2>ToyosiOseni</h2>
            <p onClick={() => setShow(true)}>NEW MUSIC</p>
            <FaBars onClick={() => setShow1(false)} className="FaBars" />
          </div>
          <ul>
            <li>Gallery</li>
            <li>Story</li>
            <li>Music</li>
            <li>Video</li>
            <li>Contact</li>
          </ul>
          <div className="menu-social">
            <img src="facebook.png" alt="" />
            <img src="twitter.png" alt="" />
            <img src="instagram.png" alt="" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
