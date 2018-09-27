import React, { Component } from 'react'
import Broccoli from '../broccoli.png'
import { NavLink } from 'react-router-dom'
import Language from './Language'




class Login extends Component {
    

    state = {
        name: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();

    }
   
    render() {
        return(
            <div class="container">
                <img src={Broccoli} alt="A broccoli"/>
                <h1>Welcome to BrocChain Solutions</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" onChange={this.handleChange} />
                </form>
                <Language />
                <NavLink to="/Chatbot">
                    <button class="btn waves-effect waves-light" type="submit" name="action">Login
                        <i class="material-icons right"></i>
                    </button>
                </NavLink>
            </div>
        )
    }
}





export default Login