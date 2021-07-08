import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Chips.css';

class Chips extends Component {
    render(){
        return(
            <div className='Chips'>
                <h1>Bags Eaten: {this.props.bagsEaten}</h1>
                <button onClick={this.props.handleClick}>Nom Nom Nom</button>
                <Link to='/'>Go Back</Link>
            </div>
        )
    }
}

export default Chips;