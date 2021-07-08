import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Chips.css';

class Chips extends Component {
    render(){
        return(
            <div className='Chips'>
                <h1>How Many chip you want?</h1>
                <Link to='/'>Back Home</Link>
            </div>
        )
    }
}

export default Chips;