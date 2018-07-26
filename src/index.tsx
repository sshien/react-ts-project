import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Route from './router';

ReactDOM.render(
  <Route />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
