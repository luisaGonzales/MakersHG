import React, {Component} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import {selectSize} from '../Actions/Actions';
import "../Styles/Layers.css";


export const Sizes = ({age, sizeOptions, size}) => {
    const listSizes = sizeOptions[age].map((mysize,index) => {
        return <Button className={size == mysize ? "groupActive" : "groupSpan"} key={index} onClick={() => {
              selectSize(mysize);
            }}>
            <p className=" text-center"> {mysize}</p>
          </Button>;
    });
    return (
      <Row>
        <h2>Selecciona tu talla</h2>
        {listSizes}
      </Row>  
    );  
}