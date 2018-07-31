import * as React from 'react'

import logo from 'Assets/logo.svg'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '../../components/Navbar'
import './App.scss'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }
}

export default App
