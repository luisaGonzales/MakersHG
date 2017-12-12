import React, { Component } from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Menu} from './Components/FirstSelection';
import {Layers} from './Components/Layers';
import {Check} from './Components/Check';

const App = ({title, genderSelect, ageSelected, age, sizeOptions, imgs, imgSelected})=> {
  return(
    <HashRouter>
      <Switch>
          <Route exact path="/" render={() => <Menu title={title} genderSelect={genderSelect} ageSelected={ageSelected} />} />
          <Route exact path="/menu" render={() => <Menu title={title} genderSelect={genderSelect} ageSelected={ageSelected} />} />
          <Route exact path="/layers" render={() => <Layers age={age}  sizeOptions={sizeOptions} imgs={imgs} imgSelected={imgSelected} />} />
          <Route exact path="/check" render={() => <Check />} />
          <Route render={() => <Redirect to={"/"} />}/>
      </Switch>
    </HashRouter>
  );
}

const mapToProps = ({title, genderSelect, ageSelected, age, sizeOptions, imgs, imgSelected}) => ({title, genderSelect, ageSelected, age,  sizeOptions, imgs, imgSelected})
export default connect (mapToProps)(App);
