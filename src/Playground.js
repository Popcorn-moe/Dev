import React, { Component } from 'react'
import GPlayground from 'graphql-playground'
import 'graphql-playground/playground.css'

export default class Playground extends Component {
  render() {
    return (
      <GPlayground
        endpoint="https://api.popcorn.moe/graphql"
        subscriptionEndpoint="https://api.popcorn.moe/subscriptions"
      />
    );
  }
}
