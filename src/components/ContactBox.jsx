import React from "react";

const ContactBox = () => {
  return (
    <section className="section" id="contact">
      <div className="top-header">
        <h1>Get in touvh</h1>
        <span>Do you have a project in you mind contact me here</span>
      </div>
      <div className="row">
        <div className="col">
          <div className="contact-info">
            <h2>
              Find Me <i className="uil uil-conner-right-dow"></i>
            </h2>
            <p>
              <i className="uil uil-envelope"></i>Email: 664259010@webmail.npeu.ac.th
            </p>
            <p>
              <i className="uil uil-envelope"></i>Phone: Tel:+66 82 234 5774
            </p>
          </div>
        </div>
        <div className="col">
          <div className="form-control">
            <div className="from-inputs">
              <input
                type="text"
                className="input-field"
                placeholder="Name"
              ></input>
              <input
                type="email"
                className="input-field"
                placeholder="Email"
              ></input>
              <div className="text-area">
                <textarea placeholder="Message"></textarea>
              </div>
              <div className="form-buttom">
                <button className="btn">
                  Send <i className="uil uil-message"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBox;
