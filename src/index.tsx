import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as BrowserRouter} from 'react-router-dom';

import { Provider } from 'react-redux';

import { initStore } from './stor/store';

import './index.css';
import App from './components/app/app';

export const store = initStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store} >
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
