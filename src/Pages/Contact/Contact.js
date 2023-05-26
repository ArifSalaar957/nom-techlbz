import React from "react";
import FirstNav from "../../Components/FirstNav/FirstNav";
import SecondFooter from "../../Components/Secondfooter/SecondFooter";
import emailjs from "emailjs-com";
import Typewriter from "typewriter-effect";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_snorutg",
        "template_lvji0i9",
        e.target,
        "LWkOp1NyVLIV12HFE"
      )
      .then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <FirstNav />
      <div style={{ background: "#000000" }}>
        <div className="container">
          <div className="row contactpage mt-5 mt-lg-0 pt-5 pt-lg-0">
            <div className="col-12 text-center mb-2 mb-md-5 pb-2 pb-md-5">
              <h4>
                {" "}
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Fill the form to contact.")
                      .changeDelay(1)
                      .start();
                  }}
                  options={{
                    delay: 30,
                  }}
                />{" "}
              </h4>
            </div>
          </div>
          <div className="row text-center justify-content-center formcontact">
            <div className="col-12 col-lg-5 mb-2 mb-md-5 pb-2 pb-md-5">
              <form onSubmit={sendEmail}>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    name="firstname"
                    placeholder="First name"
                    required
                  />
                  <label for="floatingInput">First name</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    name="lastname"
                    placeholder="Last name"
                    required
                  />
                  <label for="floatingInput">Last name</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    placeholder="You email"
                    required
                  />
                  <label for="floatingInput">Email</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    name="country"
                    placeholder="Your Country"
                    required
                  />
                  <label for="floatingInput">Country</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    name="phone"
                    placeholder="Your Phone"
                    required
                  />
                  <label for="floatingInput">Phone</label>
                </div>
                <select
                  name="aboutus"
                  id=""
                  className="w-100 mb-3 seclll"
                  required
                >
                  <option>How did you hear about us?</option>
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                  <option>option 4</option>
                </select>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    name="message"
                    placeholder="Your message"
                    required
                  />
                  <label for="floatingInput">Message</label>
                </div>
                <button
                  type="submit"
                  className="w-100 mt-5 mt-md-5 mb-5 mb-md-5 border-0 py-2 Submitformherr"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <SecondFooter />
      </div>
    </div>
  );
};

export default Contact;
