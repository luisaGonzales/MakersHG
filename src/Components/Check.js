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

export const Check = () => {
    return (
    <Grid fluid>
        <Row>
            <Brand />
          <Col sm={6} md={6} />
          <Col sm={6} md={6}>
            <div>
              <h2>DETALLES</h2>
              <div className="colors">
                <label>Color:</label>
                <label>Talla:</label>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    );
}