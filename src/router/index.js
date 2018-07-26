import * as React from 'react'
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import asyncComponent from '../utils/asyncComponent';
import App from '../pages/App/index.tsx'
const Home = asyncComponent(() => import('../pages/Home/index.tsx'))

export default class RouteConfig extends React.Component {
  render() {
    return (
      <BrowserRouter
        basename = 'app'>
        <Switch>
          <Route path="/" exact component={App}/>
          <Route path="/home" component={Home}/>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}