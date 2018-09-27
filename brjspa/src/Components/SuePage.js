import React, { Component } from 'react'
import Choice from './Choice'
import Screen from './Screen'
import ChatbotHistory from './ChatbotHistory'
import $ from 'jquery'



class SuePage extends Component {
    render() {
        window.$(document).ready(function() {
            window.$('.modal').modal();
        });
        
        return (
            <div className="page">
                <div id="Choice" class="slideRight"><Choice /></div>
                <div id="Screen" class="slideDown">
                    Sue me!!!
                    
                    <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
                    <div id="modal1" class="modal">
                        <div class="modal-content">
                            <h4>Lawyers nearby</h4>
                        </div>
                        <div class="modal-footer">
                            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                        </div>
                    </div>
                </div>
                <div id="ChatbotHistory" class="slideLeft"><ChatbotHistory /></div>
            </div>
        )
    }
}

export default SuePage