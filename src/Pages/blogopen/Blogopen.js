import React from "react";
import Firstfooter from "../../Components/Firstfooter/Firstfooter";
import Thirdnav from "../../Components/Thirdnav/Thirdnav";
import { Link } from "react-router-dom";
const Blogopen = () => {
  return (
    <div>
      <Thirdnav />
      <div style={{ background: "#000000" }}>
        <div className="container">
          <div className="row justify-content-center blogopen mt-5 mt-lg-0">
            <div className="col-md-9 py-5">
              <h4>
                Canva Review: Designing Tool For Beginners and Professionals
              </h4>
              <span className="pe-2 blogline">By Jhon Adeeb</span>
              <div className="d-inline "></div>
              <span className="ps-2">12 June, 2020</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center blogopen">
          <div className="col-md-9 my-3 my-md-5">
            <img
              src={process.env.PUBLIC_URL + "assets/images/Rectangle 84.png"}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-9 mt-3 mt-md-5">
            <h4 style={{ color: "#000000" }}>
              Canva Review: Designing Tool For Beginners and Professionals
            </h4>
            <p>
              The world of graphics design has seen phenomenal growth over the
              last few years. Designs unimaginable in the past are easy to
              create today. Designing tools and suites have discovered crazy,
              creative geniuses from all over the world. One of these
              high-performing design tools is Canva. It opens up a wide array of
              easy, attractive designs that fulfill personal as well as
              professional interests. If you are a budding designer, Canva is a
              name you need to remember.
            </p>
          </div>
          <div className="col-md-9 mt-2 mt-md-4">
            <h4 style={{ color: "#000000" }}>What is Canva?</h4>
            <p>
              Canva is the rising star of the graphics design industry. It is a
              free website that lets you create personalized images or social
              media posts. It comes with preset backgrounds and photos to build
              visually rich infographics, marketing materials, books, event
              planners, or scrapbooks. It offers a huge collection of in-built
              templates. Its design options transform any ordinary outline into
              brochures, flyers, business cards, resumes, presentations,
              invitations, logos, and posters. It gets you social media ready in
              a jiffy. Think of it as a 3-in-1 graphics tool, photo editor and
              desktop publishing program
            </p>
          </div>
          <div className="col-md-9 mt-2 mt-md-4">
            <h4 style={{ color: "#000000" }}>How does it work?</h4>
            <p>
              Create your new account or log in using Google or Facebook
              Profiles. You can start working right away.For example, to edit
              your selfie, upload it, and drag to fit into a selected layout.
              Next, pick a font and set up its size, color, and spacing. You can
              also insert shapes and stickers into it and adjust as you like.
              Check out how it looks with different filters. A finished design
              or a photo can be downloaded, printed, shared, or saved to your
              accounts in different formats. Canva helps novices build
              eye-catching designs. Its colossal catalog of theme-based
              templates and images allows a newbie to work with ease. You can
              straighten, trim, sharpen or blur out photos and use a grid for
              reference. Have fun with icons, illustrations, stickers, charts,
              and frames if you use Canva for pleasure. You can change the
              texture of a flat image to give it more depth or create a washed-
              out look. If you hit a snag, click on the Help tab at the bottom
              right of your dashboard. Serious designers too love Canva as it
              brings together like-minded collaborators.
            </p>
          </div>
          <div className="col-md-9 mt-2 mt-md-4">
            <h4 style={{ color: "#000000" }}>Key Features</h4>
            <p>
              Canva is the rising star of the graphics design industry. It is a
              free website that lets you create personalized images or social
              media posts. It comes with preset backgrounds and photos to build
              visually rich infographics, marketing materials, books, event
              planners, or scrapbooks. It offers a huge collection of in-built
              templates. Its design options transform any ordinary outline into
              brochures, flyers, business cards, resumes, presentations,
              invitations, logos, and posters. It gets you social media ready in
              a jiffy. Think of it as a 3-in-1 graphics tool, photo editor and
              desktop publishing program
            </p>
          </div>
          <div className="col-md-9 mt-2 mt-md-4">
            <h4 style={{ color: "#000000" }}>
              Service Features & Technical Details
            </h4>
            <p>
              Create your new account or log in using Google or Facebook
              Profiles. You can start working right away.For example, to edit
              your selfie, upload it, and drag to fit into a selected layout.
              Next, pick a font and set up its size, color, and spacing. You can
              also insert shapes and stickers into it and adjust as you like.
              Check out how it looks with different filters. A finished design
              or a photo can be downloaded, printed, shared, or saved to your
              accounts in different formats. Canva helps novices build
              eye-catching designs. Its colossal catalog of theme-based
              templates and images allows a newbie to work with ease. You can
              straighten, trim, sharpen or blur out photos and use a grid for
              reference. Have fun with icons, illustrations, stickers, charts,
              and frames if you use Canva for pleasure. You can change the
              texture of a flat image to give it more depth or create a washed-
              out look. If you hit a snag, click on the Help tab at the bottom
              right of your dashboard. Serious designers too love Canva as it
              brings together like-minded collaborators.
            </p>
          </div>
          <div className="col-12 mt-2 mt-md-5 pt-md-5 pt-2">
            <hr />
          </div>
          <div className="col-12 my-2 my-md-5 py-2 py-md-5">
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <h4 style={{ color: "#000000" }}>
                Get in touch with us{" "}
                <i
                  class=" me-2 fa-solid fa-arrow-right-long float-end float-md-none"
                  style={{ color: "#000000" }}
                ></i>
              </h4>
            </Link>
          </div>
        </div>
      </div>
      <Firstfooter />
    </div>
  );
};

export default Blogopen;
