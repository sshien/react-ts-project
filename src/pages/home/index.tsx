import * as React from 'react'
import * as API from 'Utils/api'

import Navbar from 'Components/Navbar'
import { Link, Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom'
import BNRequest from 'Utils/Fetch'
import Board from './childs/borad'

interface IHomeState {
  readonly hello: string, 
  readonly list: string[]
}

interface IHomeProps extends IHomeState {
  name: string
}

export default class Home extends React.Component<RouteComponentProps<{}>, IHomeProps> {

  public async componentDidMount() {
    const data = await BNRequest.post(API.coinDetail, 'messageDetail', { mes_id: 10})
    alert(data)
  }
  public render() {
    const rootPath = this.props.match.path
    return (
      <div className="container-fulid">
        <Navbar/>
        <div className="container">
          <h5>{this.props.match.path}</h5>
          <div>获取state值</div>
          <div className="row">
            <Link className="btn" to={`${rootPath}/a`}>a</Link>
            <Link className="btn" to={`${rootPath}/b`}>b</Link>
            <Link className="btn" to={`${rootPath}/c`}>c</Link>
          </div>
          <section> 
            <Switch>
              <Route path={`${rootPath}/a`} component={Board} />
              <Route path={`${rootPath}/b`} component={Board} />
              <Route path={`${rootPath}/c`} component={Board} />
              <Redirect from={`${rootPath}`} to={`${rootPath}/a`} exact={true} />
            </Switch>
          </section>
        </div>
      </div>
    )
  }
}
