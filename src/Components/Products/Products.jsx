import React from "react";
import "./Product.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Products() {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <Card
              style={{ width: "322px" }}
              className="border-0 col-lg-3 col-md-6 col-sm-12 mb-5"
            >
              <Card.Img
                width="322"
                height="305"
                style={{ objectFit: "cover", borderRadius: "11px" }}
                variant="top"
                className="position-relative"
                src="https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?cs=srgb&dl=pexels-pixabay-358636.jpg&fm=jpg"
              />
              <div
                className="position-absolute"
                style={{ cursor: "pointer", right: 0, margin: "25px 40px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    fill: "rgb(255, 255, 255)",
                    height: "24px",
                    width: "24px",
                    overflow: "visible",
                  }}
                >
                  <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
                </svg>
              </div>

              <div className="cardBody">
                <div className="title text-capitalize">My property</div>
                <div className="overview text-muted text-capitalize">
                  <span>
                    <i className="fa-solid fa-location-dot text-danger"></i>
                  </span>
                  kochi kerala.
                </div>
                <div className="rate">
                  ₹3200/-
                  <span className="text-muted fw-medium">night</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
