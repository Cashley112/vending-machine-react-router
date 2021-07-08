import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Sardines.css';

class Sardines extends Component {
    render() {
        return(
            <div className='Sardines'>
                <h1>Sardine Eat You!</h1>
                <Link to='/'>Back Home</Link>
            </div>
        )
    }
}

export default Sardines;