import React from "react";
import { Link } from "react-router-dom";
import Firstfooter from "../../Components/Firstfooter/Firstfooter";
import Secondnav from "../../Components/Secondnav/Secondnav";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <div>
      <Secondnav />
      <div style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="row aboutpage mt-5 mt-lg-0">
            <div className="col-md-7 mt-5 mt-md-0">
              <h1>
                {" "}
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Let’s make it simple; make it sincere.")
                      .changeDelay(1)
                      .start();
                  }}
                  options={{
                    delay: 30,
                  }}
                />{" "}
              </h1>
            </div>
          </div>
          <div className="row mt-2 mt-md-5 pt-1 pt-md-5 aboutpage1">
            <div className="col-md-6 order-md-2">
              <img
                src={process.env.PUBLIC_URL + "assets/images/Rectangle 78.png"}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 my-auto d-block order-md-1">
              <h6 className="pb-2">Our histroy.</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
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
          <div className="row mt-2 mt-md-5 pt-1 pt-md-5 mb-2 mb-md-5 pb-1 pb-md-5 aboutpage1">
            <div className="col-md-6  d-block">
              <img
                src={process.env.PUBLIC_URL + "assets/images/Rectangle 79.png"}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 my-auto">
              <h6 className="pb-2">Out Menifesto</h6>

              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.”
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 " style={{ background: "#000000" }}>
        <div className="container">
          <div className="row py-2 py-md-5 justify-content-center ourteam">
            <div className="col-12 my-2 my-md-5">
              <h4>Our team.</h4>
            </div>

            <div className="col-lg-4 col-md-6">
              <img
                src={process.env.PUBLIC_URL + "assets/images/man.png"}
                alt=""
                className="img-fluid"
              />
              <h6 className="pt-2">Ash Fogelberg</h6>
              <p>Managing Partner</p>
            </div>
            <div className="col-lg-4 col-md-6">
              <img
                src={process.env.PUBLIC_URL + "assets/images/Rectangle 56.png"}
                alt=""
                className="img-fluid"
              />
              <h6 className="pt-2">Ash Fogelberg</h6>
              <p>Managing Partner</p>
            </div>
            <div className="col-lg-4 col-md-6">
              <img
                src={process.env.PUBLIC_URL + "assets/images/Rectangle 57.png"}
                alt=""
                className="img-fluid"
              />
              <h6 className="pt-2">Ash Fogelberg</h6>
              <p>Managing Partner</p>
            </div>

            <div className="col-12 d-none d-md-block pt-0 pt-md-5 mt-0 mt-md-5 mb-0 mb-md-5 pb-2 pb-md-5 text-white touchus">
              <Link to="/contact" className="float-end">
                Get in touch with us{" "}
                <i class="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-2 mt-md-5 pt-md-5 pt-2"
        style={{ background: "#ffffff" }}
      >
        <div className="container d-none d-md-block">
          <div className="row hkmkl">
            <div className="col-12">
              <p>
                {" "}
                Proud to be <br />
                partnered with{" "}
              </p>
              <img
                src={process.env.PUBLIC_URL + "assets/images/partners.png"}
                alt=""
                className="img-fluid mt-2 mt-md-5 mb-2 mb-md-5"
              />
              <div className="col-12 mt-2 mt-md-5 mb-2 mb-md-5 pt-2 pt-md-5 pb-2 pb-md-5">
                <hr />
              </div>
              <div className="col-12 mt-2 mt-md-5 mb-2 mb-md-5 pt-2 pt-md-5 pb-2 pb-md-5">
                <a href="#" className="jointeamnow">
                  Join our team{" "}
                  <i
                    class=" me-2 fa-solid fa-arrow-right-long"
                    style={{ color: "#000000" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="whitebg d-block d-md-none">
          <div className="container">
            <div className="row mt-5 mt-md-0 justify-content-center">
              <div className="col-12 proud">
                <h4>Proud to be</h4>
                <h4>partnered with</h4>
                <img
                  src={process.env.PUBLIC_URL + "assets/images/partners.png"}
                  className="img-fluid mt-2 mt-md-5 mb-2 mb-md-5 d-none d-md-block"
                  alt=""
                />
                <img
                  src={process.env.PUBLIC_URL + "assets/images/IMG_2094.png"}
                  alt=""
                  className="img-fluid d-block d-md-none mt-4"
                />
                <img
                  src={process.env.PUBLIC_URL + "assets/images/IMG_2093.png"}
                  alt=""
                  className="img-fluid d-block d-md-none mt-4"
                />
                <img
                  src={process.env.PUBLIC_URL + "assets/images/IMG_2092.png"}
                  alt=""
                  className="img-fluid d-block d-md-none mt-4 mb-4"
                />
              </div>
              <div className="col-12 mt-1 mt-md-5 pt-1 pt-md-5 mb-1 mb-md-5 pb-1 pb-md-5">
                <div className="horlgline "></div>
              </div>
              <div className="col-12 text-center text-md-start mt-1 mt-md-5 pt-1 pt-md-5">
                <h4 className="blogsub">Subscribe to our blog.</h4>
              </div>
              <div className="col-12 text-center text-md-start   mt-1 mt-md-2 pt-1 pt-md-2 mb-1 mb-md-5 pb-1 pb-md-5 subinp">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="py-2 ps-2"
                />
                <button type="button" className="ms-3 px-2 py-2 subbtns">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Firstfooter />
    </div>
  );
};

export default About;
