import React, { Component } from 'react'
import Choice from './Choice'
import Screen from './Screen'
import ChatbotHistory from './ChatbotHistory'

class InsurancePage extends Component {
    render() {
        return (
            <div className="page">
                <div id="Choice" class="slideRight"><Choice /></div>
                <div id="Screen" class="slideDown">
                    Claim insurance!!
                </div>
                <div id="ChatbotHistory" class="slideLeft"><ChatbotHistory /></div>
            </div>
        )
    }
}

export default InsurancePage