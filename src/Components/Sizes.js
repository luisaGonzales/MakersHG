import React, {Component} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import {selectSize} from '../Actions/Actions';

export const Sizes = ({age, sizeOptions}) => {
    console.log(age);
    const listSizes = sizeOptions[age].map((size,index) => {
        return <Button className="groupSpan" key={index} onClick={() => {
              selectSize(size);
            }}>
            <p className=" text-center"> {size}</p>
          </Button>;
    });
    return (
      <Row>
        <h2>Selecciona tu talla</h2>
        {listSizes}
      </Row>  
    );  
}