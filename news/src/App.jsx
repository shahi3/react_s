import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Newsc from './components/Newsc'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Newsc/>
      </div>
    )
  }
}
