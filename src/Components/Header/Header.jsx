import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import brandLogo from "../../assets/Images/airbnb.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleClose = () => {
    setShowRegister(false);
    setShowLogin(false);
  };

  return (
    <div style={{ borderBottom: "1px solid #ccc", position: "sticky" }}>
      <Container>
        {[false].map((expand) => (
          <Navbar key={expand} expand={expand}>
            <Navbar.Brand>
              <img src={brandLogo} alt="" width="118" height="64" />
            </Navbar.Brand>

            <div className="d-none d-sm-block d-md-block">
              <div className="d-flex justify-content-center align-items-center">
                <input
                  className="form-control me-2"
                  style={{
                    height: "2.8rem",
                    width: "35rem",
                    borderRadius: "44px",
                  }}
                  placeholder="Search for destinations and types"
                  aria-label="Search"
                />
                <button
                  style={{
                    marginLeft: "-50px",
                    width: "2rem",
                    height: "2rem",
                    backgroundColor: "rgb(255, 56, 92)",
                    color: "white",
                  }}
                  className="btn rounded-circle d-flex justify-content-center align-items-center"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>

            <Navbar.Toggle
              className="border-0 navbar-toggler"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            >
              <span>
                {" "}
                <div
                  style={{
                    width: "45px",
                    height: "45px",
                    backgroundColor: "rgb(255, 56, 92)",
                  }}
                  className="rounded-circle d-flex justify-content-center align-items-center"
                >
                  <i
                    style={{ color: "white" }}
                    className="fa-solid fa-user fs-4 p-2"
                  ></i>
                </div>
              </span>
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={brandLogo} alt="" width="118" height="64" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="ms-3 flex-grow-1 pe-3">
                  <Nav.Link
                    className="fw-bold"
                    onClick={() => setShowLogin(true)}
                  >
                    Log <span className="text-danger">in</span>
                  </Nav.Link>
                  <Nav.Link
                    className="fw-bold"
                    onClick={() => setShowRegister(true)}
                  >
                    Sign <span className="text-danger">up</span>
                  </Nav.Link>
                  <Nav.Item>
                    <Link className="nav-link fw-bold" to={"/account"}>
                      Account
                    </Link>
                  </Nav.Item>
                </Nav>

                <Form className="d-flex justify-content-center align-items-center">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 form-control"
                    aria-label="Search"
                    style={{ borderRadius: "44px" }}
                  />
                  <Button
                    style={{
                      marginLeft: "-50px",
                      width: "2rem",
                      height: "2rem",
                      backgroundColor: "rgb(255, 56, 92)",
                      color: "white",
                    }}
                    className="btn rounded-circle d-flex justify-content-center align-items-center border-0"
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar>
        ))}

        {/* Login Modal */}
        <Modal
          show={showLogin}
          onHide={handleClose}
          centered
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {" "}
              <h6 className="text-center">Login</h6>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1 style={{ fontSize: "22px" }}>
              <span className="text-dark">Welcome to </span>
              <span className="fw-bolder">Airbnb</span>
            </h1>

            {/* email */}
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>

            {/* password */}
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>

            {/* button */}
            <div className="d-grid">
              <Button
                variant="danger"
                className="btn rounded text-white"
                style={{ backgroundColor: "#ff385c" }}
                type="submit"
              >
                Login
              </Button>

              <div className="text-center mt-4">
                <p>
                  New user?
                  <a
                    style={{ color: "#ff385c", cursor: "pointer" }}
                    className="text-decoration-none ms-1"
                    onClick={() => {
                      setShowLogin(false);
                      setShowRegister(true);
                    }}
                  >
                    Register here
                  </a>
                </p>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        {/* Register Modal */}
        <Modal
          show={showRegister}
          onHide={handleClose}
          centered
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {" "}
              <h6 className="text-center">Sign Up</h6>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1 style={{ fontSize: "22px" }}>
              <span className="text-dark">Welcome to </span>
              <span className="fw-bolder">Airbnb</span>
            </h1>
            {/* First name */}
            <FloatingLabel controlId="fname" label="First name">
              <Form.Control type="text" placeholder="First name" />
            </FloatingLabel>

            {/* Last name */}
            <FloatingLabel controlId="lname" label="Last name" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Last name"
                aria-describedby="nameHelp"
              />
              <Form.Text id="nameHelp">
                Make sure it matches the name on your government ID.
              </Form.Text>
            </FloatingLabel>

            {/* date of birth */}
            <FloatingLabel
              controlId="dob"
              label="Date of Birth"
              className="mb-3"
            >
              <Form.Control type="date" placeholder="Date of birth" />
              <Form.Text id="dobHelp">
                To sign up, you need to be at least 18.
              </Form.Text>
            </FloatingLabel>

            {/* email */}
            <FloatingLabel
              controlId="email"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="Email address" />
              <Form.Text id="emailHelp">
                We'll email you trip confirmations and receipts.
              </Form.Text>
            </FloatingLabel>

            {/* password */}
            <FloatingLabel
              controlId="password"
              label="Password"
              className="mb-4"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>

            {/* button */}
            <div className="d-grid">
              <Button
                variant="danger"
                className="btn rounded text-white"
                style={{ backgroundColor: "#ff385c" }}
                type="submit"
              >
                Sign up
              </Button>

              <div className="text-center mt-4">
                <p>
                  Already registered?
                  <a
                    style={{ color: "#ff385c", cursor: "pointer" }}
                    className="text-decoration-none ms-1"
                    onClick={() => {
                      setShowRegister(false);
                      setShowLogin(true);
                    }}
                  >
                    login
                  </a>
                </p>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}

export default Header;
