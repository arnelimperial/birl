import React from 'react';
import './card.style.css';

export const Card = props => (
    <div className='card-container'>
        <img src={ `https://robohash.org/${props.birl.id}?set=set2&size=180x180`} alt="birls"/>
        <h3>{ props.birl.name }</h3>
        <p>{ props.birl.email }</p>
    </div>

);