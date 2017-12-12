import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";
import Logo from "../img/Crealo.png";
import {Brand} from './Brand';
import {Gender} from './Gender';
import {Age} from './Age';

export const Steps = () => {
    <div className="container">
      <div className="stepwizard col-md-offset-3">
        <div className="stepwizard-row setup-panel">
          <div className="stepwizard-step">
            <a href="#step-1" type="button" className="btn btn-primary btn-circle">
              1
            </a>
            <p>Step 1</p>
          </div>
          <div className="stepwizard-step">
            <a href="#step-2" type="button" className="btn btn-default btn-circle" disabled="disabled">
              2
            </a>
            <p>Step 2</p>
          </div>
          <div className="stepwizard-step">
            <a href="#step-3" type="button" className="btn btn-default btn-circle" disabled="disabled">
              3
            </a>
            <p>Step 3</p>
          </div>
        </div>
      </div>

      <form role="form" action="" method="post">
        <div className="row setup-content" id="step-1">
          <div className="col-xs-6 col-md-offset-3">
            <div className="col-md-12">
              <h3> Step 1</h3>
              <div className="form-group">
                <label className="control-label">First Name</label>
                <input maxlength="100" type="text" required="required" className="form-control" placeholder="Enter First Name" />
              </div>
              <div className="form-group">
                <label className="control-label">Last Name</label>
                <input maxlength="100" type="text" required="required" className="form-control" placeholder="Enter Last Name" />
              </div>
              <div className="form-group">
                <label className="control-label">Address</label>
                <textarea required="required" className="form-control" placeholder="Enter your address" />
              </div>
              <button className="btn btn-primary nextBtn btn-lg pull-right" type="button">
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="row setup-content" id="step-2">
          <div className="col-xs-6 col-md-offset-3">
            <div className="col-md-12">
              <h3> Step 2</h3>
              <div className="form-group">
                <label className="control-label">Company Name</label>
                <input maxlength="200" type="text" required="required" className="form-control" placeholder="Enter Company Name" />
              </div>
              <div className="form-group">
                <label className="control-label">Company Address</label>
                <input maxlength="200" type="text" required="required" className="form-control" placeholder="Enter Company Address" />
              </div>
              <button className="btn btn-primary nextBtn btn-lg pull-right" type="button">
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="row setup-content" id="step-3">
          <div className="col-xs-6 col-md-offset-3">
            <div className="col-md-12">
              <h3> Step 3</h3>
              <button className="btn btn-success btn-lg pull-right" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>;
}




export const Menu = ({ genderSelect, title, ageSelected }) => {
  return (
    <div className="container-fluid blockAll">
      <Grid fluid className="text-center">
      <Brand/>
        <hr />
        <p className="textDesign text-justify">
          Personalizar tus prendas con tus propios diseños desde un mismo lugar,
          lo tienes al alcance de un click. Entra para dejar volar tu
          imaginación y para empezar a familiarizarte con todas las funciones de
          esta plataforma.
        </p>
        {!genderSelect && <Gender />}
        {genderSelect && <Age />}
        {ageSelected && <Redirect to="/layers" />}
      </Grid>
    </div>
  );
};