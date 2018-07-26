import * as React from 'react'

export default class Home extends React.Component {
  public render() {
    return (
      <div>
        <h5>{window.location.pathname}</h5>
      </div>
    )
  }
}
