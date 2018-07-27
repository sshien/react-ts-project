import * as React from 'react';
import './App.scss';

import logo from '@/assets/logo.svg';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from '../../components/Navbar';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
      <Navbar/>
      <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
