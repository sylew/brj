import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom';
import $ from 'jquery'



const Choice = () => {
    return (
            <div className="container">
                <h2>Options</h2>
                <ul className="right">
                    <li><NavLink to="/SuePage">
                        Sue
                    </NavLink></li>
                    <li><NavLink to="/InsurancePage">Claim Insurance</NavLink></li>
                </ul>
            </div>
    )
}

export default Choice;