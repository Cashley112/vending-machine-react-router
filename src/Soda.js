import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Soda.css';

class Soda extends Component {
    render(){
        return(
            <div className='Soda'>
                <h1>Soda Is Bad For You</h1>
                <Link to='/'>Back Home</Link>
            </div>
        )
    }
}

export default Soda;