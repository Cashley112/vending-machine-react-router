import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Sardines.css';
import Message from './Message';

class Sardines extends Component {
    render() {
        return(
            <div className='Sardines'>
                <Message>
                    <h1>Sardine Eat You!</h1>
                    <Link className='Sardines-link' to='/'>Go Back</Link>
                </Message>
            </div>
        )
    }
}

export default Sardines;