import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Login from './Components/Login'
import ChatBot from './Components/Chatbot' 
import Page from './Components/Page'
import SuePage from './Components/SuePage'
import InsurancePage from './Components/InsurancePage'
import { connect } from 'react-redux'
import { sendMessage } from './Components/Chatbot'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Login} />
          <Route path='/ChatBot' component={ChatBot} />
          <Route path='/Page' component={Page} />
          <Route path='/SuePage' component={SuePage} />
          <Route path='/InsurancePage' component={InsurancePage} />
        </div>
      </BrowserRouter>
    );
  }
}



export default App
