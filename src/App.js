import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Route, NavLink, Switch } from 'react-router-dom'
import Playground from './Playground'
import Voyager from './Voyager'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <object className={this.props.location.pathname.split('/',2)[1]} id="logo" data="/logo-animated.svg" type="image/svg+xml">Logo</object>
          <ul>
            <li><NavLink to="/playground" className="link-text">&lt;\&gt;</NavLink></li>
            <li><NavLink to="/voyager"><img className="link-logo" src="/graphql-voyager.svg" alt="voyager" /></NavLink></li>
          </ul>
        </nav>
        <div id="page-content">
          <Switch>
            <Route path="/playground" component={Playground}/>
            <Route path="/voyager" component={Voyager}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App)
