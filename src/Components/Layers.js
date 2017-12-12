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
import '../Styles/Colors.css';
import { Brand } from "./Brand";
import { Sizes } from "./Sizes";
import { changeView, selectColor, saveImg } from "../Actions/Actions";
import { ImageUpload } from "./Upload";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import Center from 'react-center';

const mapp =  [ 'front.png', 'back.png', 'right.png', 'left.png' ]; 

export const Layers = ({ view, age, sizeOptions, imgs, imgSelected, size, gender, color, colorOptions}) => {
  const img =  `http://174.138.48.60/makers/build/Assets/img/${gender}/${age}/${color}/` + mapp[imgSelected];
  saveImg(img);
  return (
    <Grid fluid>
      <Brand />
      <Row>
        <Col md={4} sm={4}>
          <div className="GroupTest">
            <div className="center-block">
              <img src={img} width={350} height={450} />
            </div>
          </div>
          <Add imgSelected={imgSelected} />
          <NavLink to="/menu">Atrás</NavLink>
          <NavLink to="/check">Finalizar</NavLink>
        </Col>
        <Col md={7} sm={7}>
          <Row className="GroupTest">
            <Col sm={6} md={6} lg={6} xs={12}>
              {" "}
              <Design />
            </Col>
            <Col sm={6} md={6} lg={6} xs={12}>
              <Colors colorOptions={colorOptions} gender={gender} age={age}/>
              <Sizes
                imgSelected={imgSelected}
                size={size}
                age={age}
                sizeOptions={sizeOptions}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  );
};

const Colors = ({colorOptions, gender, age}) => {
    let colorPick = colorOptions[gender][age];
    console.log(colorPick);
    const colors = colorPick.map((color, index) => {
        return(
            <Button key={index} className={color} onClick={()=>{selectColor(color)}}>  </Button>
        );
    })
  return (
    <div>
      <h2>Colores</h2>
      <ButtonGroup>
        {colors}
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
