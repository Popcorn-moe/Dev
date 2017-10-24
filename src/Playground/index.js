import React, { Component } from 'react'
import { Provider } from 'react-redux'
import GPlayground from 'graphql-playground'
import createStore from './createStore'
import 'graphql-playground/playground.css'
import 'graphcool-styles/dist/styles.css'

const store = createStore()

export default class Playground extends Component {
  render() {
    return (
      <Provider store={store}>
        <GPlayground
          endpoint="http://localhost:3030/graphql"
        />
      </Provider>
    );
  }
}