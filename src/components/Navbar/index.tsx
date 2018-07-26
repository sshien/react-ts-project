import * as React from 'react';

import logo from '@/assets/icon@2x.png';
import './_style.scss'

export default class NavBar extends React.Component {
  public render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand nav-bniu" href="#">
              <img src={ logo } alt="Brand"/>
            </a>
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-4">
            <p className="navbar-text">能赚钱的区块链社区</p>
          </div>
        </div>
      </nav>
    )
  }
}
