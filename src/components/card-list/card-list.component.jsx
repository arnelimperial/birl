import React from 'react';
import './card-list.style.css';
import { Card } from '../card/card.component';

export const CardList = props => {

    return <div className='card-list'>
        {props.birls.map(
            birl => (<Card key={ birl.id } birl={ birl } />
        ))}
    </div>;
} 