import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";
import Logo from "../img/Crealo.png";
import {Brand} from './Brand';
import {Gender} from './Gender';
import {Age} from './Age';



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