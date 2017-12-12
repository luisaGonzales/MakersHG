import React, { Component } from "react";
import { selectGender } from "../Actions/Actions";
import { Grid, Row, Col } from "react-bootstrap";

export const Gender = () => {
    return (
      <Row>
        <h2>¡Primero selecciona tu género!</h2>
        <Col md={6} sm={6} lg={6} xs={6}>
          <div
            className="selectGender-gender center-block img-responsive"
            id="male"
            onClick={() => {
              selectGender("male");
            }}
          >
          </div>
        </Col>
        <Col md={6} sm={6} lg={6} xs={6}>
          <div
            id="female"
            className="center-block img-responsive"
            onClick={() => {
              selectGender("female");
            }}
          >
          </div>
        </Col>
      </Row>
    );
  };
  