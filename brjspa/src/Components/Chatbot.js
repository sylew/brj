import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import {sendMessage} from './Chat';
import $ from 'jquery'



class Chatbot extends Component {
    render(){
        const {feed, sendMessage} = this.props;
        return (
            <div className="chatbot">
                <h1 class="center slideDown">How may we help you?</h1>
                <div className="scroll">
                    <ul>
                        { feed.map( entry => <li>{entry.text}</li> )}
                    </ul>
                </div>
                <input type="text" onKeyDown={ (e) => e.keyCode === 13 ? sendMessage(e.target.value) : null }/>
                <NavLink to="/Page">
                    <button class="btn waves-effect waves-light btn-large slideUp" type="submit" name="action">
                        <i class="material-icons">navigate_next</i>
                    </button>
                </NavLink>
            </div>
        )
    }
}



const mapStateToProps = state => ({
    feed: state
});

export default connect(mapStateToProps, {
    sendMessage})(Chatbot);