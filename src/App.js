import React,{Component} from 'react';
import './App.css';

import Home from './screens/Home';
import JokeDetail from './screens/JokeDetail';
import NavigationBar from './components/NavigationBar';
import {
  BrowserRouter,
  Route
} from "react-router-dom";

export default class  App extends Component {

  render(){
  
  return (
    <BrowserRouter>
    <div>
    <NavigationBar />
    <Route exact path="/joke/:category">
      <JokeDetail />
    </Route>
   
    <Route exact path="/">
      <Home />
    </Route>
    </div>
    
    </BrowserRouter>
  );
  }
}

