import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import googleLogo from './img/google-logo.png';

function HomeScreen() {
  return (
    <div class="screen">
      <br/>
      <Link to='/hello'>Want to say hello?</Link>
      This is the home screen
    </div>
  )
}

function HelloScreen() {
  return (
    <div class="screen">
      <br/>
      Hello! Welcome to this stupid app!!
      <Link to='/'>Go back out!!</Link>
    </div>
  )
}


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }

  }

  render() {

    // Define the content  based on the sign in state
    let content = (
      <div className="toto-app">
        Hello there!
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/hello' component={HelloScreen} />
        </Switch>
      </div>
    )


    return (
      <BrowserRouter basename="/">
        {content}
      </BrowserRouter>
    );
  }
}

export default App;
