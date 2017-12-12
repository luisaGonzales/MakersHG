import React, { Component } from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Menu} from './Components/FirstSelection';
import {Layers} from './Components/Layers';
import {Check} from './Components/Check';

const App = ({view, title, genderSelect, ageSelected, age, sizeOptions, imgs, imgSelected, size})=> {
  return <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Menu imgSelected={imgSelected}  title={title} genderSelect={genderSelect} ageSelected={ageSelected} />} />
        <Route exact path="/menu" render={() => <Menu imgSelected={imgSelected} title={title}  genderSelect={genderSelect} ageSelected={ageSelected} />} />
        <Route exact path="/layers" render={() => <Layers imgSelected={imgSelected} view={view} size={size} age={age} sizeOptions={sizeOptions} imgs={imgs} imgSelected={imgSelected} />} />
        <Route exact path="/check" render={() => <Check />} />
        <Route render={() => <Redirect to={"/"} />} />
      </Switch>
    </HashRouter>;
}

const mapToProps = ({view, title, size , genderSelect, ageSelected, age, sizeOptions, imgs, imgSelected}) => ({view, title, genderSelect, size , ageSelected, age,  sizeOptions, imgs, imgSelected})
export default connect (mapToProps)(App);
