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

export const Check = ({ imgs, color, gender, age, size, colorOptions, imgSelected }) => {
         //   const views = imgs.map((img, index) => {
         //     return <div className="imgEnd">
         //         <Image className="img-responsive" key={index} src={img} />
         //       </div>;
         console.log("colorOptions", colorOptions, "gender", gender, "age", age, "imgSelected", imgSelected);
         return <Grid fluid>
             <Row>
               <Brand />
               <Col sm={6} md={6} xs={6}>
                 <Image className="img-responsive" src={colorOptions[gender][age].front.png} />
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
