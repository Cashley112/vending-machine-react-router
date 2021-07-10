import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './VendingMachine.css';

class VendingMachine extends Component {
    render() {
        return(
            <div className='VendingMachine'>
                <div className="VendingMachine-intro">
                    <p>Hello,  I am a Vending Machine. What would you like to eat?</p>
                </div>
                <div className="VendingMachine-links">
                    <Link className="links" to="/soda">Soda</Link>
                    <Link className="links" to="/chips">Chips</Link>
                    <Link className="links" to="/sardines">Sardines</Link>
                </div>
            </div>
        )
    }
}

export default VendingMachine;