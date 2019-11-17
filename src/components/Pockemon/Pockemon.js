import React from 'react';
import './Pockemon.css';

const tile = ( props ) => {

    const image = props.item.sprites.front_default || ''
    const name = props.item.name || ''

    return (
        <div>
            <img className='tile' src={image} alt='fs'/>
            <p>{name}</p>
        </div>
    )
}

export default tile;
