import React, { Component } from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Menu} from './Components/FirstSelection';
import {Layers} from './Components/Layers';
import {Check} from './Components/Check';

const App = ({title, genderSelect, ageSelected, age, sizeOptions, imgs, imgSelected, color, gender, size, ageTxt, colorOptions})=> {
  return <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Menu title={title} genderSelect={genderSelect} ageSelected={ageSelected} />} />
        <Route exact path="/menu" render={() => <Menu title={title} genderSelect={genderSelect} ageSelected={ageSelected} />} />
        <Route exact path="/layers" render={() => <Layers size={size} age={age} sizeOptions={sizeOptions} imgs={imgs} imgSelected={imgSelected} gender={gender} color={color} colorOptions={colorOptions} />} />
        <Route exact path="/check" render={() => <Check colorOptions={colorOptions} imgs={imgs} color={color} gender={gender} imgSelected={imgSelected} ageN={age} age={ageTxt}  size={size} />} />
        <Route render={() => <Redirect to={"/"} />} />
      </Switch>
    </HashRouter>;
}

const mapToProps = ({title, genderSelect, ageSelected, age, sizeOptions, imgs, imgSelected, color, gender, size, ageTxt, colorOptions}) => ({title, genderSelect, ageSelected, age, sizeOptions, imgs, imgSelected, color, gender, size, ageTxt, colorOptions})
export default connect (mapToProps)(App);
