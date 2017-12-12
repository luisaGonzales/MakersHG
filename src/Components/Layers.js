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
import {Sizes} from './Sizes';
import {changeView} from '../Actions/Actions';
import {ImageUpload} from './Upload';
import {Redirect} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

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
          <ImageUpload />
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
