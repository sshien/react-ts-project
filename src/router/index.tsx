import * as React from 'react'
import { BrowserRouter, BrowserRouterProps, Redirect, Route,  Switch } from 'react-router-dom'
import App from '../pages/App'
import asyncComponent from '../utils/asyncComponent';
const Home = asyncComponent(() => import('../pages/Home'))

export default ( brower : BrowserRouterProps): React.ReactElement<BrowserRouterProps> => {
  const { basename, forceRefresh, getUserConfirmation, keyLength } = brower
  return (
    <BrowserRouter 
      basename= { basename }
      forceRefresh= { forceRefresh }
      getUserConfirmation= { getUserConfirmation }
      keyLength= { keyLength }
    >
      <Switch>
        <Route path="/" exact={ true } component={ App } />
        <Route path="/home" component={ Home } />
        <Route path="/news" component={ Home } />
        <Route path="/about" component={ Home } />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}