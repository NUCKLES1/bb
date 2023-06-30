import React from "react";
import { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("menu-divi");
  };

  const [show, setShow] = useState(false);

  return (
    <div className="Navbar">
      <div className="nav">
        <h2>ToyosiOseni</h2>
        <p onClick={() => setShow(true)}>
          NEW MUSIC <img src="dot.png" alt="" />
        </p>
        <FaBars className="FaBars" onClick={showNavbar} />
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

      <div className="menu-div" id="menu-div" ref={navRef}>
        <div className="nav">
          <h2>ToyosiOseni</h2>
          <p>
            NEW MUSIC <img src="dot.png" alt="" />
          </p>
          <FaBars className="FaBars" onClick={showNavbar} />
        </div>
        <ul>
          <li>
            <Link to="/gallery">
              <button className="link">Gallery
              </button>
              
            </Link>
          </li>
          <li>
            <Link to="/story">
              <button className="link">Story</button>
            </Link>
          </li>
          <li>
            <Link to="/music">
              <button className="link">Music</button>
            </Link>
          </li>
          <li>
            <Link to="/video">
              <button className="link">Video</button>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <button className="link">Contact</button>
            </Link>
          </li>
        </ul>
        <div className="menu-social">
          <img src="facebook.png" alt="" />
          <img src="twitter.png" alt="" />
          <img src="instagram.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
