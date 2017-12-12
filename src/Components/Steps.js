import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { Menu } from "./FirstSelection";
import { Layers } from "./Layers";
import { Check } from "./Check";
import "../App.css";

export const Steps = () => {
    return <div className="container">
        <div className="stepwizard col-md-offset-3">
          <div className="stepwizard-row setup-panel">
            <div className="stepwizard-step">
              <a href="#step-1" type="button" className="btn btn-primary btn-circle">
                1
              </a>
              <p>Step 1</p>
            </div>
            <div className="stepwizard-step">
              <a href="#step-2" type="button" className="btn btn-default btn-circle">
                2
              </a>
              <p>Step 2</p>
            </div>
            <div className="stepwizard-step">
              <a href="#step-3" type="button" className="btn btn-default btn-circle">
                3
              </a>
              <p>Step 3</p>
            </div>
          </div>
        </div>
        <div className="row setup-content" id="step-1">
          <Menu />
        </div>
        <div className="row setup-content" id="step-2">
          {/* <Layers/> */} layers
        </div>
        <div className="row setup-content" id="step-3">
        {/* <Check/> */} check
        </div>
      </div>;
};
