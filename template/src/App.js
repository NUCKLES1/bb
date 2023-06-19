import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import data from "./TemplateData.json";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

function App() {
  return (
    <div className="App">
      <div className="block1">
        <Navbar />
      </div>
      <div className="block2">
        <h3>TOYOSI OSENI</h3>
        <div className="text">
          <p>Gospel Artist</p>
          <ul>
            <li>Song Writter</li>
            <li>Musician</li>
          </ul>
        </div>
        <div className="slide">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".next-button",
              prevEl: ".prev-button",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            {data.map((val) => {
              return (
                <SwiperSlide key={val.id}>
                  <img src={val.image} alt="" />
                  <p>{val.name}</p>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="control">
            <div className="swiper-controller">
              <div className="prev-button">
                <AiOutlineLeft />
              </div>

              <div className="next-button">
                <AiOutlineRight />
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="block3">
        <img src="musician.png" alt="" />
        <h1>
          He Called,
          <br /> She picked.
        </h1>
      </div>
      <div className="block4">
        <p>
          Songwriter. She Ministers both with the Pure Streams and as an
          independent artist with Glory Music. Those that know Toyosi know not
          to be fooled by her goofiness, or her small frame - she pipes down a
          weight that can only be from Heaven, and leaves a trail of results
          that can only be of God. She loves God, and as a result, is passionate
          for the souls He loves also.
        </p>
      </div>
      <div className="Holder">
        <div className="holder1">
          <img className="img1" src="image.png" alt="" />
          <img className="img2" src="image1.png" alt="" />
        </div>
        <div className="holder2">
          <img className="img3" src="image2.png" alt="" />
          <img className="img4" src="image3.png" alt="" />
        </div>
        <div className="holder3">
          <img className="img5" src="image4.png" alt="" />
          <img className="img6" src="image5.png" alt="" />
        </div>
      </div>
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
  );
}

export default App;
