import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import "./Reservations.css";
function Reservation() {
  return (
    <>
      <Card className="w-100 border-0">
        <Card.Body>
          <Accordion>
            <Accordion.Item eventKey="0" className="border-0 shadow-0">
              <Accordion.Header>
                <Card.Title className="fw-bold">
                  AmandaVille3: Budget Room Center
                </Card.Title>
              </Accordion.Header>

              <Accordion.Body>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <div className="fw-bold text-danger btn border-0 ms-2">
            Cancel reservation
          </div>
        </Card.Body>
        <hr />
      </Card>

      <Card className="w-100 border-0">
        <Card.Body>
          <Accordion>
            <Accordion.Item eventKey="0" className="border-0 shadow-0">
              <Accordion.Header>
                <Card.Title className="fw-bold">
                  AmandaVille3: Budget Room Center
                </Card.Title>
              </Accordion.Header>

              <Accordion.Body>
                {/* <Card.Text>
                </Card.Text> */}
                <div className="row">
                  <div className="col-6">
                    <div className="reservation-details">
                      <h5 className="fw-bold">Reservation details</h5>
                      <hr />
                      <p>
                        <strong>Check-in Date:</strong>{" "}
                        March 6, 2024
                      </p>
                      <p>
                        <strong>Check-out Date:</strong> March 11, 2024
                      </p>
                      <h5 className="fw-bold">Billing address</h5>
                      <hr />
                      <p>
                        <strong>Rate per Night:</strong> [Your Rate]
                      </p>
                      <p>
                        <strong>Total Accommodation Charges:</strong> [Total
                        Amount]
                      </p>
                      <h5 className="fw-bold">
                        Payment information
                      </h5>
                      <hr />
                      <p>
                        <strong>Subtotal:</strong> [Accommodation Charges +
                        Additional Charges]
                      </p>
                      <p>
                        <strong>Tax (X%):</strong> [Tax Amount]
                      </p>
                      <p>
                        <strong>Total Amount Due:</strong> [Subtotal + Tax]
                      </p>
                    </div>
                  </div>

                  <div className="col-6">
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

                      <div className="cardBody">
                        <div className="title fw-bold text-capitalize">
                          AmandaVille3: Budget Room Center
                        </div>
                        <div className="overview text-muted text-capitalize">
                          <span>
                            <i className="fa-solid fa-location-dot text-danger"></i>
                          </span>
                          Kochi, Kerala
                        </div>
                        <div className="rate">
                          ₹3200/-
                          <span className="text-muted fw-medium">night</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <div className="fw-bold text-danger btn border-0 ms-2">
            Cancel reservation
          </div>
        </Card.Body>
        <hr />
      </Card>
    </>
  );
}

export default Reservation;
