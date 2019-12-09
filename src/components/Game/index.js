import React, { Component } from 'react';
import Board from '../Board';
import StyledGame from './styles';

class Game extends Component {
    render() {
        return (
            <StyledGame>
                <Board></Board>
            </StyledGame>
        );
    }
}

export default Game;