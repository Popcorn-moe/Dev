import React, { Component } from 'react'
import GPlayground from 'graphql-playground'
import 'graphql-playground/playground.css'

export default class Playground extends Component {
  render() {
    return (
      <GPlayground
        endpoint="http://localhost:3030/graphql"
        subscriptionEndpoint="http://localhost:3030/subscriptions"
      />
    );
  }
}
