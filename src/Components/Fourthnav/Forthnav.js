import React, { useState } from "react";
import { Link } from "react-router-dom";

import Blackdropdown from "../Blackdropdown/Blackdropdown";
const Forthnav = () => {
  const [show, setShow] = useState(false);
  const [click, setClick] =useState(false)

  return (
    <div>
      <nav
        class="navbar navbar-expand-lg  secondnave"
        style={{ background: "#000000" }}
      >
        <div class="container navcont">
          <Link class="navbar-brand" to="/">
            <img src={process.env.PUBLIC_URL + "assets/images/nomst.png"} />
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
            <i
              class={click ? "fa-solid fa-xmark" : "fa-solid fa-bars-staggered"}
              style={{ color: "#ffffff" }}
            ></i>
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
              <li class="nav-item d-none d-lg-block">
                <p class="nav-link ">
                  <img
                    src={process.env.PUBLIC_URL + "assets/images/whitetog.svg"}
                    alt=""
                    className="img-fluid nomtog"
                    onClick={() => setShow(!show)}
                  />
                </p>
              </li>
              <li class="nav-item d-block d-lg-none">
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
      {show && <Blackdropdown />}
    </div>
  );
};

export default Forthnav;
