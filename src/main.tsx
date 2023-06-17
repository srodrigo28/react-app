import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Home } from './page/Home'
import { Login } from './page/Login'
import { Register } from './page/Register'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
      <Route exact path="/"> <Home /> </Route>
      <Route exact path="/login"> <Login /> </Route>
      <Route exact path="/register"> <Register /> </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
)
