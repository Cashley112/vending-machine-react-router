import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Soda.css';

class Soda extends Component {
    render(){
        return(
            <div className='Soda'>
                <img className="Soda-img1" alt="soda can" src="https://png.pngitem.com/pimgs/s/41-414658_cold-coca-cola-can-hd-png-download.png"/>
                <div className='Soda-block'>
                    <h1>Soda Is Bad For You</h1>
                    <Link className='Soda-link' to='/'>Go Back</Link>
                </div>
                <img className="Soda-img2" alt="soda can" src="https://png.pngitem.com/pimgs/s/41-414658_cold-coca-cola-can-hd-png-download.png"/>
            </div>
        )
    }
}

export default Soda;