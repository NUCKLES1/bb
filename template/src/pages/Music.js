import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

const Music = () => {
  return (
    <div className='Music-div'>
        <Navbar />
      <div className="block5">
        <div className="box1">
          <p>Enjoy the Fullness of Toyosi Oseni</p>
          <div className="socialFlex">
            <div className="socialDiv">
              <img src="spotify.png" alt="" />
              <div className="socialTexts">
                <p>
                  Listen on <h2>Spotify</h2>
                </p>
              </div>
            </div>
            <div className="socialDiv">
              <img src="youtube.png" alt="" />
              <div className="socialTexts">
                <p>
                  Listen on <h2>Spotify</h2>
                </p>
              </div>
            </div>
          </div>
          <div className="socialFlex">
            <div className="socialDiv">
              <img src="spotify.png" alt="" />
              <div className="socialTexts">
                <p>
                  Listen on <h2>Spotify</h2>
                </p>
              </div>
            </div>
            <div className="socialDiv">
              <img src="spotify.png" alt="" />
              <div className="socialTexts">
                <p>
                  Listen on <h2>Spotify</h2>
                </p>
              </div>
            </div>
          </div>
          <div className="socialFlex">
            <div className="socialDiv">
              <img src="spotify.png" alt="" />
              <div className="socialTexts">
                <p>
                  Listen on <h2>Spotify</h2>
                </p>
              </div>
            </div>
            <div className="socialDiv">
              <img src="spotify.png" alt="" />
              <div className="socialTexts">
                <p>
                  Listen on <h2>Spotify</h2>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="player">
          <img src="frame 9.png" alt="" />
        </div>
      </div>
      <div className="block6">
        <div className="blockDiv">
          <img src="Mask group 1.png" alt="" />
          <div className="flexBar">
            <img src="Mask group 2.png" alt="" />
            <div className="emailSection">
              <h2>Join The Waiting List</h2>
              <p>Be first to know when there is a new release.</p>
              <div className="form">
                <input type="text" placeholder="Your Email Address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          <img className="img" src="Mask group3.png" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Music