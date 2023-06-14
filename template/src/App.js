import './App.css';
import Footer from "./component/Footer"

function App() {
  return (
    <div className="App">
      <div className="Holder">      
        <img className="img1" src="image.png" alt="" />
        <img className="img2" src="image1.png" alt="" />
        <img className="img3" src="image2.png" alt="" />
        <img className="img4" src="image3.png" alt="" />
        <img className="img5" src="image4.png" alt="" />
        <img className="img6" src="image5.png" alt="" />
        <div className="black1"></div> 
        <div className="black2"></div>
      </div>  
      <Footer />
    </div>
  );
}

export default App;