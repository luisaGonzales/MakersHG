import React, { Component } from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Menu} from './Components/FirstSelection';
import {Layers} from './Components/Layers';
import {Check} from './Components/Check';

const App = ({title, genderSelect, ageSelected, age, sizeOptions, imgs, imgSelected, color, gender, size, ageTxt})=> {
  return(
    <HashRouter>
      <Switch>
          <Route exact path="/" render={() => <Menu title={title} genderSelect={genderSelect} ageSelected={ageSelected} />} />
          <Route exact path="/menu" render={() => <Menu title={title} genderSelect={genderSelect} ageSelected={ageSelected} />} />
          <Route exact path="/layers" render={() => <Layers age={age}  sizeOptions={sizeOptions} imgs={imgs} imgSelected={imgSelected} />} />
          <Route exact path="/check" render={() => <Check imgs={imgs} color={color} gender={gender} age={ageTxt} size={size} />} />
          <Route render={() => <Redirect to={"/"} />}/>
      </Switch>
    </HashRouter>
  );
}

const mapToProps = ({title, genderSelect, ageSelected, age, sizeOptions, imgs, imgSelected, size, gender, color, ageTxt}) => ({title, genderSelect, ageSelected, age,  sizeOptions, imgs, imgSelected, size, gender, color, ageTxt})
export default connect (mapToProps)(App);
