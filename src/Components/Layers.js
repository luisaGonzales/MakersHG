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
import {Sizes} from './Sizes';
import {changeView} from '../Actions/Actions';
import {ImageUpload} from './Upload';
import {Redirect} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
// import Center from 'react-center';

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
          <Button href="#" className="add">Agregar Texto</Button>
      </div>
     <Col sm={4}>
        <Row className="up">
          <Button className="btnD">↑</Button>
        </Row>
        <ButtonGroup bsSize="small"  className="btnD">
        <Button className="btnD">←</Button>
        <Button className="btnD">↓</Button>
        <Button className="btnD">→</Button>
        </ButtonGroup>
     </Col>
    <Col sm={2} >
    <ButtonToolbar>
      <ButtonGroup bsSize="small">
      <Row>
        <Button className="btnD">+</Button>
      </Row>
      <Row>
        <Button className="btnD">-</Button>
      </Row>
      </ButtonGroup>
      </ButtonToolbar>
    </Col>
    </Row>

<Row className="addGroup">
  <div>
    <Button href="#" className="add">Agregar Imagen</Button>
  </div>
       <Col sm={4} md={4}>
       <div>
        <ButtonToolbar>
          <ButtonGroup bsSize="small" className="bloque">
          <Button className="btnD">Lef</Button>
          <Button className="btnD">Cen</Button>
          <Button className="btnD">Rig</Button>
          </ButtonGroup>
        </ButtonToolbar>
        <ButtonToolbar>
          <ButtonGroup bsSize="small">
          <Button className="btnD">Top</Button>
          <Button className="btnD" >Mid</Button>
          <Button className="btnD">Bot</Button>
          </ButtonGroup>
        </ButtonToolbar>
        </div>
       </Col>
      <Col sm={2}>
      <ButtonToolbar>
      <ButtonGroup bsSize="small">
      <Row>
        <Button className="btnD">Fron</Button>
      </Row>
      <Row>
        <Button className="btnD">Back</Button>
        </Row>
      </ButtonGroup>
      </ButtonToolbar>
      </Col>
</Row>
</div>
  );
};

const Add = () => {
  return (
    <ButtonGroup     className="btnGroup justified" >
      <Button onClick={()=>{changeView(0)}}>Frente</Button>
      <Button onClick={()=>{changeView(1)}}>Espalda</Button>
      <Button onClick={()=>{changeView(2)}}>Manga Derecha</Button>
      <Button onClick={()=>{changeView(3)}}>Manga Izquierda</Button>
    </ButtonGroup>
  );
};

export const Layers = ({age, sizeOptions, imgs, imgSelected }) => {
  return <Grid fluid>
      <Row>
        <Col md={6} sm={6}>
          <div className="GroupTest">
            <div className="center-block">
              <img src={imgs[imgSelected]} width={350} height={450} />
            </div>
          </div>
          <Add />
  <NavLink to='/menu'>Atrás</NavLink>
        <NavLink to='/check'>Finalizar</NavLink>
        </Col>
        <Col md={6} sm={6}>
          <div className="GroupTest">
            <Design />
            <Colors />
            <Sizes age={age} sizeOptions={sizeOptions} />
          </div>
        </Col>
      </Row>
    </Grid>;
};
