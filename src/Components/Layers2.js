import React, {Component} from 'react';
import { Grid, Row, Col } from "react-bootstrap";
import {Group} from './Group';

export const Layers2 = () => {
    return (

        <Grid fluid>
            <Row>
                <Col md={6}><Group /></Col>
            </Row>
        </Grid>
        
    );
}