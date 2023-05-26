import React from "react";
import { Link } from "react-router-dom";
import FirstNav from "../../Components/FirstNav/FirstNav";
import SecondFooter from "../../Components/Secondfooter/SecondFooter";
import Typewriter from "typewriter-effect";
const Project = () => {
 

  return (
    <div>
      <FirstNav />
      <div className="blackbg">
        <div className="container">
          <div className="row justify-content-center g-0 mt-5 mt-lg-0 pt-5 pt-lg-0">
            <div className="col-12 mb-2 mb-md-5">
              <h4>
                {" "}
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("See our incredible work.")
                      .changeDelay(1)
                      .start();
                  }}
                  options={{
                    delay: 30,
                  }}
                />{" "}
              </h4>
            </div>

            <div class="row mb-0 mb-md-5  pb-0 pb-md-5 justify-content-center">
              <div className="col-md-6 mb-3 mb-md-0 mt-5" data-aos="slide-up">
                <Link to = '/projectopen'>
                <div class="card" style={{ padding: "0" }}>
                  <img
                    src={process.env.PUBLIC_URL + "assets/images/bakkt.png"}
                    class="card-img-top w-100 zoomingnow"
                    alt="..."
                  />
                  <div class="card-body">
                    <h4>Example</h4>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-md-6 mb-3 mb-md-0 mt-5" data-aos="slide-up">
              <Link to = '/projectopen'>
                <div class="card" style={{ padding: "0" }}>
                  <img
                    src={process.env.PUBLIC_URL + "assets/images/bakkt.png"}
                    class="card-img-top w-100 zoomingnow"
                    alt="..."
                  />
                  <div class="card-body">
                    <h4>Example</h4>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-md-6 mb-3 mb-md-0 mt-5" data-aos="slide-up">
              <Link to = '/projectopen'>
                <div class="card" style={{ padding: "0" }}>
                  <img
                    src={process.env.PUBLIC_URL + "assets/images/bakkt.png"}
                    class="card-img-top w-100 zoomingnow"
                    alt="..."
                  />
                  <div class="card-body">
                    <h4>Example</h4>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-md-6 mb-3 mb-md-0 mt-5" data-aos="slide-up">
              <Link to = '/projectopen'>
                <div class="card" style={{ padding: "0" }}>
                  <img
                    src={process.env.PUBLIC_URL + "assets/images/bakkt.png"}
                    class="card-img-top w-100 zoomingnow"
                    alt="..."
                  />
                  <div class="card-body">
                    <h4>Example</h4>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-md-6 mb-3 mb-md-0 mt-5" data-aos="slide-up">
              <Link to = '/projectopen'>
                <div class="card" style={{ padding: "0" }}>
                  <img
                    src={process.env.PUBLIC_URL + "assets/images/bakkt.png"}
                    class="card-img-top w-100 zoomingnow"
                    alt="..."
                  />
                  <div class="card-body">
                    <h4>Example</h4>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-md-6 mb-3 mb-md-0 mt-5" data-aos="slide-up">
              <Link to = '/projectopen'>
                <div class="card" style={{ padding: "0" }}>
                  <img
                    src={process.env.PUBLIC_URL + "assets/images/bakkt.png"}
                    class="card-img-top w-100 zoomingnow"
                    alt="..."
                  />
                  <div class="card-body">
                    <h4>Example</h4>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                </div>
                </Link>
              </div>
            </div>

           
          </div>

          <div className="row mt-2 last3img justify-content-center g-0">
            <div
              className="col-12 mb-5 mb-md-5 pb-1 pb-md-5 mt-5 mt-md-5 pt-1 pt-md-5 moreprojsssss"
              data-aos="zoom-in"
            >
              <Link to="/contact" className="me-3">
                Get in touch with us
                <i
                  class="ms-3 fa-solid fa-arrow-right-long"
                  style={{ color: "#ffffff" }}
                ></i>
              </Link>
            </div>
          </div>
        </div>
        <SecondFooter />
      </div>
    </div>
  );
};

export default Project;
