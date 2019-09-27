import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
         Hello Jaffa
      </div>
    );
  }
}

export default hot(module)(App);