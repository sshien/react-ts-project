import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import BrowserRouter from './router'
import Stroe from './store/store'


ReactDOM.render(
  <Provider store={Stroe}>
    <AppContainer>
      <BrowserRouter basename= { "app" }  />
    </AppContainer>
  </Provider>,
  document.getElementById('root') as HTMLElement
)

registerServiceWorker()