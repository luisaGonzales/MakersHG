import React, { Component } from "react";
import { selectAge } from "../Actions/Actions";
import { Grid, Row, Col } from "react-bootstrap";

export const Age = () => {
    return (
      <Row className="textAge">
        <h2>Selecciona tu edad</h2>
        <Col md={4}>
          <div
            onClick={() => {
              selectAge(0);
            }}
          >
            Adulto
          </div>
        </Col>
        <Col md={4}>
          <div
            onClick={() => {
              selectAge(1);
            }}
          >
            Niño/Niña
          </div>
        </Col>
        <Col md={4}>
          <div
            onClick={() => {
              selectAge(2);
            }}
          >
            Bebé
          </div>
        </Col>
      </Row>
    );
  };