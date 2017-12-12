import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";
import { selectGender, selectAge } from "../Actions/Actions";
import Logo from "../img/Crealo.png";

export const Brand = () => {
  return (
    <img
      src={Logo}
      width="250"
      height="150"
      className="img-responsive center-block"
    />
  );
};

export const Menu = ({ genderSelect, title, ageSelected }) => {
  return (
    <div className="container-fluid blockAll">
      <Grid fluid className="text-center">
      <Brand/>
        <hr />
        <p className="textDesign text-justify">
          Personalizar tus prendas con tus propios diseños desde un mismo lugar,
          lo tienes al alcance de un click. Entra para dejar volar tu
          imaginación y para empezar a familiarizarte con todas las funciones de
          esta plataforma.
        </p>
        {!genderSelect && <Gender />}
        {genderSelect && <Age />}
        {ageSelected && <Redirect to="/layers" />}
      </Grid>
    </div>
  );
};

const Gender = () => {
  return (
    <Row>
      <h2>¡Primero selecciona tu genero!</h2>
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

const Age = () => {
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
          Bebe
        </div>
      </Col>
    </Row>
  );
};
