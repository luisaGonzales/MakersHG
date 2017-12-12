import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  ButtonGroup,
  Button,
  DropdownButton,
  MenuItem
} from "react-bootstrap";
import "../Styles/Layers.css";

const Sizes = () => {
  return (
    <div className="center-block">
      <h2>Tallas</h2>
      <ButtonGroup>
        <Button href="#">A</Button>
        <Button href="#">A</Button>
      </ButtonGroup>
    </div>
  );
};

const Colors = () => {
  return (
    <div>
      <h2>Colores</h2>
      <ButtonGroup>
        <Button href="#">A</Button>
        <Button href="#">A</Button>
      </ButtonGroup>
    </div>
  );
};

const Design = () => {
  return (
    <div >
      <h2>Diseñar Articulo</h2>
      <ButtonGroup>
        <Button href="#">Agregar Texto</Button>
        <Button href="#">Agregar Imagen</Button>
      </ButtonGroup>
    </div>
  );
};

const Add = () => {
  return (
    <ButtonGroup className="btnGroup" justified>
      <Button href="#">Frente</Button>
      <Button href="#">Espalda</Button>
      <Button href="#">Manga Derecha</Button>
      <Button href="#">Manga Izquierda</Button>
    </ButtonGroup>
  );
};

export const Layers = () => {
  return <Grid fluid>
      <Row>
        <Col md={6} sm={6}>
          <div className="GroupTest">
            <div className="center-block">
              <img src='images/img.png' width={350} height={450} />
            </div>
          </div>

          <Add />
        </Col>
        <Col md={6} sm={6}>
          <div className="GroupTest">
            <Design />
            <Colors />
            <Sizes />
          </div>
        </Col>
      </Row>
    </Grid>;
};
