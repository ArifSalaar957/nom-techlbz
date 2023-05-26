import React from "react";
import FirstNav from "../../Components/FirstNav/FirstNav";
import Firstfooter from "../../Components/Firstfooter/Firstfooter";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import axios from "axios";
import { useState, useEffect } from "react";
const Services = () => {
  const [comments, setComments] = useState([]);

  const basePath = "http://localhost:1337";

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const dataArray = [];
    const response = await axios("http://localhost:1337/api/mains?populate=*");

    response.data &&
      response.data.data &&
      response.data.data.forEach((element) => {
        const imageData = element.attributes.image.data;
        let imagePath = "";

        imageData &&
          imageData.forEach((val) => {
            imagePath = val.attributes.formats.thumbnail.url;
          });

        dataArray.push({
          id: element.id,
          title: element.attributes.title,
          description: element.attributes.description,
          imageURL: imagePath,
        });
      });

    setComments(dataArray);
  };

  return (
    <div>
      <FirstNav />
      <div className="blackbg">
        <div className="container">
          <div className="row justify-content-center mt-5 mt-lg-0">
            <div className="col-12 mt-5 mt-md-0 mb-2 mb-md-5">
              <h4>
                {" "}
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "We offer two services Physical & Digital Products."
                      )
                      .changeDelay(1)
                      .start();
                  }}
                  options={{
                    delay: 30,
                  }}
                />
              </h4>
            </div>

            <div className="col-12 mt-2 mt-md-5 mb-3 mb-md-5 homeslide">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/image1.png"}
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/image1.png"}
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/image1.png"}
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>

                  <div class="carousel-item">
                    <img
                      src={process.env.PUBLIC_URL + "assets/images/image1.png"}
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 mt-1 mt-md-5 pt-0  pt-md-3 "
              data-aos="slide-up"
            >
              <h4>Physical Products.</h4>
              <p className="mt-3">Workflow Process of physical production.</p>
            </div>

            <div
              className="col-6 col-md-2 mt-2 mt-md-5 mb-5"
              data-aos="slide-up"
            >
              <img
                src={process.env.PUBLIC_URL + "assets/images/sparkle.png"}
                alt=""
                className="img-fluid  nlogoimgs"
              />
            </div>
            <div
              className="col-6 col-md-4 mt-2 mt-md-5 mb-5 physicalproducts"
              data-aos="slide-up"
            >
              <span className="num1 me-3">1.0</span>
              <div className="vertline d-inline-block me-3"></div>
              <span className="num2">
                <img
                  src={process.env.PUBLIC_URL + "assets/images/nsmall.png"}
                  alt=""
                />
              </span>
              <p className="produx Brainstorming">Brainstorming</p>
              <p className="produxdet">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div
              className="col-md-2 mt-2 mt-md-5 mb-5 d-none d-md-block"
              data-aos="slide-up"
            >
              <img
                src={process.env.PUBLIC_URL + "assets/images/sparkle.png"}
                alt=""
                className="img-fluid nlogoimgs"
              />
            </div>
            <div
              className="col-md-4 mt-2 mt-md-5 mb-5 physicalproducts d-none d-md-block"
              data-aos="slide-up"
            >
              <span className="num1 me-3">2.0</span>
              <div className="vertline d-inline-block me-3"></div>
              <span className="num2">
                <img
                  src={process.env.PUBLIC_URL + "assets/images/nsmall.png"}
                  alt=""
                />
              </span>
              <p className="produx Brainstorming">Brainstorming</p>
              <p className="produxdet">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="row mb-5 mb-md-0" data-aos="slide-up">
              <div className="col-2 col-md-1  ingtldrl">
                <span>initial</span>
              </div>
              <div className="col-5 col-md-10   onlyonestart">
                <span>1</span>
                <div className="longwideline "></div>
              </div>
              <div className="col-2 col-md-1  text-start text-md-center ingtldrl">
                <span>Delivered</span>
              </div>
            </div>
            <div
              className="col-12 mt-1 mt-md-5 pt-1 pt-md-1 Capabilities"
              data-aos="slide-up"
            >
              <p className="mt-1 mt-md-5">Capabilities of our Products</p>
            </div>
            <div className="row">
              <div
                className="col-md-6 p-2 p-md-5 text-center mt-2 mt-md-5 mb-4 mb-md-5 whitecard"
                data-aos="slide-up"
              >
                <img
                  src={process.env.PUBLIC_URL + "assets/images/cardlog.png"}
                  alt=""
                />
                <h4>1st Capability</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div
                className="col-md-6 p-2 p-md-5 text-center mt-2 mt-md-5 mb-4 mb-md-5 imgseclde"
                data-aos="slide-up"
              >
                <img
                  src={
                    process.env.PUBLIC_URL + "assets/images/cardblacklog.png"
                  }
                  alt=""
                />
                <h4>2nd Capability</h4>
              </div>
              <div
                className="col-md-6 p-2 p-md-5 text-center mt-2 mt-md-5 mb-4 mb-md-5 imgseclde"
                data-aos="slide-up"
              >
                <img
                  src={
                    process.env.PUBLIC_URL + "assets/images/cardblacklog.png"
                  }
                  alt=""
                />
                <h4>3rd Capability</h4>
              </div>
              <div
                className="col-md-6 p-2 p-md-5 text-center mt-2 mt-md-5 mb-4 mb-md-5 imgseclde"
                data-aos="slide-up"
              >
                <img
                  src={
                    process.env.PUBLIC_URL + "assets/images/cardblacklog.png"
                  }
                  alt=""
                />
                <h4>4th Capability</h4>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 " data-aos="slide-up">
                <img
                  src={process.env.PUBLIC_URL + "assets/images/midlogo.png"}
                  alt=""
                  className=" mt-1 mt-md-5 d-block m-auto midlogo"
                />
              </div>
              <div
                className="col-12 text-center mt-3 featureprod"
                data-aos="slide-up"
              >
                <h4>Lastest three products.</h4>
              </div>
              <div
                className="col-12 text-center mt-3  mb-5 featureprod"
                data-aos="slide-up"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et <br />
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation.
                </p>
              </div>
            </div>
            <div class="row mb-0 mb-md-5 pb-0 pb-md-5 justify-content-center">
              {comments &&
                comments.map((val) => {
                  return (
                    <>
                      <div
                        className="col-md-4 mb-3 mb-md-0 mt-5"
                        data-aos="slide-up"
                        key={val.id}
                      >
                        <div class="card" style={{ padding: "0" }}>
                          <img
                            src={`${basePath}${val.imageURL}`}
                            class="card-img-top w-100 zoomingnow"
                            alt="..."
                          />
                          <div class="card-body">
                            <h4>{val.title}</h4>
                            <p class="card-text">{val.description}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}

              <div
                className="col-12 text-center text-md-end mb-5 mb-md-5  mt-5 mb-mt-5  moreproj"
                data-aos="slide-up"
              >
                <Link to="/projects" className="me-3 mt-1 mt-md-5">
                  See more projects
                  <i class="ms-3 fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="whitebg">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-12 mt-1 mt-md-5 pt-0  pt-md-3 pphysic"
              data-aos="slide-up"
            >
              <h4>Physical Products.</h4>
              <p className="mt-3">Workflow Process of physical production.</p>
            </div>
            <div className="col-6 col-md-2 mt-2 mt-md-5" data-aos="slide-up">
              <img
                src={process.env.PUBLIC_URL + "assets/images/sparkle.png"}
                alt=""
                className="img-fluid nlogoimgs"
              />
            </div>
            <div
              className="col-6 col-md-4 mt-2 mt-md-5 mb-5 physicalproducts blsvkyrd"
              data-aos="slide-up"
            >
              <span className="num1 me-3">1.0</span>
              <div className="vertline vertlinebl d-inline-block me-3"></div>
              <span className="num2">
                <img
                  src={process.env.PUBLIC_URL + "assets/images/nsmall.png"}
                  alt=""
                />
              </span>
              <p className="produx Brainstorming">Brainstorming</p>
              <p className="produxdet">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div
              className="col-md-2 mt-2 mt-md-5 mb-5 d-none d-md-block"
              data-aos="slide-up"
            >
              <img
                src={process.env.PUBLIC_URL + "assets/images/sparkle.png"}
                alt=""
                className="img-fluid nlogoimgs"
              />
            </div>
            <div
              className="col-md-4 mt-2 mt-md-5 mb-5 physicalproducts blsvkyrd d-none d-md-block"
              data-aos="slide-up"
            >
              <span className="num1 me-3">2.0</span>
              <div className="vertline vertlinebl d-inline-block me-3"></div>
              <span className="num2">
                <img
                  src={process.env.PUBLIC_URL + "assets/images/nsmall.png"}
                  alt=""
                />
              </span>
              <p className="produx Brainstorming">Brainstorming</p>
              <p className="produxdet">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="row mb-5 mb-md-0" data-aos="slide-up">
              <div className="col-2 col-md-1  ">
                <span>initial</span>
              </div>
              <div className="col-5 col-md-10   onlyonestart">
                <span>1</span>
                <div className="longwideliness "></div>
              </div>
              <div className="col-2 col-md-1  text-start text-md-center ">
                <span>Delivered</span>
              </div>
            </div>
            .
            <div
              className="col-12 mt-1 mt-md-5 pt-1 pt-md-1 Capabilitiesss"
              data-aos="slide-up"
            >
              <p className="mt-1 mt-md-5">Capabilities of our Products</p>
            </div>
            <div className="row">
              <div
                className="col-md-6 p-2 p-md-5 text-center mt-2 mt-md-5 mb-4 mb-md-5 whitecardss"
                data-aos="slide-up"
              >
                <img
                  src={process.env.PUBLIC_URL + "assets/images/cardlog.png"}
                  alt=""
                  style={{ borderRadius: "50%" }}
                />
                <h4>1st Capability</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div
                className="col-md-6 p-2 p-md-5 text-center mt-2 mt-md-5 mb-4 mb-md-5 imgseclde"
                data-aos="slide-up"
              >
                <img
                  src={
                    process.env.PUBLIC_URL + "assets/images/cardblacklog.png"
                  }
                  alt=""
                />
                <h4>2nd Capability</h4>
              </div>
              <div
                className="col-md-6 p-2 p-md-5 text-center mt-2 mt-md-5 mb-4 mb-md-5 imgseclde"
                data-aos="slide-up"
              >
                <img
                  src={
                    process.env.PUBLIC_URL + "assets/images/cardblacklog.png"
                  }
                  alt=""
                />
                <h4>3rd Capability</h4>
              </div>
              <div
                className="col-md-6 p-2 p-md-5 text-center mt-2 mt-md-5 mb-4 mb-md-5 imgseclde"
                data-aos="slide-up"
              >
                <img
                  src={
                    process.env.PUBLIC_URL + "assets/images/cardblacklog.png"
                  }
                  alt=""
                />
                <h4>4th Capability</h4>
              </div>
            </div>
            <div className="col-12 " data-aos="slide-up">
              <img
                src={process.env.PUBLIC_URL + "assets/images/blackmidlogo.png"}
                alt=""
                className=" mt-1 mt-md-5 d-block m-auto midlogo"
              />
            </div>
            <div className="col-12 text-center mt-3 featureprod">
              <h4>Our physical featured products.</h4>
            </div>
            <div
              className="col-12 text-center mt-3  mb-5 featureprod"
              data-aos="slide-up"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et <br />
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation.
              </p>
            </div>
            <div class="row mb-5 mb-md-5 pb-0 pb-md-5 justify-content-center">
              {comments &&
                comments.map((val) => {
                  return (
                    <>
                      <div
                        className="col-md-4 mb-3 mb-md-0 mt-5"
                        data-aos="slide-up"
                        key={val.id}
                      >
                        <div class="cards" style={{ padding: "0" }}>
                          <img
                            src={`${basePath}${val.imageURL}`}
                            class="card-img-top zoomingnow"
                            alt="..."
                          />
                          <div class="card-body blakkdi">
                            <h4>{val.title}</h4>
                            <p class="card-text">{val.description}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
            <div
              className="col-12 text-center text-md-end mb-5 mb-md-5 pb-1 pb-md-5 moreprojsss"
              data-aos="slide-up"
            >
              <Link to="/projects" className="me-3">
                See more projects
                <i
                  class="ms-3 fa-solid fa-arrow-right-long"
                  style={{ color: "#000000" }}
                ></i>
              </Link>
            </div>
            <div
              className="col-12 mb-1 mb-md-5 pb-1 pb-md-5 "
              data-aos="slide-up"
            >
              <div className="horlgline "></div>
            </div>
            <div
              className="col-12 mb-5 mb-md-5 pt-5 pt-md-5 moreprojsss"
              data-aos="slide-up"
            >
              <Link to="/contact" className="me-3">
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

export default Services;
