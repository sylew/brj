import React from 'react'
import { NavLink } from 'react-router-dom'

const Screen = () => {
    return (
        <div>
            <NavLink to="/Chatbot">
                <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">refresh</i></a>
            </NavLink>
        </div>
    )

}

export default Screen