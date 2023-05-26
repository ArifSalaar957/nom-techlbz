import React from "react";
import { Link } from "react-router-dom";
import Firstfooter from "../../Components/Firstfooter/Firstfooter";
import FirstNav from "../../Components/FirstNav/FirstNav";
import axios from "axios";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
const buttonvariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 4px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};
const buttonvariantss = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 6px rgba(255,255,255,0.5)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};
const buttonvariantsss = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 6px rgba(0,0,0,0.5)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const Home = () => {
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

  console.log("------->", JSON.stringify(comments));

  return (
    <div>
      <FirstNav />
      <div className="blackbg">
        <div className="container">
          <div className="row justify-content-center mt-5 mt-lg-0">
            <div className="col-12 mt-5 mt-md-0">
              <h4>
                {" "}
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Physical & Digital")
                      .changeDelay(1)
                      .start();
                  }}
                  options={{
                    delay: 30,
                  }}
                />{" "}
              </h4>
            </div>
            <div className="col-12">
              <h4>
                {" "}
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Products you gonna love.")
                      .changeDelay(1)
                      .start();
                  }}
                  options={{
                    delay: 30,
                  }}
                />{" "}
              </h4>
            </div>
            <div className="col-12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                sed do eiusmod tempor incididunt ut.
              </p>
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
            <div className="col-12 mt-1 mt-md-5 pt-0  pt-md-3 nomstuds">
              <div className="row">
                <div className="col-12 col-md-9" data-aos="slide-up">
                  <p>
                    Nom Studio is a digital & physical product agency, venture
                    studio and VC firm. We Offer both physical & digital
                    services.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-2 mt-md-5 mb-5" data-aos="slide-up">
              <img
                src={process.env.PUBLIC_URL + "assets/images/nlogo.png"}
                alt=""
                className="img-fluid nlogoimg"
              />
            </div>
            <div
              className="col-md-6 mt-2 mt-md-5 mb-5 physicalproducts"
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
              <p className="produx">Physical Products</p>
              <p className="produxdet">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <motion.button
                type="button"
                className="seedetails mt-0 mt-md-3"
                variants={buttonvariants}
                whileHover="hover"
              >
                See Details
              </motion.button>
              <div className="horiline mt-3 mt-md-5"></div>
            </div>
            <div className="row justify-content-end" data-aos="slide-up">
              <div className="col-md-6 mt-2 mt-md-5 mb-5 physicalproducts">
                <span className="num1 me-3">2.0</span>
                <div className="vertline d-inline-block me-3"></div>
                <span className="num2">
                  <img
                    src={process.env.PUBLIC_URL + "assets/images/nsmall.png"}
                    alt=""
                  />
                </span>
                <p className="produx">Digital Products</p>
                <p className="produxdet">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <motion.button
                  type="button"
                  className="seedetails mt-0 mt-md-3"
                  variants={buttonvariants}
                  whileHover="hover"
                >
                  See Details
                </motion.button>
                <div className="horiline mt-3 mt-md-5"></div>
              </div>
            </div>
            <div className="row justify-content-center" data-aos="slide-up">
              <div className="col-md-8 pt-0 pt-md-5 mt-0 mt-md-5  physicalproducts">
                <span className="num1221 me-3">Physical Products</span>
                <div className="vertline2 d-inline-block me-3"></div>
                <span className="num21211">
                  <img
                    src={process.env.PUBLIC_URL + "assets/images/nsmall.png"}
                    alt=""
                  />
                </span>

                <p className="produxdet2">
                  We have done more than hundreds of projects with our clinets
                  and 100% satisfaction.
                </p>
              </div>
              <div className="col-md-4 pt-0 pt-md-5 mt-0 mt-md-5 mb-5 righttet">
                <p className="pt-0 pt-md-5 mt-0 mt-md-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="col-12 mb-5 d-block d-md-none">
                <img
                  src={process.env.PUBLIC_URL + "assets/images/imgee.png"}
                  alt=""
                  className="img-fluid d-block m-auto"
                />
              </div>
              <div className="col-12 ">
                <img
                  src={process.env.PUBLIC_URL + "assets/images/midlogo.png"}
                  alt=""
                  className=" mt-1 mt-md-5 d-block m-auto midlogo"
                />
              </div>
              <div className="col-12 text-center mt-3 featureprod">
                <h4>Our physical featured products.</h4>
              </div>
              <div className="col-12 text-center mt-3  mb-5 featureprod">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et <br />
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation.
                </p>
              </div>
            </div>
            <div class="row mb-0 mb-md-5  pb-0 pb-md-5 justify-content-center">
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

              <div className="col-12 text-center text-md-end mb-5 mb-md-5  mt-1 mb-mt-5 pt-1 pt-md-5 moreproj">
                <Link to="/projects" className=" me-3 mt-1 mt-md-5">
                  <motion.span variants={buttonvariantss} whileHover="hover">
                    {" "}
                    See more projects
                    <i class="ms-3 fa-solid fa-arrow-right-long"></i>
                  </motion.span>
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
              className="col-md-8 pt-0 pt-md-5 mt-5 mt-md-5  physicalproducts"
              data-aos="slide-up"
            >
              <span className="num12213 me-3">Digital Products</span>
              <div className="vertline23 d-inline-block me-3"></div>
              <span className="num21211">
                <img
                  src={process.env.PUBLIC_URL + "assets/images/blacksmlogo.png"}
                  alt=""
                />
              </span>

              <p className="produxdet2">
                We have done more than hundreds of projects with our clinets and
                100% satisfaction.
              </p>
            </div>
            <div
              className="col-md-4 mt-0 mt-md-5 mb-5 righttet"
              data-aos="slide-up"
            >
              <p className="pt-0 pt-md-5 mt-0 mt-md-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="col-12 mb-5 d-block d-md-none" data-aos="slide-up">
              <img
                src={process.env.PUBLIC_URL + "assets/images/imgee.png"}
                alt=""
                className="img-fluid d-block m-auto"
              />
            </div>
            <div className="col-12 " data-aos="slide-up">
              <img
                src={process.env.PUBLIC_URL + "assets/images/blackmidlogo.png"}
                alt=""
                className=" mt-1 mt-md-5 d-block m-auto midlogo"
              />
            </div>
            <div
              className="col-12 text-center mt-3 featureprod"
              data-aos="slide-up"
            >
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
              <Link to="/projects" className=" me-3">
                <motion.span variants={buttonvariantsss} whileHover="hover">
                  See more projects
                  <i
                    class="ms-3 fa-solid fa-arrow-right-long"
                    style={{ color: "#000000" }}
                  ></i>
                </motion.span>
              </Link>
            </div>
            <div
              className="col-12 mb-1 mb-md-5 pb-1 pb-md-5 "
              data-aos="slide-up"
            >
              <div className="horlgline "></div>
            </div>
            <div className="col-12 proud" data-aos="slide-up">
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
                data-aos="slide-up"
              />
              <img
                src={process.env.PUBLIC_URL + "assets/images/IMG_2093.png"}
                alt=""
                className="img-fluid d-block d-md-none mt-4"
                data-aos="slide-up"
              />
              <img
                src={process.env.PUBLIC_URL + "assets/images/IMG_2092.png"}
                alt=""
                className="img-fluid d-block d-md-none mt-4 mb-4"
                data-aos="slide-up"
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

        <Firstfooter />
      </div>
    </div>
  );
};

export default Home;
