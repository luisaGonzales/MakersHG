import React, {Component} from 'react';
import {Redirect, NavLink} from 'react-router-dom';
import {Form, FormGroup, FormControl, Col, Button, ControlLabel, Alert} from 'react-bootstrap';

export const Menu = ({title}) => {
    return (
        <div>{title}</div>
    );
}