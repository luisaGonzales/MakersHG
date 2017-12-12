import React, {Component} from 'react';
import {
  Grid,
  Row,
  Col,
  ButtonGroup,
  Button,
  DropdownButton,
  MenuItem,
  Image
} from "react-bootstrap";
import {Brand} from './Brand';

export const Check = ({imgs, color, gender, age, size }) => {
    const views = imgs.map((img, index) => {
        return (
            <Image key={index} src={img}/>
        );
    })
    return (
    <Grid fluid>
        <Row>
            <Brand />
          <Col sm={6} md={6} >
            {views}
          </Col>
          <Col sm={6} md={6}>
            <div>
              <h2>DETALLES</h2>
              <div className= "colors">
                <div>Género: {gender}</div>
                <div>Tamaño: {age}</div>
                <div>Color: {color}</div>
                <div>Talla: {size}</div>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    );
}