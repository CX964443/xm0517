import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { App, Home, Login, Detail, Lx, List } from './assembly'
import Forms from '@/pages/form'

export default class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/detail" component={Detail} />
          <Route path="/login" component={Login} />
          <Route path="/lx" component={Lx} />
          <Route path="/form" component={Forms} />
          <Route path="/list" component={List} />
          <Route path="/" component={App} />
        </Switch>
      </BrowserRouter>
    )
  }
}
