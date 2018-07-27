import * as React from 'react'
import { BrowserRouter, Redirect, Route,  Switch } from 'react-router-dom'
import App from '../pages/App'
import asyncComponent from '../utils/asyncComponent';
const Home = asyncComponent(() => import('../pages/Home'))

export default class RouteConfig extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="" exact={true} component={App} />
          <Route path="/home" component={Home} />
          <Route path="/news" component={Home} />
          <Route path="/about" component={Home} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}