import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import logo from '@/assets/logo.svg';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from '../../components/Navbar';
import Home from '../Home/index'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Navbar/>
        <img src={logo} className="App-logo" alt="logo" />
        <section>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/news" component={Home}/>
            <Route path="/about" component={Home}/>
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
