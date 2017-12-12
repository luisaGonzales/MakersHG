import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

export const Sizes = ({age, sizes}) => {
    console.log(age);
    const listSizes = sizes[age].map((size,index) => {
        return ( 
            <span key={index}>{size}</span>
        );
    });
    return (
      <Row>
        <h1>Selecciona tu talla</h1>
        {listSizes}
      </Row>  
    );  
}