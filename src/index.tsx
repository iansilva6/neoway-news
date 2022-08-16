import React from 'react'
import GlobalStyle from './assets/styles/global'
import App from './App'
import { HashRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
