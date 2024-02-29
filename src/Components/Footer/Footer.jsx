import React from "react";
import brandLogo from "../../assets/Images/airbnb.png";
import "./Footer.css"
function Footer() {
  return (
    <footer
      style={{ borderTop: "1px solid #ccc" }}
      className="bd-footer py-4 py-md-5"
    >
      <div className="container py-4 py-md-5 text-body-secondary">
        <div className="row">
          <div className="col-lg-3">
            <a
              className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none"
              aria-label="Bootstrap"
            >
              <span>
                <img width="118" height="64" src={brandLogo} alt="" />
              </span>
            </a>
            <ul
              className="list-unstyled"
              style={{ borderBottom: "none !important" }}
            >
              <li className="mb-2">
                Airbnb, Inc. is an American San Francisco-based company
                operating an online marketplace for short- and long-term
                homestays and experiences. The company acts as a broker and
                charges a commission from each booking
              </li>
              <li className="mb-2">Currently v1.0.0.</li>
            </ul>
          </div>

          <div className="col-sm-12 col-lg-3 offset-lg-1">
            <h5>Support</h5>
            <ul className="list-unstyled heads">
              <li className="mb-2">
                <a>Help Centre</a>
              </li>
              <li className="mb-2">
                <a>AirCover</a>
              </li>
              <li className="mb-2">
                <a>Anti-discrimination</a>
              </li>
              <li className="mb-2">
                <a>Disability support</a>
              </li>
              <li className="mb-2">
                <a>Cancellation options</a>
              </li>
              <li className="mb-2">
                <a>Report neighbourhood concern</a>
              </li>
            </ul>
          </div>

          <div className="col-sm-12 col-lg-3">
            <h5>Hosting</h5>
            <ul className="list-unstyled heads">
              <li className="mb-2">
                <a>Airbnb your home</a>
              </li>
              <li className="mb-2">
                <a>AirCover for Hosts</a>
              </li>
              <li className="mb-2">
                <a>Hosting resources</a>
              </li>
              <li className="mb-2">
                <a>Community forum</a>
              </li>
              <li className="mb-2">
                <a>Hosting responsibly</a>
              </li>
            </ul>
          </div>

          <div className="col-sm-12 col-lg-2">
            <h5>Airbnb</h5>
            <ul className="list-unstyled heads">
              <li className="mb-2">
                <a>Newsroom 5</a>
              </li>
              <li className="mb-2">
                <a>New features</a>
              </li>
              <li className="mb-2">
                <a>Careers</a>
              </li>
              <li className="mb-2">
                <a>Investors</a>
              </li>
              <li className="mb-2">
                <a>Airbnb.org emergency stays</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
