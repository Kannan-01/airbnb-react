import React from 'react'
import "./Header.css"
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import brandlogo from "../../assets/Images/airbnb.png"

function Header() {
  return (
    <div>
         <Navbar style={{ borderBottom: '1px solid #ccc' }}>
      <Navbar.Brand as={Link} to="/">
        <img width="118" height="64" src={brandlogo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle style={{ border: 'none', boxShadow: 'none' }}>
        <div
          style={{
            width: '45px',
            height: '45px',
            backgroundColor: 'rgb(255, 56, 92)',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <i style={{ color: 'white' }} className="fa-solid fa-user fs-4 p-2"></i>
        </div>
      </Navbar.Toggle>
      <Navbar.Collapse>
        <Nav className="d-flex justify-content-center text-center">
          <Nav.Item>
            <Nav.Link as={Link} to="/wishlists" className="btn">
              Wishlists
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/host" className="btn">
              Host your home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/hostings" className="btn">
              Currently Hosting
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/reservations" className="btn">
              Your reservations
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/account" className="btn">
              Account details
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            
            <Button variant="danger" className="fw-bold">
              Logout
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Header