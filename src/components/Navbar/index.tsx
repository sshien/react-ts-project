import imgLogo from 'Assets/icon@2x.png'
import * as React from 'react'
import { NavLink } from 'react-router-dom'

import './_style.scss'

interface INavItem {
  content: string, 
  path: string
}

export default class NavBar extends React.Component {
  protected navItems: INavItem[]
  constructor(props: object) {
    super(props)
    this.navItems = [{content: '首页', path:'/'}, {content: '资讯', path:'/news'}, {content: '关于我们', path:'/about'}]
  }
  
  public render(): JSX.Element{
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand nav-bniu" href="#">
              <img src={imgLogo} alt="Brand" />
            </a>
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-4">
            <p className="navbar-text">能赚钱的区块链社区</p>
            <ul className="nav navbar-nav">
              {
                this.navItems.map((item, index) => 
                (<li key={index}><NavLink to={item.path}>{item.content}</NavLink></li>))
              }
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
