import React from "react";

import { Col, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <footer>
      <Row className='fixed-bottom alert-primary text-center p-4'>
        <Col>Copyright &copy; Memory Box</Col>
      </Row>
    </footer>
  );
};

export default Footer;
