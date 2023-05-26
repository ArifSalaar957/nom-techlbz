import React from "react";
import Forthnav from "../../Components/Fourthnav/Forthnav";
import { Link } from "react-router-dom";
import Firstfooter from "../../Components/Firstfooter/Firstfooter";
const Projectopen = () => {
  return (
    <div>
      <Forthnav />
      <div style={{ background: "#000000" }}>
        <div className="container py-2 py-md-5">
          <div className="row py-2 py-md-5  mt-5 mt-lg-0">
            
            <div className="col-md-7 projectopen1">
              <h4>Afterpay</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="emptyportion"></div>
      <div className="blackbg tanspdel">
        <div className="container">
          <div className="row justify-content-center g-0">
            <div className="col-12 mb-2 mb-md-1" data-aos="zoom-in">
              <Link to="/projectopen">
                {" "}
                <img
                  src={process.env.PUBLIC_URL + "assets/images/bakkt.png"}
                  alt=""
                  className="img-fluid"
                />
              </Link>
            </div>
            <div className="col-5 mt-2">
              <Link to="/projectopen">
                <img
                  src={process.env.PUBLIC_URL + "assets/images/headphone.png"}
                  alt=""
                  className="img-fluid mt-2"
                  data-aos="zoom-in"
                />
              </Link>

              <img
                src={process.env.PUBLIC_URL + "assets/images/shoe.png"}
                alt=""
                className="img-fluid mt-2"
                data-aos="zoom-in"
              />
            </div>
            <div
              className="col-7 oye mt-3"
              data-aos="zoom-in"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1660299678227-30da3150f1f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)",
              }}
            ></div>
          </div>
          <div className="row justify-content-center mainemgge mt-2 ">
            <div className="col-4" data-aos="zoom-in">
              <img
                src={process.env.PUBLIC_URL + "assets/images/Rectangle 61.png"}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-4" data-aos="zoom-in">
              <img
                src={process.env.PUBLIC_URL + "assets/images/Rectangle 62.png"}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-4" data-aos="zoom-in">
              <img
                src={process.env.PUBLIC_URL + "assets/images/Rectangle 63.png"}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-4 d-block d-md-none" data-aos="zoom-in">
              <img
                src={process.env.PUBLIC_URL + "assets/images/Rectangle 61.png"}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-4 d-block d-md-none" data-aos="zoom-in">
              <img
                src={process.env.PUBLIC_URL + "assets/images/Rectangle 62.png"}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-4 d-block d-md-none" data-aos="zoom-in">
              <img
                src={process.env.PUBLIC_URL + "assets/images/Rectangle 63.png"}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>

          <div className="row mt-2 last3img justify-content-center g-0">
            <div className="col-5 d-block d-md-none mt-2">
              <Link to="/projectopen">
                <img
                  src={process.env.PUBLIC_URL + "assets/images/headphone.png"}
                  alt=""
                  className="img-fluid mt-2"
                  data-aos="zoom-in"
                />
              </Link>

              <img
                src={process.env.PUBLIC_URL + "assets/images/shoe.png"}
                alt=""
                className="img-fluid mt-2"
                data-aos="zoom-in"
              />
            </div>
            <div
              className="col-7 d-block d-md-none oye mt-3 "
              data-aos="zoom-in"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1660299678227-30da3150f1f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)",
              }}
            ></div>

            <div
              className="col-12 mb-5 mb-md-5 pb-1 pb-md-5 mt-4 mt-md-5 pt-5 pt-md-5 moreprojsssss"
              data-aos="zoom-in"
            >
              <Link to="/contact" className="me-3" style={{ color: "#000000" }}>
                Get in touch with us
                <i
                  class="ms-3 fa-solid fa-arrow-right-long float-end float-md-none"
                  style={{ color: "#000000" }}
                ></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Firstfooter />
    </div>
  );
};

export default Projectopen;
