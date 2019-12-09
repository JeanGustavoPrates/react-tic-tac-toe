import React from 'react';
import StyledSquare from './styles';

function Square(props) {
    return (
        <StyledSquare
            onClick={props.onClick}
        >
            {props.value || ' '}
        </StyledSquare>
    );
}

export default Square;