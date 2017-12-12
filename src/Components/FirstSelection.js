import React, {Component} from 'react';
import {Redirect, NavLink} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import {selectGender, selectAge} from '../Actions/Actions';

export const Menu = ({genderSelect, title, ageSelected}) => {
    return (
        <Grid fluid className="text-center">
            <h1 className="Text-capitalize">{title}</h1>
            <p>Costumiza camisetas en 3 simples pasos</p>
            {
                !genderSelect && <Gender />
            }
            {
                genderSelect && <Age />
            }
            {
                ageSelected && <Redirect to="/layers"/> 
            }
        </Grid>
    );
}

const Gender = () => {
    return (
        <Row>
            <h2>Selecciona tu sexo</h2>
            <Col md={6}>
                <div
                    className="selectGender-gender"
                    id="male"
                    onClick={() => {
                    selectGender("male")
                }}>
                    <i className="fa fa-mars fa-lg" aria-hidden="true"></i>
                </div>

            </Col>
            <Col md={6}>
                <div
                    id="female"
                    onClick={() => {
                    selectGender("female")
                }}>
                    <i className="fa fa-venus fa-lg" aria-hidden="true"></i>
                </div>

            </Col>
        </Row>
    );
}

const Age = () => {
    return (
        <Row>
            <h2>Selecciona tu edad
            </h2>
            <Col md={4}>
                <div onClick={() => {
                    selectAge(0)
                }}>
                    Adult
                </div>
            </Col>
            <Col md={4}>
                <div onClick={() => {
                    selectAge(1)
                }}>
                    Boy
                </div>
            </Col>
            <Col md={4}>
                <div onClick={() => {
                    selectAge(2)
                }}>Baby</div>
            </Col>
        </Row>
    );
}