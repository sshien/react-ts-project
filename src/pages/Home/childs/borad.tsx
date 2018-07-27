import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom';

export default class Board extends React.Component<RouteComponentProps<{}>, {}> {
  public render() {
    return (
      <div>
        {this.props.match.path}
      </div>
    )
  }
}
