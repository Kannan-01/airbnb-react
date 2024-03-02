import React from "react";
import { Container } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";
import "./Account.css";
import Reservation from "../../Components/Reservations/Reservations";
function Account() {
  return (
    <div className="mb-5">
      <Container>
        <Breadcrumb className="pt-4 pb-3 fw-bold">
          <Breadcrumb.Item className="breadcrumb-item">
            <Link to={"/"} className="link">
              Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Account</Breadcrumb.Item>
        </Breadcrumb>

        <h2 className="text-bold mb-4">My Account</h2>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className="row">
            <div className="col-2">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">My Details</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Reservations</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Hosted property</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>

            <div
              className="col-10 rounded"
              style={{
                backgroundColor: "white",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Container className="p-5">
                    <h2 className="fw-bold">
                      <span className="text-danger">Personal</span> information
                    </h2>
                    <hr />

                    <div className="row">
                      <div className="col-4 d-flex justify-content-center align-items-center p-5">
                        <div className="profile">
                          <img
                            src="https://cdn.icon-icons.com/icons2/2428/PNG/512/airbnb_black_logo_icon_147166.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-8">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            <div className="d-flex justify-content-between p-2">
                              <div>
                                <div>Legal name:</div>
                                <div className="small text-uppercase">
                                  kannan kb
                                </div>
                              </div>
                              <div>
                                <button className="btn-link text-dark border-0 bg-white small">
                                  Edit
                                </button>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item mt-2">
                            <div className="d-flex justify-content-between p-2">
                              <div>
                                <div>Email address:</div>
                                <div className="small">kbkannan2991</div>
                              </div>
                              <div>
                                <button className="btn-link text-dark border-0 bg-white small">
                                  Edit
                                </button>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item mt-2">
                            <div className="d-flex justify-content-between p-2">
                              <div>
                                <div>Phone number:</div>
                                <div className="small">
                                  9847114845
                                </div>
                              </div>
                              <div>
                                <button className="btn-link text-dark border-0 bg-white small">
                                  Edit
                                </button>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item mt-2">
                            <div className="d-flex justify-content-between p-2">
                              <div>
                                <div>Government ID:</div>
                                <div className="small">Uploaded</div>
                              </div>
                              <div>
                                <button className="btn-link text-dark border-0 bg-white small">
                                  Edit
                                </button>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item mt-2">
                            <div className="d-flex justify-content-between p-2">
                              <div>
                                <div>Address:</div>
                                <div className="small">Kandiara,bill house chandiroor</div>
                              </div>
                              <div>
                                <button className="btn-link text-dark border-0 bg-white small">
                                  Edit
                                </button>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item mt-2">
                            <div className="d-flex justify-content-between p-2">
                              <div>
                                <div>Emergency Number:</div>
                                <div className="small">
                                9776372767672
                                </div>
                              </div>
                              <div>
                                <button className="btn-link text-dark border-0 bg-white small">
                                  Edit
                                </button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Container>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <Container style={{minHeight:"30rem"}} className="p-5">
                    <h2 className="fw-bold">
                      <span className="text-danger">Your</span> reservations
                    </h2>
                    <hr />
                    <Reservation/>
                  </Container>
                </Tab.Pane>

                
                <Tab.Pane eventKey="third">
                  <Container style={{minHeight:"30rem"}} className="p-5">
                    <h2 className="fw-bold">
                      <span className="text-danger">Currently</span> hosting
                    </h2>
                    <hr />
                  </Container>
                </Tab.Pane>

              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default Account;
