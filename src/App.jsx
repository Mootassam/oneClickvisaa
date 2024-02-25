import "./App.css";
import React, { useEffect, useRef, useState } from "react";

function App() {
  const [active, setActive] = useState(false);
  const [entry, setEntry] = useState("single");
  const [days, setDays] = useState("30");
  const [price, setPrice] = useState(125);
  const [express, setExpress] = useState(false);

  const [visa, setVisa] = useState(300);

  const toggle = () => {
    setActive(!active);
  };

  const changeDays = (days) => {
    setDays(days);
  };

  const CalculePrice = () => {
    if (express === false) {
      switch (days) {
        case "14":
          setPrice(entry === "single" ? 125 : 300); // Adjust as needed
          setDays(entry === "single" ? "14" : "30");
          break;
        case "30":
          setPrice(entry === "single" ? 150 : 300);
          break;
        case "60":
          setPrice(entry === "single" ? 250 : 500);
          break;
        default:
        // handle default case if needed
      }
    } else if (express === true) {
      switch (days) {
        case "14":
          setPrice(entry === "single" ? 225 : 400); // Adjust as needed
          setDays(entry === "single" ? "14" : "30");
          break;
        case "30":
          setPrice(entry === "single" ? 250 : 400);
          break;
        case "60":
          setPrice(entry === "single" ? 350 : 600);
          break;
        default:
        // handle default case if needed
      }
    }
  };

  useEffect(() => {
    CalculePrice();
  }, [active, days, entry, express]);
  return (
    <>
      <>
        <header className="header">
          <div className="navbar-area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="#home">
                      <img
                        src="assets/images/logo/Logo.png"
                        alt="Logo"
                        height={50}
                      />
                    </a>
                    <button
                      className={`navbar-toggler ${active ? "active" : ""}`}
                      onClick={() => {
                        toggle();
                      }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="toggler-icon" />
                      <span className="toggler-icon" />
                      <span className="toggler-icon" />
                    </button>
                    <div
                      className={`collapse navbar-collapse sub-menu-bar ${
                        active ? "show" : ""
                      }`}
                      id="navbarSupportedContent"
                    >
                      <div className="ms-auto">
                        <ul id="nav" className="navbar-nav ms-auto">
                          <li
                            className="nav-item"
                            onClick={() => setActive(false)}
                          >
                            <a className="page-scroll active" href="#home">
                              Home
                            </a>
                          </li>
                          <li
                            className="nav-item"
                            onClick={() => setActive(false)}
                          >
                            <a className="page-scroll" href="#features">
                              Steps
                            </a>
                          </li>
                          <li
                            className="nav-item"
                            onClick={() => setActive(false)}
                          >
                            <a className="page-scroll" href="#about">
                              Process
                            </a>
                          </li>
                          <li
                            className="nav-item"
                            onClick={() => setActive(false)}
                          >
                            <a className="page-scroll" href="#pricing">
                              Pricing
                            </a>
                          </li>
                          {/* <li class="nav-item">
                  <a class="page-scroll" href="#team">Team</a>
                </li> */}
                        </ul>
                      </div>
                    </div>
                    <div className="header-btn">
                      <a
                        href="https://wa.me/+9618160924"
                        target="_blank"
                        className="main-btn btn-hover"
                      >
                        Apply Now !!
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section id="home" className="hero-section">
          <img
            src="/assets/images/background.png"
            alt="FlagUAE"
            className="flag"
          />
          <img
            src="/assets/images/border.png"
            alt="borderTop"
            className="image__border"
          />
          <img
            src="/assets/images/backgroundmobile.png"
            alt="homeagebackground"
            className="mobilebackground"
          />
          <div className="hero-wrapper">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-10">
                  <div className="hero-content">
                    <h1>Apply UAE Visa Online</h1>
                    <p>
                      Effortlessly apply for your UAE visa online with our
                      user-friendly platform. Streamlined process for a seamless
                      travel experience.
                    </p>
                    <a href="#features" className="main-btn btn-hover">
                      Read More
                    </a>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 offset-xxl-1">
                  <div className="hero-image text-center text-lg-start"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="feature-section">
          <div className="feature-wrapper">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-11">
                  <div className="section-title text-center mb-60">
                    <h2>
                      Only 3 Steps <br className="d-block" />
                      to Apply Visa
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="single-feature-wrapper">
                    <div className="single-feature">
                      <div className="feature-icon color-1">
                        <i className="lni lni-display size" />
                      </div>
                      <div className="feature-content">
                        <h4>Apply Online</h4>
                        <p>
                          You can apply online anytime from anywhere in 3 simple
                          steps.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-feature-wrapper">
                    <div className="single-feature">
                      <div className="feature-icon color-2">
                        <i className="lni lni-credit-cards size" />
                      </div>
                      <div className="feature-content">
                        <h4>Pay Online</h4>
                        <p>
                          You can pay online with debit or credit card sdfgsd.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-feature-wrapper">
                    <div className="single-feature">
                      <div className="feature-icon color-3">
                        <i className="lni lni-envelope size" />
                      </div>
                      <div className="feature-content">
                        <h4>Get Visa Online</h4>
                        <p>
                          Get e-Visa by email. You just need to print and
                          travel.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="about-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-last order-lg-first">
                <div className="about-image text-center text-lg-end">
                  <img src="assets/images/pay.jpg" alt="pay" />
                </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div className="about-content-wrapper space">
                  <div className="numbers">1</div>
                  <div className="section-title">
                    <h2 className="mb-20">
                      Apply Online Dubai Visa Application
                    </h2>
                    <p className="mb-30">
                      Simple application form: <br />
                      1. Choose your nationality (Your country) <br />
                      2. Choose type of Dubai visa (Single or multi entry visa)
                      <br />
                      3. Choose Visa option according to stay duration
                      <br />
                      4. Fill the contact details <br />
                      5. Choose processing time
                    </p>
                    <a
                      href="https://wa.me/+9618160924"
                      target="_blank"
                      className="main-btn btn-hover animation"
                    >
                      <i className="lni lni-whatsapp" /> Apply Now !!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="feature-2" className="feature-section-2 payonline">
          <div className="feature-wrapper-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-10">
                  <div className="feature-content-wrapper space">
                    <div className="numbers">2</div>
                    <div className="section-title">
                      <h2 className="mb-30">
                        Upload Documents <br className="d-none d-sm-block" />
                        for Dubai Visa Application
                      </h2>
                      <p className="mb-30 text__align">
                        <span>
                          1. Upload Passport (Scanned copy or take clear picture
                          with mobile phone).
                        </span>{" "}
                        &nbsp;
                        <span />
                        2. White background picture of applicant (Take Selfie
                        standing in front of white wall)
                      </p>
                      <a
                        href="https://wa.me/+9618160924"
                        target="_blank"
                        className="main-btn btn-hover animation"
                      >
                        <i className="lni lni-whatsapp" /> whatsApp Now!!
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-image text-lg-end">
                    <img
                      src="assets/images/upload.png"
                      alt=""
                      style={{ inlineSize: 600 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="about-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-last order-lg-first">
                <div className="about-image text-center text-lg-end">
                  <img src="assets/images/stripe.jpg" alt="StripePayment" />
                </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div className="about-content-wrapper space">
                  <div className="numbers">3</div>
                  <div className="section-title">
                    <h2 className="mb-20">
                      Pay Online for Dubai Visa Application
                    </h2>
                    <p className="mb-30">
                      1. Pay online with credit or debit card <br />
                      2. Google Pay <br />
                      3. Apple Pay <br />
                      <br />
                    </p>
                    <a
                      href="https://wa.me/+9618160924"
                      target="_blank"
                      className="main-btn btn-hover animation"
                    >
                      <i className="lni lni-whatsapp" /> Apply Now !!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="feature-2" className="feature-section-2 payonline">
          <div className="feature-wrapper-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-10">
                  <div className="feature-content-wrapper space">
                    <div className="numbers">4</div>
                    <div className="section-title">
                      <h2 className="mb-30">
                        Get your <br className="d-none d-sm-block" />
                        Dubai Visa Online
                      </h2>
                      <p className="mb-30">
                        After visa approval by immigration, Our team
                        will deliver you e-Visa copy by email and whatsapp. You
                        can print the e-visa or just show pdf copy at airport
                        counter to travel.
                      </p>
                      <a
                        href="https://wa.me/+9618160924"
                        target="_blank"
                        className="main-btn btn-hover animation"
                      >
                        <i className="lni lni-whatsapp" /> whatsApp Now!!
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-image text-lg-end">
                    <img
                      src="assets/images/samplepassport.webp"
                      alt="simplePassport"
                      style={{ inlineSize: 600 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="about-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-last order-lg-first">
                <div className="about-image text-center text-lg-end">
                  <img src="assets/images/news.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div className="about-content-wrapper space">
                  <div className="numbers">5</div>
                  <div className="section-title">
                    <h2 className="mb-20">
                      Print your Visa
                      <br className="d-none d-sm-block" />
                      Application and travel.
                    </h2>
                    <p className="mb-30">
                      our travel plans made simple with easy access to your visa
                      documentation.
                      <br />
                    </p>
                    <a
                      href="https://wa.me/+9618160924"
                      target="_blank"
                      className="main-btn btn-hover animation"
                    >
                      <i className="lni lni-whatsapp " /> Apply Now !!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="pricing-section priccing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-8 col-xl-7 col-lg-8 col-md-10">
                <div className="section-title text-center">
                  <h2>
                    Online Dubai Visa
                    <br className="d-block" />
                    Application Portal
                  </h2>
                  <p>Apply Dubai visa from anywhere online anytime.</p>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-sm-10 items">
                {/* <div className="">
                  <div className="pricing-body">
                    <form>
                      <div className="form__group">
                        <div>
                          <label htmlFor="Type">Visa Type</label>
                          <div className="type__visa">
                            <div
                              onClick={() => setEntry("single")}
                              className={`${
                                entry === "single" ? "price__active" : ""
                              }`}
                            >
                              Single Entry
                            </div>
                            <div
                              onClick={() => setEntry("multi")}
                              className={`${
                                entry === "multi" ? "price__active" : ""
                              }`}
                            >
                              Multi Entry
                            </div>
                          </div>
                        </div>

                        <div className="days__visa">
                          {entry === "single" ? (
                            <div
                              onClick={() => changeDays("14")}
                              className={`${
                                days === "14" ? "price__active" : ""
                              }`}
                            >
                              14 Days Visa
                            </div>
                          ) : (
                            ""
                          )}
                          <div
                            onClick={() => changeDays("30")}
                            className={`${
                              days === "30" ? "price__active" : ""
                            }`}
                          >
                            30 Days Visa
                          </div>
                          <div
                            onClick={() => changeDays("60")}
                            className={`${
                              days === "60" ? "price__active" : ""
                            }`}
                          >
                            60 Days visa
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div> */}
                <div className="single-pricing basic">
                  <div className="pricing-header amount">
                    <div className="time">
                      <p>Processing Time</p>
                      <div className="processing__time">
                        <div
                          className="radio__group"
                          onClick={() => {
                            setExpress(false);
                            setVisa(500);
                          }}
                        >
                          <input
                            type="radio"
                            name="normal"
                            checked={!express}
                          />
                          <p className="package-name">
                            1 Month (48 – 72 Hours)
                          </p>
                        </div>
                        <div
                          className="radio__group"
                          onClick={() => {
                            setExpress(true);
                            setVisa(700);
                          }}
                        >
                          <input
                            type="radio"
                            name="normal"
                            id=""
                            checked={express}
                          />
                          <p className="package-name">
                            2 Months (48 – 72 Hours)
                          </p>
                        </div>
                      </div>
                    </div>
                    <h2 className="amount__">
                      <span className="amoutn">{visa}</span>
                      <span className="currency">AED</span>
                    </h2>
                  </div>
                  <a
                    href="https://wa.me/+9618160924"
                    target="_blank"
                    className="main-btn btn-hover animation"
                  >
                    <i className="lni lni-whatsapp" /> Apply Now !!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="copyright">
              <p>Copyright 2024 OneClick Visa. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </>
    </>
  );
}

export default App;
