import React, {Component} from 'react';
import { Grid, Row, Col } from "react-bootstrap";
import "../Styles/Layers.css";

export const Layers = () => {
    return <Grid fluid>
        <Row>
          <Col>
            <div className="nav-side-menu">
              <div className="brand">Brand Logo</div>
              <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content" />
              <div className="menu-list">
                <ul id="menu-content" className="menu-content collapse out">
                  <li>
                    <a>
                      <i className="fa fa-dashboard fa-lg" /> Capas
                      <p>TEXTO </p> <span>
                        {" "}
                        <input />
                      </span>
                    </a>
                  </li>
                  <li data-toggle="collapse" data-target="#products" className="collapsed active">
                    <a href="#">
                      <i className="fa fa-gift fa-lg" /> UI Elements <span className="arrow" />
                    </a>
                  </li>
                  <ul className="sub-menu collapse" id="products">
                    <li className="active">
                      <a href="#">CSS3 Animation</a>
                    </li>
                    <li>
                      <a href="#">General</a>
                    </li>
                    <li>
                      <a href="#">Buttons</a>
                    </li>
                    <li>
                      <a href="#">Tabs & Accordions</a>
                    </li>
                    <li>
                      <a href="#">Typography</a>
                    </li>
                  </ul>

                  <li data-toggle="collapse" data-target="#service" className="collapsed">
                    <a href="#">
                      <i className="fa fa-globe fa-lg" /> Services <span className="arrow" />
                    </a>
                  </li>
                  <ul className="sub-menu collapse" id="service">
                    <li>New Service 1</li>
                    <li>New Service 2</li>
                    <li>New Service 3</li>
                  </ul>

                  <li data-toggle="collapse" data-target="#new" className="collapsed">
                    <a href="#">
                      <i className="fa fa-car fa-lg" /> New <span className="arrow" />
                    </a>
                  </li>
                  <ul className="sub-menu collapse" id="new">
                    <li>New New 1</li>
                    <li>New New 2</li>
                    <li>New New 3</li>
                  </ul>

                  <li>
                    <a href="#">
                      <i className="fa fa-user fa-lg" /> Profile
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fa fa-users fa-lg" /> Users
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>;
}