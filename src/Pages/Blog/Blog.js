import React, { useEffect, useState } from "react";
import Firstfooter from "../../Components/Firstfooter/Firstfooter";
import Secondnav from "../../Components/Secondnav/Secondnav";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import axios from "axios";
const Blog = () => {
  const [blog, setBlog] = useState([]);
  const basePath = "http://localhost:1337";
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/project-managements?populate=*")
      .then((res) => {
        console.log(res.data);
        setBlog(res.data.data);
      });
  }, []);

  return (
    <div>
      <Secondnav />
      <div style={{ background: "#ffffff" }}>
        <div className="container blogcont">
          <div className="row g-0 mt-5 mt-lg-0">
            <div className="col-12 mt-5 mt-md-0">
              <h4>
                {" "}
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Our blogs you should read.")
                      .changeDelay(1)
                      .start();
                  }}
                  options={{
                    delay: 30,
                  }}
                />{" "}
              </h4>
              <h6 className="applyfil my-2 my-md-0 py-1 py-md-5">
                You can apply these filters.
              </h6>
            </div>
            <div className="col-md-4">
              <div className="row g-0">
                <div className="col-3  text-center">
                  <a className="onfocus" href="#">
                    Sports
                  </a>
                </div>
                <div className="col-3  text-center">
                  <a className="onfocus" href="#">
                    News
                  </a>
                </div>
                <div className="col-3  text-center">
                  <a className="onfocus" href="#">
                    Products
                  </a>
                </div>
                <div className="col-3  text-center">
                  <a className="onfocus" href="#">
                    Products
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row g-0">
                <div className="col-3  text-center">
                  <a className="onfocus" href="#">
                    Government
                  </a>
                </div>
                <div className="col-3  text-center">
                  <a className="onfocus" href="#">
                    Social
                  </a>
                </div>
                <div className="col-3  text-center">
                  <a className="onfocus" href="#">
                    News
                  </a>
                </div>
                <div className="col-3  text-center">
                  <a className="onfocus" href="#">
                    Products
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row g-0">
                <div className="col-3  text-center">
                  <a className="onfocus" href="#">
                    Sports
                  </a>
                </div>
                <div className="col-3  text-center">
                  <a className="onfocus" href="#">
                    Sports
                  </a>
                </div>
                <div className="col-3  text-center">
                  <a className="onfocus" href="#">
                    Sports
                  </a>
                </div>
                <div className="col-3  text-center">
                  <a href="#" className="fw-bold">
                    Add new
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-2 mb-md-5 justify-content-center">
            {blog &&
              blog.map((val) => {
                return (
                  <>
                    {/* {JSON.stringify(val)} */}
                    <div
                      className="col-lg-4 col-md-6 mt-2 mt-md-5"
                      data-aos="slide-up"
                    >
                      <Link to="/blogopen">
                        <img
                          src={`${basePath}${val.attributes.image.data.attributes.formats.thumbnail.url}`}
                          alt=""
                          className="img-fluid w-100 mbleimg zoomingnow"
                        />
                        <p className="pt-3">{val.attributes.author}</p>
                        <p className="mantexts">{val.attributes.title}</p>
                        <p className="mantextsss">
                          {val.attributes.description}.
                        </p>
                      </Link>
                    </div>
                  </>
                );
              })}

            <div
              className="col-12 mt-2 mt-md-5 mb-5 mb-md-5"
              data-aos="slide-up"
            >
              <hr />
            </div>
            <div
              className="col-12 mb-5 mb-md-5 pb-1 pb-md-5 blogpage"
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

export default Blog;
