import React from "react";
import Card from "./Card";
import { Col, Row } from "react-bootstrap";

const Results = () => {
  return (
    <>
      <Row className="container mt-3">
        <Col>
          <Card />
        </Col>
        <Col>
          <Card />
        </Col>
        <Col>
          <Card />
        </Col>
      </Row>
    </>
  );
};

export default Results;
