import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Gallery = () => {
  return (
    <div className="Gallery">
        <Navbar />
        <h1>His Goodness Yesterday Gives Us Strength For Today</h1>
        <h5>Moments captured from time spent with God.</h5>
      <div className="Gallery_Holder">
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
      <div className="Gallery_Holder">
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
      <div className="Gallery_Holder">
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
      <Footer />
    </div>
  );
};

export default Gallery;
