import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Secondnav = () => {
  const [click, setClick] =useState(false)

  return (
    <div>
      <nav class="navbar navbar-expand-lg  secondnave">
        <div class="container navcont">
          <Link class="navbar-brand" to="/">
            <img src={process.env.PUBLIC_URL + "assets/images/logo.png"} />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setClick(!click)}

          >
            <i class={click ? "fa-solid fa-xmark" : "fa-solid fa-bars-staggered"}></i>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/services">
                  Our Services
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/projects">
                  Our Projects
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/contact">
                  Contact Us
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/blog">
                  Blog
                </Link>
              </li>
              <li class="nav-item d-block d-lg-none">
                <Link class="nav-link " to="/about">
                  About us
                </Link>
              </li>
              <li class="nav-item d-block d-lg-none">
                <a class="nav-link " href="#">
                  Store
                </a>
              </li>
              <li class="nav-item d-block d-lg-none">
                <Link class="nav-link " to="/workshop">
                  Workshop
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="secondnave d-none d-lg-block">
        <div className="container belowmenu">
          <div className="row justify-content-end">
            <div className="col-1  pb-2 ">
              <Link class="nav-link6 hjyiu" to="/about">
                About us
              </Link>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-1 py-2 ">
              <a class="nav-link6" href="#">
                Store
              </a>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-1 py-2 ">
              <Link class="nav-link6" to="/workshop">
                Workshop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondnav;
