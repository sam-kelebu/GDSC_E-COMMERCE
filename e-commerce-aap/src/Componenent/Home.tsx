import React from "react";
import Cart from "./Cart";
import Shope from "./Shope";
import Mycart from "./Mycart";
const Home = () => {
  return (
    <>
      <div id="navbar">
        <div className="heade">
          <h2 className="text-header">Header</h2>
        </div>
        <div className="btoo">
          <button className="nav-btn" onClick={Mycart}>
            Cart
          </button>
        </div>
      </div>

      <div className="emptyheader"></div>
      <div className="cata">
        <h2 className="text-cata">Catagories</h2>
        <p className="para-cata">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
          Numquam esse possimus optio quidem obcaecati vitae impedit placeat
          veniam <br />
          laboriosam quisquam praesentium quasi deleniti, illum excepturi id,
          magni commodi atque. Ipsa.
        </p>
        <button className="rectangle-69" onClick={Shope}>
          Button
        </button>
      </div>
      <br />

      <div className="grid13">
        <div className="grid131"></div>
        <div className="grid132"></div>
        <div className="grid133"></div>
      </div>
      <div className="lattest">
        <h2 className="lattesxt">Our lattest arrival</h2>
        <p className="our-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
          Numquam esse possimus optio quidem obcaecati vitae impedit placeat
          veniam <br />
          laboriosam quisquam praesentium quasi deleniti, illum excepturi id,
          magni commodi atque. Ipsa.
        </p>
        <button className="rectangle-70" onClick={Shope}>
          Button
        </button>
      </div>
      <br />
      <br />
      <div className="separate">
        <div className="rectangle20"></div>
        <div className="rectangle21"></div>
        <div className="rectangle22"></div>
      </div>
      <div className="ourpr">
        <div className="pro-he">
          <h2 className="pro-tex">Our Product</h2>
        </div>
        <div className="ourppp">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br /> Repudiandae obcaecati blanditiis quas, .
          </p>
          <button className="pro-btn">Button </button>
        </div>
        <div className="frame-2">
          <div className="frame-21">
            <div className="rect121"></div>
            <div className="rect122"></div>
            <div className="rect123"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
