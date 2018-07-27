import * as React from 'react'
import { Link, Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import BNRequest from '../../utils/BNRequest'
import Board from './childs/borad'

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {

  public componentDidMount() {
    new BNRequest().post('/cms/bninfo.php?c=index', 'messageDetail', { coin_id: 10}).then(data => {
      alert(data)
    })
  }
  public render() {
    const rootPath = this.props.match.path
    return (
      <div className="container-fulid">
        <Navbar/>
        <div className="container">
          <h5>{this.props.match.path}</h5>
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
