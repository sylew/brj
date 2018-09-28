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
                    Due to polcies differences, if you need to insurance claim, please contact your insurance agent for detailed information.
                </div>
                <div id="ChatbotHistory" class="slideLeft"><ChatbotHistory /></div>
            </div>
        )
    }
}

export default InsurancePage