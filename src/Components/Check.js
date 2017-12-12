import React, { Component } from "react";
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
import { Brand } from "./Brand";

export const Check = ({age, imgs, color, gender, ageN, size, colorOptions, imgSelected }) => {
    const img = `http://174.138.48.60/makers/build/Assets/img/${gender}/${ageN}/${color}/` + "front.png";
         //   const views = imgs.map((img, index) => {
         //     return <div className="imgEnd">
         //         <Image className="img-responsive" key={index} src={img} />
         //       </div>;
         console.log("es", img);
         return <Grid fluid>
             <Row>
               <Brand />
               <Col sm={6} md={6} xs={6}>
                 <Image className="img-responsive" src={img} />
               </Col>
               <Col sm={6} md={6} xs={6}>
                 <div>
                   <h2>DETALLES</h2>
                   <div className="colors">
                     <div>Género: {gender}</div>
                     <div>Tamaño: {age}</div>
                     <div>Color: {color}</div>
                     <div>Talla: {size}</div>
                   </div>
                 </div>
               </Col>
             </Row>
           </Grid>;
       };
