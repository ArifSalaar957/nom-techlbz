import React from "react";
import { Link } from "react-router-dom";
import Firstfooter from "../../Components/Firstfooter/Firstfooter";
import Secondnav from "../../Components/Secondnav/Secondnav";
import Typewriter from "typewriter-effect";

const Workshop = () => {
  return (
    <div>
      <div style={{ background: "#ffffff" }}>
        <Secondnav />
        <div className="container">
          <div className="row mt-5 mt-md-0 justify-content-center g-0  mt-5 mt-lg-0 pt-5 pt-lg-0">
            <div className="col-12 mb-2 mb-md-5">
              <h4 className="workmaints">
                {" "}
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(" See all our work in our workshop.")
                      .changeDelay(1)
                      .start();
                  }}
                  options={{
                    delay: 30,
                  }}
                />
              </h4>
            </div>

            <div className="col-5 mt-2">
              <img
                src={process.env.PUBLIC_URL + "assets/images/headphone.png"}
                alt=""
                className="img-fluid mt-2"
                data-aos="zoom-in"
              />

              <img
                src={process.env.PUBLIC_URL + "assets/images/shoe.png"}
                alt=""
                className="img-fluid mt-2"
                data-aos="zoom-in"
              />
            </div>
            <div
              className="col-7 oye mt-3 "
              data-aos="zoom-in"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1660299678227-30da3150f1f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)",
              }}
            ></div>

            {/* <div className="col-md-7 d-block d-md-none ">
              <img
                src={process.env.PUBLIC_URL + "assets/images/Rectangle 69.png"}
                alt=""
                className="img-fluid d-block d-md-none  fullheight"
              />
            </div> */}
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
          </div>
          <div className="row justify-content-center mainemgge mt-2">
            <div className="col-4" data-aos="zoom-in">
              <img
                src={process.env.PUBLIC_URL + "assets/images/Rectangle 64.png"}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-4" data-aos="zoom-in">
              <img
                src={process.env.PUBLIC_URL + "assets/images/Rectangle 65.png"}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-4" data-aos="zoom-in">
              <img
                src={process.env.PUBLIC_URL + "assets/images/Rectangle 66.png"}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row mt-2 last3img justify-content-center g-0">
            <div className="col-5 ">
              <img
                src={process.env.PUBLIC_URL + "assets/images/Rectangle 67.png"}
                alt=""
                className="img-fluid "
                data-aos="zoom-in"
              />

              <img
                src={process.env.PUBLIC_URL + "assets/images/Rectangle 68.png"}
                alt=""
                className="img-fluid mt-2"
                data-aos="zoom-in"
              />
            </div>
            <div
              className="oye col-7 mt-2 "
              data-aos="zoom-in"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1660299678227-30da3150f1f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)",
              }}
            ></div>

            <div className="col-12 text-center mt-3 mt-md-5" data-aos="zoom-in">
              <button type="button" className="seemoreimges4  px-3 py-2">
                See more
              </button>
            </div>
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
        <Firstfooter />
      </div>
    </div>
  );
};

export default Workshop;
