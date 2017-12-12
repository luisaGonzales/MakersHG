import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  ButtonGroup,
  Button,
  DropdownButton,
  MenuItem,
  Image,
  FieldGroup
} from "react-bootstrap";
import "../Styles/Layers.css";
import { Sizes } from "./Sizes";
import { changeView } from "../Actions/Actions";
import { ImageUpload } from "./Upload";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Brand } from "./Brand";

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
  return <div>
      <h2>Diseñar Articulo</h2>
      <ButtonGroup>
        <Button className="groupSpan" href="#">
          Agregar Texto
        </Button>

        <Button className="groupSpan" href="#">
          Agregar Imagen
        </Button>
      </ButtonGroup>
    </div>;
};

const Add = ({imgSelected}) => {
    console.log("imgSelected", imgSelected);
  return <ButtonGroup className="btnGroup justified">
      <Button className={imgSelected == 0 ? "groupActive" : "groupSpan"} onClick={() => {
          changeView(0);
        }}>
        Frente
      </Button>
      <Button className={imgSelected == 1 ? "groupActive" : "groupSpan"} onClick={() => {
          changeView(1);
        }}>
        Espalda
      </Button>
      <Button className={imgSelected == 2 ? "groupActive" : "groupSpan"} onClick={() => {
          changeView(2);
        }}>
        Manga Derecha
      </Button>
      <Button className={imgSelected == 3 ? "groupActive" : "groupSpan"} onClick={() => {
          changeView(3);
        }}>
        Manga Izquierda
      </Button>
    </ButtonGroup>;
};

export const Layers = ({ view, age, sizeOptions, imgs, imgSelected, size }) => {
    console.log('age', age)
  return <Grid fluid>
      <Brand />
      <Row>
        <Col md={6} sm={6}>
          <div className="GroupTest">
            <div className="center-block">
              <img src={imgs[imgSelected]} width={350} height={450} />
            </div>
          </div>
          <Add imgSelected={imgSelected} />
          <NavLink to="/check">Finalizar</NavLink>
        </Col>
        <Col md={6} sm={6}>
          <div className="GroupTest">
            <Design />
            <Colors />
            <Sizes imgSelected={imgSelected} size={size} age={age} sizeOptions={sizeOptions} />
          </div>
        </Col>
      </Row>
    </Grid>;
};
