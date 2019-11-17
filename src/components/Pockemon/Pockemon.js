import React from 'react';
import styled from 'styled-components';

const tile = ( props ) => {

    const image = props.item.sprites.front_default || ''
    const name = props.item.name || ''

    const StyledImg = styled.img`
        height: 100px;
        background: grey;
        color: white;
    `
    return (
        <div>
            <StyledImg src={image} alt={name}/>
            <p>{name}</p>
        </div>
    )
}

export default tile;
