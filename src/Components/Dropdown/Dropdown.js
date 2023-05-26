import React from "react";
import { Link } from "react-router-dom";
const Dropdown = () => {
  return (
    <div>
      <div className="secondnave  d-none d-lg-block">
        <div className="container  belowmenu">
          <div className="row justify-content-end">
            <div className="col-1  pb-2 ">
              <Link class="nav-link6 hjyiu" to="/blog">
                Blog
              </Link>
            </div>
          </div>
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

export default Dropdown;
