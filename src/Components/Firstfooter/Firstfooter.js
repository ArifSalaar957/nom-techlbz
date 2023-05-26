import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Firstfooter = () => {
  const [Contact, SetContact] = useState(false);
  const [Navigate, SetNavigate] = useState(false);
  const [Suport, SetSuport] = useState(false);
  return (
    <div>
      <div class="container d-none d-md-block">
        <div className="row justify-content-center  mt-1 mt-md-5">
          <div className="col-6 col-md-6  firstfoot">
            <p className="contacth">Contact</p>
            <div className="restop">
              <p>email: hola@niom.studio​</p>
              <p>Address 1</p>
              <p>Address 2</p>
            </div>
          </div>
          <div className="col-6 col-md-2   firstfoot">
            <p className="contacth">Navigate</p>
            <div className="restop">
              <a href="#" className="d-block">
                Services
              </a>
              <a href="#" className="d-block">
                Portfolio
              </a>
              <a href="#" className="d-block">
                Blog
              </a>
              <a href="#" className="d-block">
                WorkShop
              </a>
              <a href="#" className="d-block">
                About Us
              </a>
            </div>
          </div>
          <div className="col-6 col-md-2  firstfoot">
            <p className="contacth">Support</p>
            <div className="restop">
              <a href="#" className="d-block">
                Privacy
              </a>
              <a href="#" className="d-block" style={{ whiteSpace: "nowrap" }}>
                Terms & conditions
              </a>
            </div>
          </div>
          <div
            className="col-6 col-md-2  firstfoot"
            style={{ whiteSpace: "nowrap" }}
          >
            <p className="contacth">Social</p>
            <div className="restop">
              <a href="#" className="me-1">
                <img
                  src={process.env.PUBLIC_URL + "assets/images/github.png"}
                  alt=""
                  className="img-fluid"
                />
              </a>
              <a href="#" className="me-1">
                <img
                  src={process.env.PUBLIC_URL + "assets/images/bb.png"}
                  alt=""
                  className="img-fluid"
                  style={{ maxWidth: "46px" }}
                />
              </a>
              <a href="#">
                <img
                  src={process.env.PUBLIC_URL + "assets/images/facebook.png"}
                  alt=""
                  className="img-fluid"
                  style={{ maxWidth: "46px" }}
                />
              </a>
            </div>
          </div>
          <div className="col-12 mt-5 py-2">
            © 2022 Nom Studio Limited. — Privacy Policy Terms of Use
          </div>
        </div>
      </div>
      <div className="container d-block d-md-none">
        <div className="row ">
          <div className="col-12 contactdrop">
            <p className="py-2" onClick={() => SetContact(!Contact)}>
              Contact{" "}
              <i
                class={
                  Contact
                    ? " float-end fa-solid fa-angle-up"
                    : " float-end fa-solid fa-angle-down"
                }
                style={{ color: "#000000" }}
              ></i>
            </p>
            {Contact && (
              <div>
                <h6>email: hola@niom.studio​</h6>
                <h6>Address 1​</h6>
                <h6>Address 2​</h6>
              </div>
            )}
            <p className="py-2" onClick={() => SetNavigate(!Navigate)}>
              Navigate{" "}
              <i
                class={
                  Navigate
                    ? " float-end fa-solid fa-angle-up"
                    : " float-end fa-solid fa-angle-down"
                }
                style={{ color: "#000000" }}
              ></i>
            </p>
            {Navigate && (
              <div>
                <h6>
                  {" "}
                  <Link to="/services">Services</Link> ​
                </h6>
                <h6>
                  {" "}
                  <Link to="/projects">Portfolio</Link> ​
                </h6>
                <h6>
                  {" "}
                  <Link to="/blog">Blog</Link> ​
                </h6>
                <h6>
                  {" "}
                  <Link to="/workshop">Workshop</Link> ​
                </h6>
                <h6>
                  {" "}
                  <Link to="/about">About Us</Link> ​
                </h6>
              </div>
            )}
            <p className="py-2" onClick={() => SetSuport(!Suport)}>
              Suport{" "}
              <i
                class={
                  Suport
                    ? " float-end fa-solid fa-angle-up"
                    : " float-end fa-solid fa-angle-down"
                }
                style={{ color: "#000000" }}
              ></i>
            </p>
            {Suport && (
              <div>
                <h6>
                  {" "}
                  <a href="#">Privacy​</a> ​
                </h6>
                <h6 className="latsupt">
                  {" "}
                  <a href="#">Terms and conditions​</a> ​
                </h6>
              </div>
            )}
            <h5>Social</h5>
            <a href="#" className="me-2">
              <img
                src={process.env.PUBLIC_URL + "assets/images/github.png"}
                alt=""
                className="img-fluid"
              />
            </a>
            <a href="#" className="me-2">
              <img
                src={process.env.PUBLIC_URL + "assets/images/bb.png"}
                alt=""
                className="img-fluid"
                style={{ maxWidth: "46px" }}
              />
            </a>
            <a href="#">
              <img
                src={process.env.PUBLIC_URL + "assets/images/facebook.png"}
                alt=""
                className="img-fluid"
                style={{ maxWidth: "46px" }}
              />
            </a>
            <h5 className="mt-2">
              © 2022 Nom Studio Limited. — Privacy Policy Terms of Use
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstfooter;
