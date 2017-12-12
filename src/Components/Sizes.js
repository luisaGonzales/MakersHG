import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import {selectSize} from '../Actions/Actions';

export const Sizes = ({age, sizeOptions}) => {
    console.log(age);
    const listSizes = sizeOptions[age].map((size,index) => {
        return ( 
            <span key={index} onClick={()=>{selectSize(size)}}>{size}</span>
        );
    });
    return (
      <Row>
        <h1>Selecciona tu talla</h1>
        {listSizes}
      </Row>  
    );  
}