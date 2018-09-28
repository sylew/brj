import React, { Component } from 'react'
import Choice from './Choice'
import Screen from './Screen'
import ChatbotHistory from './ChatbotHistory'
import Chat from './Chat'



class Page extends Component {
    render() {
        return (
            <div className="page">
                <div id="Choice" class="slideRight"><Choice /></div>
                <div id="Screen" class="slideDown"><Screen/></div>
                <div id="ChatbotHistory" class="slideLeft"><ChatbotHistory /></div>
            </div>
        )
    }
}

export default Page