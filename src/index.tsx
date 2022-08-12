import React from "react"
import GlobalStyle from "./assets/styles/global"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom/client"
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);