import React from 'react';
import './Tile.css';

const tile = ( props ) => {

    return (
        <div>
            <img className='tile' src={props.image.src} alt='fs'/>
            <p>{props.image.text}</p>
        </div>
    )
}

export default tile;
