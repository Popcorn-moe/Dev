import React, { Component } from 'react'
import { Voyager as GVoyager } from 'graphql-voyager'
import 'graphql-voyager/dist/voyager.css'

function introspectionProvider(query) {
  return fetch("https://api.popcorn.moe/graphql", {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({query: query}),
  }).then(response => response.json())
}

export default class Voyager extends Component {
  render() {
    return (
      <GVoyager introspection={introspectionProvider} displayOptions={{ rootType: 'Root' }}/>
    );
  }
}
