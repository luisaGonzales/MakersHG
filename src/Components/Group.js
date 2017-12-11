import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';


export const Group = () => {
    return(
        <Row>
            <Col md={3}>
                Frente
            </Col>
            <Col md={3}>
                Espalda
            </Col>
            <Col md={3}>
                Derecha
            </Col>
            <Col md={3}>
                Izquierda
            </Col>
    </Row>
    );

}