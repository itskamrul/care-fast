import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <div className="text-white footer-container pt-4 mt-5">
      <Container>
        <Row className="py-4">
          <Col md={4}>
            <h4 className="text-start">About us</h4>
            {/* <div
              style={{
                marginBottom: '16px',
                height: '3px',
                width: '120px',
                background: '#12C1AD',
              }}
            ></div> */}
            <span className="border-bottom border-1 border-light w-75 mt-2 d-block pb-2">
              Sitemap
            </span>
            <span className="border-bottom border-1 border-light w-75 mt-2 d-block pb-2">
              Privacy Policy
            </span>
            <span className="border-bottom border-1 border-light w-75 mt-2 d-block pb-2">
              Your Account
            </span>
            <span className="border-bottom border-1 border-light w-75 mt-2 d-block pb-2">
              Advanced Search
            </span>
            <span className="w-75 mt-2 d-block pb-2">Contact Us</span>
          </Col>
          <Col md={4}>
            <h4 className="text-start">Customer Service</h4>
            {/* <div
              style={{
                marginBottom: '16px',
                height: '3px',
                width: '120px',
                background: '#12C1AD',
              }}
            ></div> */}
            <span className="border-bottom border-1 border-light w-75 mt-2 d-block pb-2">
              Shipping Policy
            </span>
            <span className="border-bottom border-1 border-light w-75 mt-2 d-block pb-2">
              Compensation First
            </span>
            <span className="border-bottom border-1 border-light w-75 mt-2 d-block pb-2">
              My Account
            </span>
            <span className="w-75 mt-2 d-block pb-2">Return Policy</span>
          </Col>
          <Col md={4}>
            <h4 className="text-start">Contact Us</h4>
            {/* <div
              style={{
                marginBottom: '16px',
                height: '3px',
                width: '120px',
                background: '#12C1AD',
              }}
            ></div> */}
            <span className="d-flex gap-2 mt-4 align-items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
              Akhaura, Brahmonbaria.
            </span>
            <span className="d-flex gap-2 mt-4 align-items-center">
              <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
              +880 1740772443
            </span>
            <span className="d-flex gap-2 mt-4 align-items-center">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              mdkamrul2day@gmail.com
            </span>
          </Col>
        </Row>
      </Container>
      <div className="bg-dark text-center py-4">
        <span>
          Copyright © <span style={{ color: '#12C1AD' }}>CareFast</span> . All
          Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
