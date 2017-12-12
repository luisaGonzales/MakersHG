import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  ButtonGroup,
  Button,
  ButtonToolbar,
  DropdownButton,
  MenuItem,
  Image,
  FieldGroup
} from "react-bootstrap";
import "../Styles/Layers.css";
import { Brand } from "./Brand";
import { Sizes } from "./Sizes";
import { changeView } from "../Actions/Actions";
import { ImageUpload } from "./Upload";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import Center from 'react-center';

export const Layers = ({ view, age, sizeOptions, imgs, imgSelected, size }) => {
  console.log("age", age);
  return (
    <Grid fluid>
      <Brand />
      <Row>
        <Col md={6} sm={6}>
          <div className="GroupTest">
            <div className="center-block">
              <img src={imgs[imgSelected]} width={350} height={450} />
            </div>
          </div>
          <Add />
          <NavLink to="/menu">Atrás</NavLink>
          <NavLink to="/check">Finalizar</NavLink>
        </Col>
        <Col md={6} sm={6}>
          <div className="GroupTest">
            <Design />
            <Colors />
            <Sizes
              imgSelected={imgSelected}
              size={size}
              age={age}
              sizeOptions={sizeOptions}
            />
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

const Colors = () => {
  return (
    <div>
      <h2>Colores</h2>
      <ButtonGroup>
        <Button href="#">A</Button>
        <Button href="#">A</Button>
        <Button href="#">A</Button>
        <Button href="#">A</Button>
        <Button href="#">A</Button>
        <Button href="#">A</Button>
      </ButtonGroup>
    </div>
  );
};

const Design = () => {
  return (
    <div>
      <h2>Diseñar Articulo</h2>

      <Row className="addGroup">
        <div>
          <Button href="#" className=" groupSpan add">
            Agregar Texto
          </Button>
        </div>
        <Col sm={4}>
          <Row className="up">
            <Button className=" groupSpan btnD">↑</Button>
          </Row>
          <ButtonGroup bsSize="small" className="btnD">
            <Button className=" groupSpan btnD">←</Button>
            <Button className=" groupSpan btnD">↓</Button>
            <Button className=" groupSpan btnD">→</Button>
          </ButtonGroup>
        </Col>
        <Col sm={2}>
          <ButtonToolbar>
            <ButtonGroup bsSize="small">
              <Row>
                <Button className="groupSpan btnD">+</Button>
              </Row>
              <Row>
                <Button className="groupSpan btnD">-</Button>
              </Row>
            </ButtonGroup>
          </ButtonToolbar>
        </Col>
      </Row>

      <Row className="addGroup">
        <div>
          <Button href="#" className="groupSpan add">
            Agregar Imagen
          </Button>
        </div>
        <Col sm={4} md={4}>
          <div>
            <ButtonToolbar>
              <ButtonGroup bsSize="small" className="bloque">
                <Button className="groupSpan btnD">Lef</Button>
                <Button className="groupSpan btnD">Cen</Button>
                <Button className="groupSpan btnD">Rig</Button>
              </ButtonGroup>
            </ButtonToolbar>
            <ButtonToolbar>
              <ButtonGroup bsSize="small">
                <Button className="groupSpan btnD">Top</Button>
                <Button className="groupSpan btnD">Mid</Button>
                <Button className="groupSpan btnD">Bot</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </div>
        </Col>
        <Col sm={2}>
          <ButtonToolbar>
            <ButtonGroup bsSize="small">
              <Row>
                <Button className="groupSpan btnD">Fron</Button>
              </Row>
              <Row>
                <Button className="groupSpan btnD">Back</Button>
              </Row>
            </ButtonGroup>
          </ButtonToolbar>
        </Col>
      </Row>
    </div>
  );
};

const Add = ({ imgSelected }) => {
  console.log("imgSelected", imgSelected);
  return (
    <ButtonGroup className="btnGroup justified">
      <Button
        className={imgSelected == 0 ? "groupActive" : "groupSpan"}
        onClick={() => {
          changeView(0);
        }}
      >
        Frente
      </Button>
      <Button
        className={imgSelected == 1 ? "groupActive" : "groupSpan"}
        onClick={() => {
          changeView(1);
        }}
      >
        Espalda
      </Button>
      <Button
        className={imgSelected == 2 ? "groupActive" : "groupSpan"}
        onClick={() => {
          changeView(2);
        }}
      >
        Manga Derecha
      </Button>
      <Button
        className={imgSelected == 3 ? "groupActive" : "groupSpan"}
        onClick={() => {
          changeView(3);
        }}
      >
        Manga Izquierda
      </Button>
    </ButtonGroup>
  );
};
