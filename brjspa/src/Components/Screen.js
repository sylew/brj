import React from 'react'
import { NavLink } from 'react-router-dom'

const Screen = () => {
    
    return (
        <div>
        <form>
            <label>
                Name:
                <input type="text" name="name" defaultValue="Cecilia Wong"/>
            </label>
            <label>
                Where this happened:
                <input type="text" name="name" defaultValue="Thailand"/>
            </label>
            <label>
                Type of incident:
                <input type="text" name="name" defaultValue="Sexual Harassment"/>
            </label>
            <label>
                Initial Recount:
                <input type="text" name="name" defaultValue="initialRecount"/>
            </label>
            <label>
                Remarks:
                <input type="text" name="name" defaultValue="Please enter remark"/>
            </label>
            <input type="button" value="confirm" />
        </form>
        </div>
    )

}

export default Screen