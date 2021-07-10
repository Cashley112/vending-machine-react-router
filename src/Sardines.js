import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Sardines.css';

class Sardines extends Component {
    render() {
        return(
            <div className='Sardines'>
                <div className='Sardines-block'>
                    <h1>Sardine Eat You!</h1>
                    <Link className='Sardines-link' to='/'>Go Back</Link>
                </div>
            </div>
        )
    }
}

export default Sardines;