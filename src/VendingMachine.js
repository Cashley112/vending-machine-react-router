import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './VendingMachine.css';

class VendingMachine extends Component {
    render() {
        return(
            <div className='VendingMachine'>
                <nav>
                    <NavLink exact activeClassName='active-link' to="/soda">Soda</NavLink>
                    <NavLink exact activeClassName='active-link' to="/chips">Chips</NavLink>
                    <NavLink exact activeClassName='active-link' to="/sardines">Sardines</NavLink>
                </nav>
                <h1>This is Vending Machine</h1>
            </div>
        )
    }
}

export default VendingMachine;