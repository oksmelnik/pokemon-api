import React from 'react';
import styled from 'styled-components';

const tile = ( props ) => {

    const StyledImg = styled.img`
        margin: 10%;
        background: grey;
        border-radius: 6px;
        border: 3px solid white;
        background: ${props.image.color}
        width: 80%;
    `
    return (
        <div>
            <StyledImg
                src={props.image.src}
                alt={props.image.text}
            />
            <p>{props.image.text}</p>
        </div>
    )
}

export default tile;
