import React from 'react';
import "./error.css"
import arrow from '../media/arrow.png'
import {Link} from 'react-router-dom'

export default function Error() {
    return (
        <div className="section__padding error">
            <h1 className="error--title">ERROR 404</h1>
            <p className="error--desc">Sorry the page that you are looking for was not found.</p>
            <Link to="/home"><button className="error--button">Back home <img src={arrow} alt="" /></button></Link>
        </div>
    )
}