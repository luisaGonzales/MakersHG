import React, { Component } from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Menu} from './Components/FirstSelection';
import {Layers} from './Components/Layers';
import {Check} from './Components/Check';
import {Layers2} from './Components/Layers2';

const App = ({title, genderSelect, ageSelected})=> {
  return(
    <HashRouter>
      <Switch>
          <Route exact path="/" render={() => <Menu title={title} genderSelect={genderSelect} ageSelected={ageSelected} />} />
          <Route exact path="/menu" render={() => <Menu title={title} genderSelect={genderSelect} ageSelected={ageSelected} />} />
          <Route exact path="/layers" render={() => <Layers />} />
          <Route exact path="/check" render={() => <Check />} />
          <Route exact path="/prueba" render={() => <Layers2 />} />
          <Route render={() => <Redirect to={"/"} />}/>
      </Switch>
    </HashRouter>
  );
}

const mapToProps = ({title, genderSelect, ageSelected}) => ({title, genderSelect, ageSelected})
export default connect (mapToProps)(App);
