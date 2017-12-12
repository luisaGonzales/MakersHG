import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";
import { selectGender, selectAge } from "../Actions/Actions";

const Nav = ({}) => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#">
            WebSiteName
          </a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                Page 1 <span className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Page 1-1</a>
                </li>
                <li>
                  <a href="#">Page 1-2</a>
                </li>
                <li>
                  <a href="#">Page 1-3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Page 2</a>
            </li>
            <li>
              <a href="#">Page 3</a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-user" /> Sign Up
              </a>
            </li>
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-log-in" /> Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export const Menu = ({ genderSelect, title, ageSelected }) => {
  return <div>
      {" "}
      <Nav />
      <Grid fluid className="text-center">
        <h1 className="Text-capitalize">{title}</h1>
        <p>
          Personalizar tus prendas con tus propios diseños desde un mismo
          lugar, lo tienes al alcance de un click. Entra para dejar volar tu
          imaginación y para empezar a familiarizarte con todas las funciones
          de esta plataforma.</p>
        {!genderSelect && <Gender />}
        {genderSelect && <Age />}
        {ageSelected && <Redirect to="/layers" />}
      </Grid>
    </div>;
};

const Gender = () => {
  return <Row>
      <h2>Selecciona tu sexo</h2>
      <Col md={6}>
        <div className="selectGender-gender center-block" id="male" onClick={() => {
            selectGender("male");
          }}>
          <i className="fa fa-mars fa-lg" aria-hidden="true" />
        </div>
      </Col>
      <Col md={6}>
        <div id="female" className="center-block" onClick={() => {
            selectGender("female");
          }}>
          <i className="fa fa-venus fa-lg" aria-hidden="true" />
        </div>
      </Col>
    </Row>;
};

const Age = () => {
  return (
    <Row>
      <h2>Selecciona tu edad</h2>
      <Col md={4}>
        <div
          onClick={() => {
            selectAge(0);
          }}
        >
          Adult
        </div>
      </Col>
      <Col md={4}>
        <div
          onClick={() => {
            selectAge(1);
          }}
        >
          Boy
        </div>
      </Col>
      <Col md={4}>
        <div
          onClick={() => {
            selectAge(2);
          }}
        >
          Baby
        </div>
      </Col>
    </Row>
  );
};
